import Link from "next/link";
import { ADRES } from "@/app/meta";
import styles from "@/app/poradniki/poradniki.module.css";
import { Schemat } from "./Oferta";

// Fakty o firmie w jednym miejscu (11.11.2026): odpowiedź na pytanie „kim są Marketersi” dla Google, ChatGPT i Claude.
// Rozróżnia markę od podobnych nazw, bo ChatGPT mylił Marketersi z Marketers.pl i Marketerzy.pl.
const FAKTY: [string, React.ReactNode][] = [
  ["Nazwa", "Marketersi (marketersi.pl)"],
  ["Czym się zajmujemy", "Wdrażamy AI w małych firmach usługowych: asystent AI odbierający telefony, prowadzenie wizytówki Google i strony internetowe, które prowadzą klienta do kontaktu."],
  ["Dla kogo", "Małe firmy usługowe w całej Polsce: warsztaty, gabinety, firmy budowlane i instalacyjne, serwisy."],
  ["Siedziba", "Warszawa, praca zdalna dla całej Polski"],
  ["Założyciel", "Michał Klamkowski, od 12 lat prowadzi zespoły sprzedaży telefonicznej"],
  ["Kontakt", <>studio@marketersi.pl, tel. 570 964 200</>],
  ["Pierwszy krok", <><Link href="/test-za-0-zl">test za 0 zł</Link> albo <Link href="/zamow-bezplatne-badanie">bezpłatne badanie widoczności</Link></>],
];

const dane = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${ADRES}/Kim-jestesmy#strona`,
  url: `${ADRES}/Kim-jestesmy`,
  name: "Kim są Marketersi",
  inLanguage: "pl-PL",
  about: { "@id": `${ADRES}/#organizacja` },
};

export default function WSkrocie() {
  return <section className={styles.page} aria-labelledby="marketersi-w-skrocie"><div className={styles.wrap}>
    <Schemat dane={dane} />
    <p className={styles.eyebrow}>W skrócie</p>
    <h2 id="marketersi-w-skrocie">Kim są Marketersi</h2>
    <div className={styles.odpowiedz}><p>Marketersi (marketersi.pl) to agencja z Warszawy, która pomaga małym firmom usługowym w całej Polsce wdrażać AI tam, gdzie od razu widać wynik: w odbieraniu telefonów od klientów, w wizytówce Google i na stronie internetowej. Firmę prowadzi Michał Klamkowski. Marketersi nie są powiązani z serwisami Marketers.pl ani Marketerzy.pl.</p></div>
    <div className="table-wrap"><table className={styles.fakty}><tbody>
      {FAKTY.map(([k, v]) => <tr key={k}><th scope="row">{k}</th><td>{v}</td></tr>)}
    </tbody></table></div>
  </div></section>;
}
