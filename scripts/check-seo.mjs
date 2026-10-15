import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { createRequire } from 'node:module';
import ts from 'typescript';

const origin = 'https://www.marketersi.pl';
const pages = ['/', '/tworzenie-stron-i-design-ux', '/asystent-ai-do-odbierania-telefonow', '/test-za-0-zl', '/wizytowka-google', '/poradniki', '/poradniki/co-powinna-zawierac-strona-malej-firmy', '/poradniki/dlaczego-strona-nie-pozyskuje-klientow', '/poradniki/ile-kosztuje-strona-internetowa', '/poradniki/ile-telefonow-nie-odbiera-twoja-firma'];
const outputFile = path => `out/${path === '/' ? 'index' : path.slice(1)}.html`;
const titles = new Set();
for (const path of pages) {
  const html = readFileSync(outputFile(path), 'utf8');
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert(title && !titles.has(title), `${path}: missing or duplicate title`);
  titles.add(title);
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${path}: one primary heading`);
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  assert(canonical && new URL(canonical).href === new URL(origin+path).href, `${path}: canonical`);
  assert(!/<meta name="robots" content="[^"]*noindex/.test(html), `${path}: indexable`);
  const text = html.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/g, '').replace(/<[^>]+>/g, ' ');
  assert(text.trim().split(/\s+/).length > 130, `${path}: content must be in HTML`);
  for (const [,href] of html.matchAll(/<a\b[^>]*href="(\/[^"#?]*)/g)) {
    assert(existsSync(outputFile(href)), `${path}: broken internal link ${href}`);
  }
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap(m=>JSON.parse(m[1])['@graph'] || []);
  if (['/asystent-ai-do-odbierania-telefonow', '/test-za-0-zl', '/wizytowka-google'].includes(path)) {
    assert(schemas.some(s=>s['@type']==='Service' && s.url===origin+path), `${path}: service schema`);
    assert(schemas.some(s=>s['@type']==='FAQPage' && s.mainEntity?.length>=3), `${path}: FAQ schema`);
  }
  if (path.startsWith('/poradniki/')) {
    assert(schemas.some(s=>s['@type']==='BlogPosting' && s.url===origin+path), `${path}: article schema`);
    assert(schemas.some(s=>s['@type']==='BreadcrumbList'), `${path}: breadcrumbs`);
    assert(text.includes('Źródła i dalsza lektura'), `${path}: sources`);
  }
}
const sitemap = readFileSync('out/sitemap.xml', 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]);
assert.equal(new Set(urls).size, urls.length, 'Sitemap has duplicate URLs');
for(const path of pages) assert(urls.includes(origin+path), `Sitemap misses ${path}`);
assert(readFileSync('out/dziekujemy.html','utf8').includes('noindex'), 'Thank-you must stay noindex');
assert(!readFileSync('out/robots.txt','utf8').includes('Disallow: /dziekujemy'), 'Crawler must be allowed to read noindex');

// Exercise the actual reducer: a failed refresh must never replace useful HTML with an error.
const source = readFileSync('src/redux/home/homeSlice.ts', 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } });
const module = { exports: {} };
new Function('require','module','exports',compiled.outputText)(createRequire(import.meta.url),module,module.exports);
const { default: reducer, fetchHomeScreenStart, fetchHomeScreenSuccess, fetchHomeScreenFail } = module.exports;
const empty = reducer(undefined, {type:'init'});
assert.equal(reducer(empty,fetchHomeScreenFail()).isError,true);
const loaded = reducer(empty,fetchHomeScreenSuccess({response:{heroSection:{title:'Available content'}}}));
const pending = reducer(loaded,fetchHomeScreenStart());
const failed = reducer(pending,fetchHomeScreenFail());
assert.equal(pending.isLoading,false);
assert.equal(failed.isError,false);
assert.deepEqual(failed.screenData,loaded.screenData);
console.log(`SEO checks passed: ${pages.length} pages, ${urls.length} sitemap URLs, canonical links, schemas, noindex and refresh fallback.`);
