import Link from "next/link";
import { notFound } from "next/navigation";
import { ADRES, strona } from "@/app/meta";
import { poradniki, DATA_PUBLIKACJI, dataSlownie } from "@/content/poradniki";
import styles from "../poradniki.module.css";

type Props = { params: { slug: string } };
export function generateStaticParams() { return poradniki.map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }: Props) {
  const p = poradniki.find(p => p.slug === params.slug);
  if (!p) notFound();
  const data = p.data ?? DATA_PUBLIKACJI;
  return { ...strona(p.title, p.description, `/poradniki/${p.slug}`), openGraph: {
    title: `${p.title} | Marketersi`, description: p.description,
    url: `/poradniki/${p.slug}`, siteName: "Marketersi", locale: "pl_PL", type: "article",
    publishedTime: data, modifiedTime: data,
  } };
}
export default function PoradnikPage({ params }: Props) {
  const p = poradniki.find(p => p.slug === params.slug);
  if (!p) notFound();
  const url = `${ADRES}/poradniki/${p.slug}`;
  const data = p.data ?? DATA_PUBLIKACJI;
  const schemat = { "@context": "https://schema.org", "@graph": [
    { "@type": "BlogPosting", "@id": `${url}#artykul`, headline: p.title, description: p.description,
      mainEntityOfPage: url, url, inLanguage: "pl-PL", datePublished: data, dateModified: data,
      author: { "@type": "Organization", "@id": `${ADRES}/#organizacja`, name: "Marketersi", url: `${ADRES}/Kim-jestesmy` },
      publisher: { "@id": `${ADRES}/#organizacja` } },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Marketersi", item: ADRES },
      { "@type": "ListItem", position: 2, name: "Poradniki", item: `${ADRES}/poradniki` },
      { "@type": "ListItem", position: 3, name: p.title, item: url },
    ] },
  ] };
  return <main className={styles.page}><div className={styles.wrap}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemat).replace(/</g, "\\u003c") }} />
    <nav aria-label="Okruszki"><ol className={styles.breadcrumb}><li><Link href="/">Marketersi</Link> /</li><li><Link href="/poradniki">Poradniki</Link> /</li><li aria-current="page">{p.title}</li></ol></nav>
    <article className={styles.article}>
      <h1>{p.title}</h1><p className={styles.meta}>Autor: <Link href="/Kim-jestesmy">Marketersi</Link> · <time dateTime={data}>{dataSlownie(data)}</time></p>
      <p className={styles.lead}>{p.intro}</p>
      <nav aria-label="Spis treści" className={styles.toc}><h2>W tym poradniku</h2><ol>{p.sections.map(s => <li key={s.id}><a href={`#${s.id}`}>{s.title.replace(/^\d\. /, "")}</a></li>)}</ol></nav>
      {p.sections.map(s => <section key={s.id} id={s.id}><h2>{s.title}</h2>{s.body}</section>)}
      <section><h2>Źródła i dalsza lektura</h2><ul>{p.sources.map(s => <li key={s.url}><a href={s.url}>{s.title}</a></li>)}</ul></section>
      <aside className={styles.cta}><h2>Sprawdź swoją stronę z Marketersi</h2><p>Zacznij od opisu firmy i problemu, który chcesz rozwiązać.</p><Link className={styles.button} href="/zamow-bezplatne-badanie">Zamów bezpłatne badanie</Link></aside>
    </article>
    <aside className={styles.related}><h2>Czytaj dalej</h2>{poradniki.filter(other => other.slug !== p.slug).map(other => <p key={other.slug}><Link href={`/poradniki/${other.slug}`}>{other.title}</Link></p>)}</aside>
  </div></main>;
}
