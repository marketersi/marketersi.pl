import Link from "next/link";
import styles from "@/app/poradniki/poradniki.module.css";
import { Faq, Schemat, daneOferty, type Pytanie } from "./Oferta";

// Sekcja SEO i AEO pod formularzem /zamow-bezplatne-badanie (15.10.2026).
const PYTANIA: Pytanie[] = [
  { q: "Ile kosztuje badanie?", a: "Nic. Badanie jest bezpłatne i nie zobowiązuje do współpracy. W zamian prosimy o 15 minut rozmowy o wynikach." },
  { q: "Ile trwa badanie i kiedy dostanę wynik?", a: "Raport wysyłamy w ciągu 7 dni roboczych od zgłoszenia. Jeśli zgłaszasz test telefonów, sam pomiar trwa tydzień, bo dzwonimy o różnych porach." },
  { q: "Co sprawdzacie?", a: "Pięć rzeczy: czy firma jest w Google i Mapach, jak wygląda wizytówka i opinie, czy strona działa na telefonie i prowadzi do kontaktu, co o firmie mówią odpowiedzi AI (ChatGPT, Claude, Google AI Mode) i czy firma odbiera telefon od nowego klienta." },
  { q: "Czy muszę dawać dostęp do konta Google lub strony?", a: "Nie. Badanie robimy z zewnątrz, tak jak widzi Cię klient. Dostępy są potrzebne dopiero wtedy, gdy zdecydujesz się na współpracę." },
];

const dane = daneOferty({
  sciezka: "/zamow-bezplatne-badanie",
  nazwa: "Bezpłatne badanie widoczności firmy w Google i AI",
  opis: "Sprawdzamy wizytówkę Google, opinie, stronę na telefonie, odpowiedzi AI o firmie i odbieranie telefonów. Raport z listą poprawek w 7 dni roboczych, bezpłatnie.",
  typ: "Audyt widoczności lokalnej i strony internetowej",
  pytania: PYTANIA,
  cena: { od: 0, opis: "Bezpłatne badanie widoczności, raport w 7 dni roboczych" },
});

export default function BadanieSeo() {
  return <section className={styles.page} aria-labelledby="co-sprawdzamy"><div className={styles.wrap}>
    <Schemat dane={dane} />
    <p className={styles.eyebrow}>Bezpłatne badanie</p>
    <h2 id="co-sprawdzamy">Co sprawdzamy w bezpłatnym badaniu</h2>
    <div className={styles.odpowiedz}><p>Bezpłatne badanie widoczności to sprawdzenie Twojej firmy oczami klienta: czy znajdzie Cię w Google i w odpowiedziach AI, co zobaczy w wizytówce i na stronie, i czy dodzwoni się do firmy. W ciągu 7 dni roboczych dostajesz raport z listą poprawek; część zrobisz sam, bez kupowania czegokolwiek.</p></div>
    <ol className={styles.kroki}>
      <li><strong>Google i Mapy.</strong> Na jakie zapytania firma się pokazuje, a na jakie pokazują się konkurenci z okolicy.</li>
      <li><strong>Wizytówka i opinie.</strong> Kompletność Profilu Firmy w Google, liczba i świeżość opinii, odpowiedzi na opinie.</li>
      <li><strong>Strona na telefonie.</strong> Czy w pierwszym zdaniu widać, co robisz i gdzie, czy działa przycisk telefonu i formularz.</li>
      <li><strong>Odpowiedzi AI.</strong> Co ChatGPT, Claude i Google AI Mode mówią o Twojej firmie i branży w Twoim mieście.</li>
      <li><strong>Telefon.</strong> Na życzenie: <Link href="/test-za-0-zl">test za 0 zł</Link>, czyli tydzień połączeń o różnych porach. W formularzu wpisz „test telefonów”.</li>
    </ol>
    <h2>Pytania o badanie</h2>
    <Faq pytania={PYTANIA} />
  </div></section>;
}
