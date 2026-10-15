import Link from "next/link";
import styles from "@/app/poradniki/poradniki.module.css";

export default function SeoIntro() {
  return <section className={styles.page} aria-labelledby="marketing-malej-firmy"><div className={styles.wrap}>
    <p className={styles.eyebrow}>Kim jesteśmy</p>
    <h2 id="marketing-malej-firmy">Marketersi: AI, strona i widoczność w Google dla małych firm</h2>
    <p className={styles.lead}>Marketersi to agencja z Warszawy, która pomaga małym firmom usługowym w całej Polsce wdrażać AI tam, gdzie od razu widać wynik: w odbieraniu telefonów, w wizytówce Google i na stronie, która prowadzi klienta do kontaktu. Pracujemy zdalnie, rozliczamy się w stałym abonamencie i zaczynamy od pomiaru, nie od oferty. Założyciel, Michał Klamkowski, od 12 lat prowadzi zespoły sprzedaży telefonicznej.</p>
    <div className={styles.grid}>
      <article className={styles.card}><h3><Link href="/test-za-0-zl">Test za 0 zł: ile telefonów ginie w Twojej firmie</Link></h3><p>Przez tydzień dzwonimy do Twojej firmy o różnych porach i wysyłamy raport z godzinami nieodebranych połączeń.</p></article>
      <article className={styles.card}><h3><Link href="/asystent-ai-do-odbierania-telefonow">Asystent AI odbiera telefony, gdy Ty pracujesz</Link></h3><p>Po godzinach i gdy masz zajęte ręce: asystent odbiera, spisuje sprawę i wysyła SMS. Stała cena miesięczna.</p></article>
      <article className={styles.card}><h3><Link href="/wizytowka-google">Wizytówka Google w abonamencie</Link></h3><p>Dane, zdjęcia, opinie i odpowiedzi, spójne informacje dla Google i odpowiedzi AI, raport co miesiąc.</p></article>
      <article className={styles.card}><h3><Link href="/tworzenie-stron-i-design-ux">Strona internetowa, która przynosi klientów</Link></h3><p>Szybka na telefonie, zrozumiała dla klienta i dla AI, z jednym zadaniem: doprowadzić do telefonu lub formularza.</p></article>
    </div>
    <p>Zanim wydasz pieniądze, przeczytaj: <Link href="/poradniki/ile-kosztuje-strona-internetowa">ile kosztuje strona internetowa w 2026 roku</Link>, <Link href="/poradniki/ile-telefonow-nie-odbiera-twoja-firma">ile telefonów nie odbiera Twoja firma</Link> albo <Link href="/poradniki">wszystkie poradniki dla małych firm</Link>.</p>
  </div></section>;
}
