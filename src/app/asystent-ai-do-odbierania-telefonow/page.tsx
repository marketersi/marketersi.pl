import Link from "next/link";
import { strona } from "@/app/meta";
import styles from "@/app/poradniki/poradniki.module.css";
import { Faq, KrokDalej, Okruszki, Schemat, daneOferty, type Pytanie } from "@/components/seo/Oferta";

const NAZWA = "Asystent AI do odbierania telefonów w małej firmie";
const OPIS =
  "Asystent AI odbiera telefony, gdy jesteś zajęty lub po godzinach, spisuje potrzebę klienta i wysyła Ci SMS. Dla warsztatów, gabinetów, ekip budowlanych i hydraulików. Stała cena miesięczna.";

export const metadata = strona(NAZWA, OPIS, "/asystent-ai-do-odbierania-telefonow");

const PYTANIA: Pytanie[] = [
  { q: "Czy klient pozna, że rozmawia z AI?", a: "Tak, asystent przedstawia się jako asystent firmy. Nie udaje człowieka. Klienci dzwonią, bo chcą załatwić sprawę: umówić termin, zapytać o cenę, zgłosić awarię. Asystent to spisuje i mówi, kiedy oddzwonisz. Dla klienta liczy się to, że ktoś odebrał i że dostał odpowiedź." },
  { q: "Co się dzieje, gdy asystent nie zna odpowiedzi?", a: "Mówi, że przekaże pytanie właścicielowi, zapisuje je i wysyła Ci SMS z numerem i treścią. Nie zmyśla cen ani terminów. Zakres tego, co może obiecać, ustalamy razem przed uruchomieniem." },
  { q: "Czy muszę zmieniać numer telefonu?", a: "Nie. Ustawiamy przekierowanie z Twojego numeru na asystenta tylko wtedy, gdy nie odbierasz, na przykład po 4 sygnałach, albo tylko w wybranych godzinach. Jeśli odbierasz, rozmowa trafia do Ciebie jak dotąd." },
  { q: "Ile to kosztuje?", a: "Stała opłata miesięczna, bez rozliczania za minutę. Dokładną kwotę podajemy po bezpłatnym teście, bo zależy od liczby połączeń i tego, czy asystent ma umawiać terminy w Twoim kalendarzu. Przed podpisaniem czegokolwiek pokazujemy raport z testu, więc wiesz, za co płacisz." },
  { q: "Jak szybko to działa?", a: "Scenariusz rozmowy przygotowujemy na podstawie rozmowy z Tobą i Twojej strony. Uruchomienie zajmuje zwykle kilka dni roboczych. Pierwsze dwa tygodnie słuchamy nagrań i poprawiamy odpowiedzi." },
  { q: "Czy to legalne i co z danymi klientów?", a: "Rozmowy są nagrywane i przetwarzane po to, żeby przekazać Ci sprawę klienta. Asystent informuje o tym na początku rozmowy. Dane trafiają tylko do Ciebie, nie są sprzedawane ani używane do innych celów. Dostajesz od nas gotową klauzulę informacyjną." },
];

const dane = daneOferty({ sciezka: "/asystent-ai-do-odbierania-telefonow", nazwa: NAZWA, opis: OPIS, typ: "Asystent telefoniczny AI dla firm", pytania: PYTANIA });

export default function AsystentAiPage() {
  return <main className={styles.page}><div className={styles.wrap}>
    <Schemat dane={dane} />
    <Okruszki nazwa="Asystent AI do telefonów" />
    <p className={styles.eyebrow}>Żadne zapytanie nie ginie</p>
    <h1>Asystent AI odbiera telefony, gdy Ty pracujesz</h1>
    <div className={styles.odpowiedz}><p>Asystent AI do odbierania telefonów to usługa dla małej firmy usługowej: gdy nie odbierasz, bo jesteś u klienta, na budowie albo po godzinach, rozmowę przejmuje asystent. Przedstawia się, pyta o sprawę, spisuje numer i potrzebę, a Ty dostajesz SMS z treścią w ciągu minuty. Klient słyszy, kiedy oddzwonisz, zamiast sygnału bez odpowiedzi.</p></div>
    <p className={styles.lead}>W jedynym polskim badaniu tego zjawiska 34% firm z pierwszej strony Google nie odebrało telefonu od potencjalnego klienta (Fachowcy.pl, 400 firm, 2016). Nikt tego od tamtej pory nie zmierzył ponownie, dlatego robimy to sami: <Link href="/test-za-0-zl">test za 0 zł</Link> pokazuje, ile połączeń ginie w Twojej firmie.</p>

    <section>
      <h2>Jak to działa</h2>
      <ol className={styles.kroki}>
        <li><strong>Rozmowa o Twojej firmie.</strong> Jakie usługi, jakie pytania zadają klienci, co asystent może obiecać, a czego nie. Z tego powstaje scenariusz po polsku, bez obcego akcentu.</li>
        <li><strong>Przekierowanie, nie nowy numer.</strong> Twój numer zostaje. Asystent włącza się dopiero wtedy, gdy nie odbierasz, albo w godzinach, które wskażesz.</li>
        <li><strong>SMS po każdej rozmowie.</strong> Numer klienta, sprawa, pilność, proponowany termin. Oddzwaniasz, gdy masz chwilę, z gotową informacją.</li>
        <li><strong>Raport co miesiąc.</strong> Ile połączeń przejął asystent, o jakich porach, ile z nich zamieniło się w zlecenia. Z raportu widać, czy usługa się opłaca.</li>
      </ol>
    </section>

    <section>
      <h2>Dla kogo</h2>
      <div className={styles.dwie}>
        <article className={styles.card}><h3>Pasuje, gdy</h3><ul>
          <li>klienci dzwonią, a Ty w tym czasie masz ręce zajęte: warsztat, gabinet, montaż, remont, hydraulika, elektryka,</li>
          <li>po 17:00 i w weekendy telefon dzwoni, a Ty nie chcesz odbierać,</li>
          <li>nie opłaca się zatrudniać osoby tylko do odbierania,</li>
          <li>chcesz wiedzieć, ile zapytań tracisz, zanim wydasz pieniądze na reklamę.</li>
        </ul></article>
        <article className={styles.card}><h3>Nie pasuje, gdy</h3><ul>
          <li>każdą rozmowę musi prowadzić specjalista od pierwszego zdania, na przykład doradztwo prawne w sprawach pilnych,</li>
          <li>masz recepcję, która odbiera 100% połączeń i tak jest dobrze,</li>
          <li>nie chcesz oddzwaniać do klientów w ciągu dnia; asystent zbiera sprawy, ale zlecenie domykasz Ty.</li>
        </ul></article>
      </div>
    </section>

    <section>
      <h2>Co zyskujesz, a czego nie obiecujemy</h2>
      <p>Zyskujesz każde połączenie, które dziś kończy się sygnałem bez odpowiedzi, i spokój po godzinach. Nie obiecujemy, że asystent sprzeda usługę za Ciebie ani że zastąpi rozmowę z fachowcem. Jego zadanie jest proste: odebrać, spisać, przekazać, umówić. Przed uruchomieniem słuchasz próbnej rozmowy i decydujesz, czy jakość jest wystarczająca dla Twoich klientów.</p>
      <p>Usługę łączymy z <Link href="/wizytowka-google">prowadzeniem wizytówki Google</Link>: więcej osób znajduje firmę, a każda z nich się dodzwania. Jeśli strona firmy nie prowadzi do telefonu, zaczynamy od <Link href="/tworzenie-stron-i-design-ux">strony, która przynosi klientów</Link>.</p>
    </section>

    <section>
      <h2>Najczęstsze pytania</h2>
      <Faq pytania={PYTANIA} />
    </section>

    <KrokDalej tytul="Zacznij od testu za 0 zł" tekst={<>Zadzwonimy do Twojej firmy kilka razy w tygodniu o różnych porach i wyślemy raport: ile połączeń zostało odebranych, a ile zginęło. Bez zobowiązań. Pytania: <a href="tel:+48570964200">570 964 200</a>.</>} />
  </div></main>;
}
