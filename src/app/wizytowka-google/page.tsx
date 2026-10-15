import Link from "next/link";
import { strona } from "@/app/meta";
import styles from "@/app/poradniki/poradniki.module.css";
import { Faq, KrokDalej, Okruszki, Schemat, daneOferty, type Pytanie } from "@/components/seo/Oferta";

const NAZWA = "Wizytówka Google dla firmy: prowadzenie w abonamencie";
const OPIS =
  "Prowadzimy Profil Firmy w Google za Ciebie: dane, zdjęcia, opinie, odpowiedzi, wpisy i raport co miesiąc. Żeby klient z okolicy znalazł firmę w Google, Mapach i odpowiedziach AI.";

export const metadata = strona(NAZWA, OPIS, "/wizytowka-google");

const PYTANIA: Pytanie[] = [
  { q: "Czy wizytówka Google jest darmowa?", a: "Tak, Profil Firmy w Google jest bezpłatny. Płacisz nam za pracę: uzupełnienie, zdjęcia, regularne wpisy, zbieranie i obsługę opinii, pilnowanie danych i raport. Samo założenie profilu możesz zrobić samodzielnie; pokazujemy jak w poradniku." },
  { q: "Jak zdobywać opinie w Google zgodnie z zasadami?", a: "Prosisz klienta po wykonanej usłudze, dajesz mu link lub kod QR do wystawienia opinii i odpowiadasz na każdą opinię. Nie wolno kupować opinii, pisać ich samemu ani nagradzać za pozytywne. Przygotowujemy treść prośby, link, kod QR i odpowiadamy na opinie w Twoim imieniu po akceptacji." },
  { q: "Czy wizytówka wystarczy zamiast strony?", a: "Dla wielu firm usługowych wizytówka to pierwsze, co klient widzi, i często wystarcza do telefonu. Strona jest potrzebna, gdy klient chce porównać ofertę, zobaczyć realizacje lub wysłać zapytanie. Zaczynamy od wizytówki, bo działa najszybciej." },
  { q: "Co z odpowiedziami AI, na przykład w Google AI Mode albo ChatGPT?", a: "Odpowiedzi AI o lokalnych firmach czerpią z tych samych danych: profilu w Google, opinii, spójnych informacji na stronie i w katalogach. Pilnujemy, żeby nazwa, adres, telefon i godziny były wszędzie takie same i żeby opis mówił wprost, co robisz i gdzie." },
  { q: "Ile to kosztuje?", a: "Stała miesięczna kwota, bez umowy na rok. Dokładną cenę podajemy po bezpłatnym sprawdzeniu profilu, bo zależy od tego, ile jest do uzupełnienia na starcie i ile lokalizacji ma firma." },
  { q: "Kto jest właścicielem profilu?", a: "Ty. Profil jest na Twoim koncie Google, my dostajemy dostęp jako menedżer. Gdy kończymy współpracę, usuwasz nasz dostęp i wszystko zostaje u Ciebie." },
];

const dane = daneOferty({ sciezka: "/wizytowka-google", nazwa: NAZWA, opis: OPIS, typ: "Prowadzenie Profilu Firmy w Google", pytania: PYTANIA });

export default function WizytowkaPage() {
  return <main className={styles.page}><div className={styles.wrap}>
    <Schemat dane={dane} />
    <Okruszki nazwa="Wizytówka Google" />
    <p className={styles.eyebrow}>Widoczność lokalna</p>
    <h1>Wizytówka Google, która przynosi telefony z okolicy</h1>
    <div className={styles.odpowiedz}><p>Prowadzenie wizytówki Google to miesięczna usługa dla firmy obsługującej klientów z okolicy: uzupełniamy Profil Firmy w Google, dodajemy zdjęcia i wpisy, zbieramy opinie od klientów i odpowiadamy na nie, pilnujemy, żeby dane firmy były takie same w Google, na stronie i w katalogach. Co miesiąc dostajesz raport: ile osób zobaczyło profil, ile zadzwoniło, ile poprosiło o trasę.</p></div>
    <p className={styles.lead}>Dla firmy usługowej wizytówka w Google i Mapach to najczęściej pierwsze miejsce kontaktu z klientem. Zaniedbany profil bez opinii, godzin i zdjęć przegrywa z sąsiadem, który ma 40 opinii i aktualne dane.</p>

    <section>
      <h2>Co robimy co miesiąc</h2>
      <ol className={styles.kroki}>
        <li><strong>Start: porządek w danych.</strong> Kategoria główna i dodatkowe, opis usług, obszar działania, godziny, telefon, link do strony, atrybuty. Weryfikacja profilu, jeśli nie była zrobiona.</li>
        <li><strong>Opinie.</strong> Gotowa prośba o opinię, link i kod QR dla klientów. Odpowiadamy na każdą opinię, także krytyczną, w Twoim imieniu i po Twojej akceptacji.</li>
        <li><strong>Zdjęcia i wpisy.</strong> Co miesiąc nowe zdjęcia z realizacji i krótkie wpisy o usługach lub sezonowych ofertach. Z Twoich materiałów, bez zdjęć z banku.</li>
        <li><strong>Spójne dane poza Google.</strong> Ta sama nazwa, adres i telefon na stronie, w Mapach Apple, Bing, katalogach branżowych. To na tej podstawie Google i odpowiedzi AI oceniają, czy firma jest prawdziwa.</li>
        <li><strong>Raport.</strong> Wyświetlenia, połączenia, trasy, zapytania o opinię. Raz na kwartał proste porównanie z trzema sąsiadami z tej samej branży.</li>
      </ol>
    </section>

    <section>
      <h2>Dla kogo</h2>
      <p>Dla firm, do których klient przychodzi lub które dojeżdżają do klienta w określonym obszarze: warsztaty, serwisy, gabinety, salony, firmy remontowe i instalacyjne, przychodnie, kancelarie, restauracje. Jeśli obsługujesz całą Polskę zdalnie, wizytówka pomoże mniej; wtedy zaczynamy od <Link href="/tworzenie-stron-i-design-ux">strony, która przynosi klientów</Link>.</p>
    </section>

    <section>
      <h2>Czego nie robimy</h2>
      <ul>
        <li>Nie kupujemy opinii i nie piszemy ich sami. Google usuwa takie opinie i może zawiesić profil.</li>
        <li>Nie zakładamy fikcyjnych lokalizacji ani nie dopisujemy miast do nazwy firmy.</li>
        <li>Nie obiecujemy pozycji numer jeden. Pokazujemy w raporcie, co się zmieniło, i mówimy, co dalej.</li>
      </ul>
      <p>Więcej telefonów z wizytówki ma sens tylko wtedy, gdy ktoś je odbiera. Dlatego łączymy tę usługę z <Link href="/asystent-ai-do-odbierania-telefonow">asystentem AI do odbierania telefonów</Link>, a zaczynamy od <Link href="/test-za-0-zl">testu za 0 zł</Link>.</p>
    </section>

    <section>
      <h2>Najczęstsze pytania</h2>
      <Faq pytania={PYTANIA} />
    </section>

    <KrokDalej tytul="Sprawdź swoją wizytówkę bezpłatnie" tekst="W bezpłatnym badaniu sprawdzamy profil w Google, opinie, dane na stronie i to, co o Twojej firmie mówią odpowiedzi AI. Dostajesz listę poprawek, część zrobisz sam." href="/zamow-bezplatne-badanie" przycisk="Zamów bezpłatne badanie" />
  </div></main>;
}
