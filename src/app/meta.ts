import type { Metadata } from "next";

// Wspólne ustawienia metadanych SEO (etap 1, 8.10.2026).
export const ADRES = "https://www.marketersi.pl";

export function strona(
  tytul: string,
  opis: string,
  sciezka: string,
  opcje: { indeksuj?: boolean } = {}
): Metadata {
  const indeksuj = opcje.indeksuj ?? true;
  return {
    title: tytul,
    description: opis,
    alternates: { canonical: sciezka },
    robots: { index: indeksuj, follow: true },
    openGraph: {
      title: `${tytul} | Marketersi`,
      description: opis,
      url: sciezka,
      siteName: "Marketersi",
      locale: "pl_PL",
      type: "website",
    },
  };
}
