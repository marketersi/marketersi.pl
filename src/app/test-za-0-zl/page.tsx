import Link from "next/link";
import { strona } from "@/app/meta";
import styles from "@/app/poradniki/poradniki.module.css";
import { Faq, Okruszki, Schemat, daneOferty, type Pytanie } from "@/components/seo/Oferta";

const NAZWA = "Test za 0 zł: ile telefonów od klientów ginie w Twojej firmie";
const OPIS =
  "Przez tydzień dzwonimy do Twojej firmy o różnych porach i wysyłamy raport: ile połączeń odebrano, ile zginęło i o której. Bez kosztów i zobowiązań.";

export const metadata = strona(NAZWA, OPIS, "/test-za-0-zl");

const PYTANIA: Pytanie[] = [
  { q: "Ile to naprawdę kosztuje?", a: "0 zł. Test robią nasi konsultanci telefoniczni w ramach pracy, którą i tak wykonują. W zamian prosimy o 15 minut rozmowy o wynikach. Jeśli raport pokaże, że odbieracie wszystko, gratulujemy i kończymy." },
  { q: "Czy klienci lub pracownicy dowiedzą się o teście?", a: "Dzwonimy jak zwykły klient z pytaniem o usługę. Nie zostawiamy fałszywych zleceń i nie umawiamy terminów. Jeśli chcesz, uprzedzamy zespół; wtedy test mierzy, jak wygląda obsługa, gdy wszyscy się starają." },
  { q: "Co jest w raporcie?", a: "Lista prób z datą i godziną, czy ktoś odebrał, po ilu sygnałach, czy oddzwoniono na nieodebrane i w jakim czasie, jak brzmiało powitanie. Do tego trzy rzeczy do poprawy od razu, bez kupowania czegokolwiek." },
  { q: "Dla jakich firm to ma sens?", a: "Dla firm, do których klienci dzwonią: warsztaty, gabinety, firmy remontowe i instalacyjne, serwisy, salony, przychodnie, biura nieruchomości. Jeśli zapytania przychodzą tylko mailem lub formularzem, test też to sprawdzi, ale wtedy mierzymy czas odpowiedzi." },
  { q: "Co po teście?", a: "Dostajesz raport i decydujesz sam. Jeśli połączenia giną po godzinach, proponujemy asystenta AI, który je odbiera. Jeśli giną, bo firmy nie widać w Google, proponujemy prowadzenie wizytówki. Jeśli nic nie ginie, nie proponujemy niczego." },
];

const dane = daneOferty({ sciezka: "/test-za-0-zl", nazwa: NAZWA, opis: OPIS, typ: "Badanie obsługi telefonicznej firmy", pytania: PYTANIA, cena: { od: 0, opis: "Bezpłatny test odbierania telefonów, raport w tydzień" } });

export default function TestPage() {
  return <main className={styles.page}><div className={styles.wrap}>
    <Schemat dane={dane} />
    <Okruszki nazwa="Test za 0 zł" />
    <p className={styles.eyebrow}>Najpierw zmierz, potem wydawaj</p>
    <h1>Ile telefonów od klientów ginie w Twojej firmie? Sprawdzimy to za 0 zł</h1>
    <div className={styles.odpowiedz}><p>Test za 0 zł polega na tym, że przez tydzień dzwonimy do Twojej firmy o różnych porach, także po godzinach, jak zwykły klient. Zapisujemy, czy ktoś odebrał, po ilu sygnałach i czy oddzwonił. Po tygodniu wysyłamy raport z godzinami i trzema poprawkami, które możesz wprowadzić od razu. Nie trzeba niczego kupować.</p></div>
    <p className={styles.lead}>Reklama i strona ściągają klientów do telefonu. Jeśli telefon nie odbiera, pieniądze na reklamę są wydane na próżno. Dlatego zaczynamy od pomiaru, a nie od oferty.</p>

    <section>
      <h2>Jak wygląda test</h2>
      <ol className={styles.kroki}>
        <li><strong>Zgłoszenie.</strong> Podajesz nazwę firmy, numer, godziny pracy i jedną typową sprawę, z jaką dzwonią klienci. Zajmuje to 2 minuty.</li>
        <li><strong>Tydzień połączeń.</strong> Dzwonimy od 3 do 5 razy: w godzinach pracy, w przerwie obiadowej, po 17:00 i w sobotę. Zadajemy pytanie klienta i słuchamy odpowiedzi.</li>
        <li><strong>Raport.</strong> Tabela prób z datą, godziną i wynikiem. Czas oddzwonienia na nieodebrane. Krótka ocena powitania i tego, czy klient dostał odpowiedź na swoje pytanie.</li>
        <li><strong>15 minut rozmowy.</strong> Omawiamy wynik i trzy proste poprawki. Dopiero wtedy, jeśli chcesz, mówimy o tym, jak możemy pomóc dalej.</li>
      </ol>
    </section>

    <section>
      <h2>Dlaczego to robimy</h2>
      <p>W Polsce nie ma świeżych danych o tym, ile połączeń od klientów tracą małe firmy. Ostatnie badanie (Fachowcy.pl, 400 firm w 20 branżach, 2016) pokazało, że 34% firm z pierwszej strony Google nie odebrało telefonu. Zbieramy własne dane z testów i opublikujemy je w <Link href="/poradniki/ile-telefonow-nie-odbiera-twoja-firma">poradniku o nieodebranych telefonach</Link>, bez nazw firm. Każdy test to jedna firma więcej w tym badaniu i jedna firma, która wie, na czym stoi.</p>
    </section>

    <section>
      <h2>Zgłoś firmę do testu</h2>
      <div className={styles.cena}><p><strong>0 zł</strong><br />Raport w ciągu 7 dni roboczych od zgłoszenia. Bez umowy, bez zobowiązań, bez karty.</p>
        <p>Wypełnij krótki formularz: <Link href="/zamow-bezplatne-badanie">zamów bezpłatne badanie</Link> i w polu opisu wpisz „test telefonów”. Możesz też zadzwonić: <a href="tel:+48570964200">570 964 200</a> (pon. do pt., 9:00 do 17:00).</p>
        <Link className={styles.button} href="/zamow-bezplatne-badanie">Zgłoś firmę do testu</Link>
      </div>
    </section>

    <section>
      <h2>Najczęstsze pytania</h2>
      <Faq pytania={PYTANIA} />
    </section>

    <section>
      <h2>Co dalej, gdy połączenia giną</h2>
      <p>Jeśli giną po godzinach lub gdy jesteś zajęty, zobacz <Link href="/asystent-ai-do-odbierania-telefonow">asystenta AI do odbierania telefonów</Link>. Jeśli klienci w ogóle nie trafiają do firmy, zobacz <Link href="/wizytowka-google">prowadzenie wizytówki Google</Link>. Jeśli strona nie prowadzi do kontaktu, przeczytaj <Link href="/poradniki/dlaczego-strona-nie-pozyskuje-klientow">dlaczego strona nie pozyskuje klientów</Link>.</p>
    </section>
  </div></main>;
}
