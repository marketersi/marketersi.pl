import Link from "next/link";
import styles from "@/app/poradniki/poradniki.module.css";
import { Faq, Schemat, daneOferty, type Pytanie } from "./Oferta";

// Sekcja SEO i AEO na /tworzenie-stron-i-design-ux (15.10.2026): odpowiedź pod H1, dla kogo, FAQ.
const PYTANIA: Pytanie[] = [
  { q: "Ile kosztuje strona internetowa dla firmy?", a: "Prosta strona firmowa do 5 lub 7 podstron kosztuje u polskich wykonawców najczęściej od 3 000 do 7 000 zł netto (CenaUslug.pl 2026, KB.pl). Wycenę podajemy po rozmowie, bo zależy od liczby usług, tego, kto pisze teksty, i od tego, czy potrzebujesz formularza, kalendarza lub sklepu." },
  { q: "Ile trwa zrobienie strony?", a: "Prosta strona firmowa to zwykle od 2 do 4 tygodni od rozmowy do publikacji. Najdłużej trwa zebranie treści i zdjęć, dlatego teksty piszemy z Tobą, na podstawie rozmowy, a nie czekamy, aż je dostarczysz." },
  { q: "Czy strona będzie widoczna w Google i w odpowiedziach AI?", a: "Każda strona dostaje tytuły i opisy pod frazy, których szukają Twoi klienci, mapę witryny, dane strukturalne i zgłoszenie do Google Search Console. Treść piszemy tak, żeby pierwszy akapit odpowiadał na pytanie klienta, bo takie fragmenty cytują Google AI Mode, ChatGPT i Claude. Pozycji nikt uczciwy nie gwarantuje." },
  { q: "Do kogo należy domena i strona?", a: "Do Ciebie. Domena jest rejestrowana na Twoją firmę, dostajesz dostęp do hostingu, plików i narzędzi pomiarowych. Gdy kończymy współpracę, wszystko zostaje u Ciebie." },
  { q: "Czy potrzebuję nowej strony, czy wystarczy poprawić obecną?", a: "Często wystarczy poprawka: jasny pierwszy ekran, działający przycisk telefonu na komórce, formularz i pomiar zapytań. Zanim wycenimy nową stronę, robimy bezpłatne badanie obecnej i mówimy wprost, czy przebudowa ma sens." },
];

const dane = daneOferty({
  sciezka: "/tworzenie-stron-i-design-ux",
  nazwa: "Strona internetowa dla firmy, która przynosi klientów",
  opis: "Projektowanie stron internetowych dla małych firm usługowych: szybkie na telefonie, widoczne w Google i czytelne dla AI, z jednym zadaniem: doprowadzić klienta do telefonu lub formularza.",
  typ: "Projektowanie stron internetowych",
  pytania: PYTANIA,
});

export default function UxSeo() {
  return <section className={styles.page} aria-labelledby="strona-dla-firmy"><div className={styles.wrap}>
    <Schemat dane={dane} />
    <p className={styles.eyebrow}>Strona, która dzwoni</p>
    <h2 id="strona-dla-firmy">Strona internetowa dla firmy ma jedno zadanie: doprowadzić klienta do kontaktu</h2>
    <div className={styles.odpowiedz}><p>Robimy strony internetowe dla małych firm usługowych w całej Polsce. Strona ma być szybka na telefonie, mówić w pierwszym zdaniu, co robisz, dla kogo i gdzie, i prowadzić do jednego kroku: telefonu albo krótkiego formularza. Treści piszemy z Tobą, ustawiamy widoczność w Google i pomiar zapytań, a domena i strona należą do Ciebie.</p></div>
    <div className={styles.dwie}>
      <article className={styles.card}><h3>Dla kogo</h3><ul>
        <li>firmy usługowe, do których klienci dzwonią: budowlanka, instalacje, warsztaty, gabinety, serwisy,</li>
        <li>firmy bez strony albo ze stroną, która nie działa na telefonie,</li>
        <li>firmy, które płacą za reklamę, a nie wiedzą, ile zapytań z niej mają.</li>
      </ul></article>
      <article className={styles.card}><h3>Co dostajesz</h3><ul>
        <li>teksty napisane z Tobą, pod pytania Twoich klientów,</li>
        <li>przycisk telefonu i formularz sprawdzone na prawdziwym telefonie,</li>
        <li>Google Search Console, mapę witryny, dane strukturalne,</li>
        <li>pomiar: ile osób kliknęło telefon i wysłało formularz.</li>
      </ul></article>
    </div>
    <p>Strona nie pomoże, jeśli nikt nie odbiera telefonu. Dlatego zanim wycenimy stronę, proponujemy <Link href="/test-za-0-zl">test za 0 zł</Link>, a gdy połączenia giną po godzinach, <Link href="/asystent-ai-do-odbierania-telefonow">asystenta AI do odbierania telefonów</Link>. Ceny rynkowe ze źródłami: <Link href="/poradniki/ile-kosztuje-strona-internetowa">ile kosztuje strona internetowa w 2026 roku</Link>.</p>
    <h2>Pytania o stronę dla firmy</h2>
    <Faq pytania={PYTANIA} />
  </div></section>;
}
