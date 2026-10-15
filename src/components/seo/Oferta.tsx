import Link from "next/link";
import type { ReactNode } from "react";
import { ADRES } from "@/app/meta";
import styles from "@/app/poradniki/poradniki.module.css";

// Wspólne elementy stron oferty (asystent AI, test za 0 zł, wizytówka Google), 15.10.2026.
// Każda strona: odpowiedź w pierwszym akapicie (dla AI), kroki, FAQ z danymi FAQPage, jeden krok dalej.

export type Pytanie = { q: string; a: string };

export function Faq({ pytania }: { pytania: Pytanie[] }) {
  return <div className={styles.faq}>{pytania.map(p => <details key={p.q}><summary>{p.q}</summary><p>{p.a}</p></details>)}</div>;
}

export function daneOferty(opcje: {
  sciezka: string; nazwa: string; opis: string; typ?: string; pytania?: Pytanie[]; cena?: { od: number; opis: string };
}) {
  const url = `${ADRES}${opcje.sciezka}`;
  const graf: any[] = [
    { "@type": "Service", "@id": `${url}#usluga`, name: opcje.nazwa, description: opcje.opis, url,
      serviceType: opcje.typ ?? opcje.nazwa, inLanguage: "pl-PL",
      provider: { "@id": `${ADRES}/#organizacja` }, areaServed: { "@type": "Country", name: "Polska" },
      ...(opcje.cena ? { offers: { "@type": "Offer", priceCurrency: "PLN", price: opcje.cena.od, description: opcje.cena.opis, url } } : {}) },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Marketersi", item: ADRES },
      { "@type": "ListItem", position: 2, name: opcje.nazwa, item: url },
    ] },
  ];
  if (opcje.pytania?.length) {
    graf.push({ "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: opcje.pytania.map(p => ({
      "@type": "Question", name: p.q, acceptedAnswer: { "@type": "Answer", text: p.a } })) });
  }
  return { "@context": "https://schema.org", "@graph": graf };
}

export function Schemat({ dane }: { dane: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dane).replace(/</g, "\\u003c") }} />;
}

export function Okruszki({ nazwa }: { nazwa: string }) {
  return <nav aria-label="Okruszki"><ol className={styles.breadcrumb}><li><Link href="/">Marketersi</Link> /</li><li aria-current="page">{nazwa}</li></ol></nav>;
}

export function KrokDalej({ tytul, tekst, href = "/test-za-0-zl", przycisk = "Zamów test za 0 zł" }: { tytul: string; tekst: ReactNode; href?: string; przycisk?: string }) {
  return <aside className={styles.cta}><h2>{tytul}</h2><p>{tekst}</p><Link className={styles.button} href={href}>{przycisk}</Link></aside>;
}

export const TELEFON = "570 964 200";
export const TELEFON_LINK = "tel:+48570964200";
