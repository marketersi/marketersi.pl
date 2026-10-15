import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Powloka from "./Powloka";
import { ADRES } from "./meta";
import { getPublicContent } from "@/services/publicContent";

const inter = Inter({ subsets: ["latin"] });

const TYTUL = "Marketersi: strony, Google i AI dla małych firm. Włącz TURBO";
const OPIS =
  "AI nie zastąpi ludzi, ale ludzie z AI zastąpią tych bez AI. Pomagamy małym firmom wdrożyć AI, stronę i widoczność w Google. Umów konsultację.";

export const metadata: Metadata = {
  metadataBase: new URL(ADRES),
  title: { default: TYTUL, template: "%s | Marketersi" },
  description: OPIS,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: TYTUL,
    description: OPIS,
    url: "/",
    siteName: "Marketersi",
    locale: "pl_PL",
    type: "website",
  },
};

const daneStrukturalne = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${ADRES}/#organizacja`,
      name: "Marketersi",
      url: ADRES,
      logo: "https://images.prismic.io/marketersi/Zn0rnpbWFbowe74p_Marketersi-logo.png?auto=format,compress",
      email: "studio@marketersi.pl",
      description: OPIS,
      areaServed: { "@type": "Country", name: "Polska" },
      founder: { "@type": "Person", name: "Michał Klamkowski" },
      address: { "@type": "PostalAddress", addressLocality: "Warszawa", addressCountry: "PL" },
      knowsAbout: [
        "asystent AI do odbierania telefonów",
        "widoczność firmy w Google",
        "Profil Firmy w Google",
        "widoczność w odpowiedziach AI",
        "strony internetowe dla małych firm",
        "wideo dla firm",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${ADRES}/#strona`,
      url: ADRES,
      name: "Marketersi",
      inLanguage: "pl-PL",
      publisher: { "@id": `${ADRES}/#organizacja` },
    },
  ],
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const content = await getPublicContent();
  return (
    <html lang="pl">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(daneStrukturalne) }}
        />
        <Powloka content={content}>{children}</Powloka>
      </body>
    </html>
  );
}
