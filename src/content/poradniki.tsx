import Link from "next/link";
import type { ReactNode } from "react";

export type Poradnik = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  sections: { id: string; title: string; body: ReactNode }[];
  sources: { title: string; url: string }[];
  data?: string; // data publikacji, domyślnie DATA_PUBLIKACJI
};

const MIESIACE = ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"];
export function dataSlownie(iso: string) {
  const [r, m, d] = iso.split("-").map(Number);
  return `${d} ${MIESIACE[m - 1]} ${r}`;
}

export const DATA_PUBLIKACJI = "2026-10-14";
export const poradniki: Poradnik[] = [
  {
    slug: "co-powinna-zawierac-strona-malej-firmy",
    title: "Co powinna zawierać strona internetowa małej firmy?",
    description: "Praktyczna lista dla firmy usługowej: oferta, obszar działania, dowody, kontakt i pomiar zapytań. Sprawdź, co przygotować przed zleceniem strony.",
    intro: "Strona firmy usługowej powinna pomóc klientowi ustalić trzy rzeczy: czy wykonujesz potrzebną usługę, czy obsługujesz jego lokalizację i jak się z Tobą skontaktować. Od tych odpowiedzi zacznij planowanie treści oraz układu strony.",
    sections: [
      { id: "oferta", title: "1. Opisz konkretną usługę i jej odbiorcę", body: <>
        <p>Na pierwszym ekranie nazwij usługę, odbiorcę i rzeczywisty obszar obsługi. Hasło „Kompleksowe rozwiązania dla każdego” nie wyjaśnia, czy klient trafił pod właściwy adres. Przykładowa firma montująca klimatyzację może napisać: „Montaż klimatyzacji w mieszkaniach i małych biurach w Poznaniu”. To przykład konstrukcji komunikatu, nie opis realizacji Marketersi.</p>
        <p>Przy każdej głównej usłudze odpowiedz: co wchodzi w zakres, czego potrzebujesz do wyceny i jak przebiega rozpoczęcie współpracy. Jeśli cena zależy od zakresu, wyjaśnij te zależności. Nie publikuj ceny „od”, gdy nie da się wskazać, co klient rzeczywiście za nią otrzyma.</p>
        <p>Osobne podstrony mają sens, gdy usługi wymagają innych wyjaśnień. Nie mnoż ich tylko po to, żeby powtarzać nazwę miasta. Najpierw przygotuj odpowiedź na rzeczywiste pytanie klienta.</p>
      </> },
      { id: "zaufanie", title: "2. Pokaż dowody, które można sprawdzić", body: <>
        <p>Dodaj własne zdjęcia pracy, opis konkretnego zakresu realizacji i informacje o firmie. Jeżeli publikujesz wyniki, podaj okres, sposób pomiaru i kontekst. Sam procent wzrostu nie wyjaśnia, co zostało zrobione ani dla kogo.</p>
        <ul><li>Opinię opublikuj z właściwym przypisaniem i zgodą, jeżeli jest potrzebna.</li><li>Zdjęcie realizacji podpisz tak, żeby było jasne, za co odpowiadała Twoja firma.</li><li>Uprawnienia i certyfikaty pokaż tylko wtedy, gdy rzeczywiście je posiadasz.</li><li>Gdy dopiero zaczynasz, opisz sposób pracy i zakres odpowiedzialności zamiast wymyślać historię sukcesu.</li></ul>
        <p>Google zaleca tworzenie treści pomocnych i wiarygodnych, ze źródłami oraz informacją o autorze lub witrynie. Taki materiał pomaga również klientowi ocenić, czy chce rozpocząć rozmowę.</p>
      </> },
      { id: "kontakt", title: "3. Ułatw kontakt na telefonie", body: <>
        <p>Wybierz główny krok: telefon, prośbę o wycenę albo rezerwację. Dopasuj go do tego, jak faktycznie obsługujesz klientów. Przycisk „Zadzwoń” powinien otwierać wybieranie poprawnego numeru. Przycisk „Poproś o wycenę” powinien prowadzić do formularza zrozumiałego bez dodatkowych instrukcji.</p>
        <p>Na początek poproś o sposób kontaktu i krótki opis potrzeby. Wymagaj adresu realizacji, pliku czy terminu tylko wtedy, gdy bez tych informacji nie da się sensownie odpowiedzieć. Napisz, co nastąpi po wysłaniu formularza. Czas odpowiedzi podaj tylko taki, którego możesz dotrzymać.</p>
        <p>Wykonaj próbne zgłoszenie na własnym telefonie. Sprawdź nie tylko komunikat „wysłano”, ale także odbiór wiadomości po stronie firmy. Potwierdzenie na ekranie nie daje jeszcze pewności, że zgłoszenie trafiło do właściwej osoby.</p>
      </> },
      { id: "struktura", title: "4. Ułóż stronę wokół decyzji klienta", body: <>
        <p>Dla małej firmy punktem wyjścia może być poniższy układ. Liczbę podstron dobierz do oferty, a nie do z góry ustalonego limitu.</p>
        <div className="table-wrap"><table><thead><tr><th scope="col">Miejsce</th><th scope="col">Pytanie, na które odpowiada</th></tr></thead><tbody>
          <tr><th scope="row">Strona główna</th><td>Co robicie, dla kogo i gdzie?</td></tr>
          <tr><th scope="row">Podstrona usługi</th><td>Co obejmuje usługa i jak otrzymać wycenę?</td></tr>
          <tr><th scope="row">O firmie i realizacje</th><td>Kto wykona pracę i jakie są dowody kompetencji?</td></tr>
          <tr><th scope="row">Kontakt</th><td>Jak rozpocząć rozmowę i jakie dane przygotować?</td></tr>
        </tbody></table></div>
        <p>Poradniki dodawaj wtedy, gdy pomagają rozwiązać częste wątpliwości. Z poradnika prowadź do usługi, która odpowiada opisanemu problemowi. Z oferty kieruj do wyjaśnienia, które ułatwi podjęcie decyzji.</p>
      </> },
      { id: "odbior", title: "5. Odbierz stronę według krótkiej listy", body: <>
        <p>Przed publikacją otwórz każdą ważną podstronę na telefonie i komputerze. Zapisz wynik poniższych kontroli, osobę odpowiedzialną i datę poprawki. Dzięki temu lista staje się planem odbioru, a nie ogólnym życzeniem.</p>
        <ol><li>Czy od razu rozumiem ofertę i obszar działania?</li><li>Czy tekst jest czytelny, a menu, telefon i formularz działają?</li><li>Czy zdjęcia, opinie, ceny i dane kontaktowe są aktualne?</li><li>Czy ważne adresy działają, mają własne tytuły i nie są przypadkowo wyłączone z indeksowania?</li><li>Czy firma potrafi odróżnić wizytę, kliknięcie telefonu i rzeczywiste zapytanie?</li><li>Czy mam dostęp do domeny, treści i narzędzi pomiarowych oraz wiem, kto utrzymuje stronę?</li></ol>
        <p>Gdy strona już działa, a nie przynosi rozmów, przejdź do poradnika: <Link href="/poradniki/dlaczego-strona-nie-pozyskuje-klientow">dlaczego strona nie pozyskuje klientów</Link>. Jeśli planujesz nową witrynę lub przebudowę, zobacz <Link href="/tworzenie-stron-i-design-ux">tworzenie stron internetowych i design UX</Link>.</p>
      </> },
    ],
    sources: [{ title: "Google: tworzenie przydatnych i rzetelnych treści", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=pl" }],
  },
  {
    slug: "dlaczego-strona-nie-pozyskuje-klientow",
    title: "Dlaczego strona internetowa nie pozyskuje klientów?",
    description: "Ustal, czy problemem jest brak widoczności, nietrafny ruch, oferta czy kontakt. Plan diagnozy strony usługowej z prostą kartą pomiaru.",
    intro: "Brak zapytań nie oznacza automatycznie, że potrzebujesz nowej strony albo większego budżetu reklamowego. Najpierw ustal, na którym etapie urywa się droga klienta: wyszukanie usługi, wejście na stronę, kontakt czy rozmowa o ofercie.",
    sections: [
      { id: "pomiar", title: "1. Oddziel brak klientów od błędu pomiaru", body: <>
        <p>Wyślij zgłoszenie testowe i sprawdź, czy firma je otrzymała. Kliknij numer na telefonie, zweryfikuj jego poprawność i sprawdź działanie skrzynki kontaktowej. Jeśli coś nie działa, napraw to przed zwiększaniem ruchu.</p>
        <p>Kliknięcie numeru nie jest jeszcze odbytą rozmową, a wysłanie formularza nie zawsze oznacza wartościowe zapytanie. Prowadź prosty rejestr: data, źródło podane przez klienta, usługa, kwalifikacja zapytania i dalszy wynik rozmowy. Nie wpisuj danych osobowych klientów do narzędzi analitycznych.</p>
        <p>Porównuj dane z tego samego okresu. Przy kilku wejściach lub pojedynczym zapytaniu procentowa zmiana może wyglądać imponująco i niewiele wyjaśniać. Zapisuj również liczby bezwzględne oraz zmiany oferty, sezonowości i kampanii.</p>
      </> },
      { id: "widocznosc", title: "2. Sprawdź, czy klienci mogą znaleźć ofertę", body: <>
        <p>W Google Search Console otwórz raport skuteczności, wybierz wyszukiwanie w sieci i filtr konkretnej strony usługi. Sprawdź zapytania, wyświetlenia oraz kliknięcia. Oddziel zapytania z nazwą Twojej firmy od pytań osób, które jeszcze jej nie znają.</p>
        <p>Jeśli adres nie ma wyświetleń, sprawdź go także w narzędziu do sprawdzania adresów URL oraz w raporcie indeksowania. Brak danych może wynikać między innymi z braku indeksacji, krótkiego okresu obserwacji albo niewielkiej widoczności. Sam poprawny wpis w mapie witryny nie gwarantuje indeksacji.</p>
        <p>Gdy strona pojawia się na niepasujące zapytania, porównaj jej tytuł i treść z realną usługą. Nie poszerzaj tematu o przypadkowe popularne frazy. Artykuł informacyjny i oferta usługi odpowiadają na inne potrzeby.</p>
      </> },
      { id: "ruch", title: "3. Oceń, kto trafia na stronę i czego szuka", body: <>
        <p>Wejście z poradnika nie musi od razu zakończyć się telefonem. Czytelnik może dopiero ustalać, jakie ma możliwości. Z kolei osoba szukająca konkretnej usługi powinna szybko znaleźć jej zakres, obszar obsługi i sposób wyceny.</p>
        <p>Sprawdź osobno ruch organiczny i płatny oraz wejścia na główne usługi. Nie przypisuj wyników wszystkich kampanii jednej stronie. Zmiany liczby wizyt oceniaj razem z jakością zapytań: większy ruch spoza obsługiwanego obszaru może nie przynieść firmie żadnej korzyści.</p>
        <p>Przykład diagnostyczny: firma obsługuje jeden region, a reklama prowadzi osoby z całej Polski na ogólną stronę główną. W takim przypadku najpierw sprawdź kierowanie kampanii i stronę docelową. To hipoteza do weryfikacji, nie automatyczne zalecenie przebudowy całego serwisu.</p>
      </> },
      { id: "oferta", title: "4. Sprawdź ofertę i drogę do kontaktu", body: <>
        <p>Poproś osobę, która nie zna firmy, żeby na telefonie znalazła odpowiedź na trzy pytania: co może zamówić, dlaczego ma Ci zaufać i jak poprosić o wycenę. Nie podpowiadaj jej podczas próby. Zapisz miejsca, w których się zatrzymała.</p>
        <p>Przyjrzyj się niejasnym nazwom usług, brakującym informacjom o zakresie, niepotwierdzonym obietnicom i formularzom wymagającym zbyt wielu danych. Jeśli masz ruch na ofercie, lecz brak kontaktów, te elementy są rozsądnym punktem kontroli. Zobacz też listę: <Link href="/poradniki/co-powinna-zawierac-strona-malej-firmy">co powinna zawierać strona małej firmy</Link>.</p>
        <p>Jeżeli zapytania docierają, a nie przechodzą w rozmowy, sprawdź również obsługę poza witryną: dostępność telefonu, dostarczenie wiadomości, czas odpowiedzi i dopasowanie usługi. Sama zmiana nagłówka strony nie naprawi każdego z tych problemów.</p>
      </> },
      { id: "plan", title: "5. Wybierz jedną zmianę i zapisz sposób oceny", body: <>
        <div className="table-wrap"><table><thead><tr><th scope="col">Obserwacja</th><th scope="col">Co sprawdzić najpierw</th><th scope="col">Co zapisać</th></tr></thead><tbody>
          <tr><th scope="row">Brak wyświetleń usługi</th><td>Indeksacja i dopasowanie treści do usługi</td><td>Status adresu i wyświetlenia strony</td></tr>
          <tr><th scope="row">Wyświetlenia, mało wejść</th><td>Zapytania, pozycje, tytuł i wygląd wyniku</td><td>Kliknięcia i wyświetlenia dla tych samych fraz</td></tr>
          <tr><th scope="row">Wejścia bez kontaktów</th><td>Oferta, zaufanie i formularz na telefonie</td><td>Wizyty, działające zgłoszenia, prawdziwe rozmowy</td></tr>
          <tr><th scope="row">Kontakty bez sprzedaży</th><td>Dopasowanie zapytań i dalsza obsługa</td><td>Powody utraty lub odrzucenia zapytania</td></tr>
        </tbody></table></div>
        <p>Utwórz kartę zmiany: adres strony, obserwacja, hipoteza, poprawka, data publikacji i miara wyniku. Przykład: „Użytkownicy nie widzą, jaki region obsługujemy; dodajemy obszar pracy do opisu usługi; sprawdzamy udział zapytań z właściwej lokalizacji”. Nie traktuj samej korelacji po wdrożeniu jako dowodu przyczyny.</p>
        <p>Nie ma jednego terminu ani liczby wizyt, po których każda firma może wiarygodnie ocenić wynik. Przy małym ruchu zacznij od testów działania i rozmów z odbiorcami. Jeśli potrzebujesz pomocy w ustaleniu kolejności, <Link href="/zamow-bezplatne-badanie">zamów bezpłatne badanie</Link> albo sprawdź zakres <Link href="/konsultacja-marketingu">konsultacji marketingowej</Link>.</p>
      </> },
    ],
    sources: [
      { title: "Google Search Console: raport skuteczności", url: "https://support.google.com/webmasters/answer/7576553?hl=pl" },
      { title: "Google Search Console: raport indeksowania stron", url: "https://support.google.com/webmasters/answer/7440203?hl=pl" },
    ],
  },
  {
    slug: "ile-kosztuje-strona-internetowa",
    data: "2026-10-15",
    title: "Ile kosztuje strona internetowa dla firmy w 2026 roku?",
    description: "Widełki cen stron internetowych w Polsce: kreator, freelancer, agencja, sklep. Co wchodzi w cenę, co płacisz co roku i kiedy strona nie pomoże, bo ginie telefon.",
    intro: "Strona internetowa dla małej firmy kosztuje od kilkudziesięciu złotych miesięcznie w kreatorze do kilku tysięcy złotych za projekt u wykonawcy. Prosta strona firmowa do 5 lub 7 podstron u polskich wykonawców kosztuje najczęściej od 3 000 do 7 000 zł netto, sklep internetowy od około 4 500 zł, a do tego dochodzą stałe koszty domeny, hostingu i utrzymania. Poniżej liczby ze źródłami, z datą, i lista pytań, które warto zadać przed zapłaceniem.",
    sections: [
      { id: "widelki", title: "1. Widełki cen w Polsce (ze źródłami)", body: <>
        <p>Ceny poniżej pochodzą z publicznych zestawień i są orientacyjne. Zawsze sprawdź datę: cennik z 2023 roku i z 2026 roku to inne realia, bo w międzyczasie weszły kreatory z AI.</p>
        <div className="table-wrap"><table><thead><tr><th scope="col">Rodzaj strony</th><th scope="col">Cena</th><th scope="col">Źródło i data</th></tr></thead><tbody>
          <tr><th scope="row">Kreator stron (Wix, Hostinger, WordPress.com, Squarespace)</th><td>około 10 do 100 zł miesięcznie, robisz sam</td><td>Hostinger, aktualizacja styczeń 2026 (ceny przeliczone z USD)</td></tr>
          <tr><th scope="row">Landing page lub strona one page</th><td>1 500 do 2 500 zł netto</td><td>KB.pl, cennik 2023</td></tr>
          <tr><th scope="row">Strona firmowa do 5 lub 7 podstron</th><td>5 000 do 7 000 zł, średnio 6 000 zł</td><td>CenaUslug.pl, 8 ofert, czerwiec 2026</td></tr>
          <tr><th scope="row">Strona firmowa (szerszy przegląd)</th><td>od około 3 000 zł do około 7 000 zł netto, złożone projekty więcej</td><td>KB.pl, cennik 2023</td></tr>
          <tr><th scope="row">Sklep internetowy</th><td>od około 4 500 zł; większe sklepy 9 000 do 15 000 zł i więcej</td><td>KB.pl, cennik 2023</td></tr>
          <tr><th scope="row">Dodatki: formularz, galeria, czat, baner cookie</th><td>od 350 do 700 zł za element</td><td>CenaUslug.pl, czerwiec 2026</td></tr>
        </tbody></table></div>
        <p>Wniosek: różnica między kreatorem za 50 zł miesięcznie a wykonawcą za 6 000 zł to nie jest różnica w „ładności”. To różnica w tym, kto odpowiada za treść, układ, szybkość na telefonie i to, czy strona prowadzi klienta do kontaktu.</p>
      </> },
      { id: "co-w-cenie", title: "2. Co wchodzi w cenę, a co jest osobno", body: <>
        <p>W ofertach wykonawców zwykle jest projekt graficzny, wdrożenie, podstawowa optymalizacja i krótkie szkolenie. Osobno płacisz za:</p>
        <ul>
          <li><strong>Domenę:</strong> adres .pl to zwykle kilkadziesiąt złotych rocznie po pierwszym roku promocyjnym.</li>
          <li><strong>Hosting:</strong> współdzielony od około 10 do 60 zł miesięcznie; serwer VPS drożej (Hostinger, 2026).</li>
          <li><strong>Teksty i zdjęcia:</strong> wielu wykonawców zakłada, że dostarczysz je sam. To najczęstszy powód, dla którego strona „za 6 000 zł” stoi pół roku niedokończona.</li>
          <li><strong>Utrzymanie:</strong> aktualizacje, kopie zapasowe, drobne poprawki. Samodzielnie prawie zero, u zewnętrznej firmy od około 200 do ponad 1 000 zł miesięcznie (Hostinger, 2026).</li>
          <li><strong>Regulamin i polityka prywatności, baner cookie:</strong> od 350 do 600 zł jako osobna pozycja (CenaUslug.pl, 2026).</li>
        </ul>
        <p>Przed podpisaniem poproś o jedną listę: co jest w cenie, co jest co roku, kto ma dostęp do domeny i hostingu po zakończeniu współpracy. Jeśli wykonawca rejestruje domenę na siebie, odmów.</p>
      </> },
      { id: "kreator-czy-wykonawca", title: "3. Kreator, freelancer czy agencja", body: <>
        <div className="table-wrap"><table><thead><tr><th scope="col">Opcja</th><th scope="col">Kiedy ma sens</th><th scope="col">Ryzyko</th></tr></thead><tbody>
          <tr><th scope="row">Kreator z AI, sam</th><td>Firma jednoosobowa, prosta oferta, brak budżetu, potrzebujesz strony w weekend</td><td>Szablonowe teksty, brak pomiaru zapytań, strona, której nikt nie poprawia</td></tr>
          <tr><th scope="row">Freelancer</th><td>Prosta strona firmowa, jasny zakres, masz własne teksty i zdjęcia</td><td>Zależność od jednej osoby; sprawdź, kto obsłuży stronę za rok</td></tr>
          <tr><th scope="row">Agencja</th><td>Potrzebujesz treści, zdjęć, widoczności w Google i pomiaru w jednym</td><td>Wyższa cena; wymagaj listy, co dokładnie dostajesz, nie „kompleksowej obsługi”</td></tr>
        </tbody></table></div>
        <p>Nie ma złej opcji. Zła jest tylko strona, która nie ma jednego zadania: doprowadzić klienta do telefonu lub formularza. Listę elementów, które powinna mieć strona firmy usługowej, znajdziesz w poradniku <Link href="/poradniki/co-powinna-zawierac-strona-malej-firmy">co powinna zawierać strona małej firmy</Link>.</p>
      </> },
      { id: "pytania", title: "4. Pięć pytań do wykonawcy przed zapłatą", body: <>
        <ol>
          <li>Kto pisze teksty i skąd będą zdjęcia? Jeśli ja, to ile czasu to zajmie i co się stanie, gdy ich nie dostarczę na czas?</li>
          <li>Jak sprawdzę, że strona działa dobrze na telefonie? Poproś o wynik testu szybkości dla wersji mobilnej.</li>
          <li>Jak policzę zapytania ze strony: kliknięcia w telefon, wysłane formularze? Kto to ustawi?</li>
          <li>Co jest co roku i ile to kosztuje: domena, hosting, utrzymanie, licencje wtyczek?</li>
          <li>Co dostanę, gdy zakończymy współpracę: dostęp do domeny, hostingu, plików i treści?</li>
        </ol>
      </> },
      { id: "telefon", title: "5. Strona nie pomoże, jeśli nikt nie odbiera telefonu", body: <>
        <p>Strona za 6 000 zł ma jedno zadanie: sprawić, że klient zadzwoni. W jedynym polskim badaniu tego zjawiska 34% firm z pierwszej strony Google nie odebrało telefonu od potencjalnego klienta, a 60% zapytań przychodziło z telefonów komórkowych (Fachowcy.pl, 400 firm, 2016). Zanim zapłacisz za stronę, sprawdź, ile połączeń ginie dziś. Robimy to bezpłatnie: <Link href="/test-za-0-zl">test za 0 zł</Link>. Jeśli giną po godzinach, tańszy od nowej strony jest <Link href="/asystent-ai-do-odbierania-telefonow">asystent AI, który odbiera telefony</Link>.</p>
        <p>Jeśli po teście okaże się, że strona jest potrzebna, zobacz, jak podchodzimy do <Link href="/tworzenie-stron-i-design-ux">tworzenia stron, które przynoszą klientów</Link>.</p>
      </> },
    ],
    sources: [
      { title: "CenaUslug.pl: cennik tworzenia firmowych stron internetowych 2026 (8 ofert, aktualizacja 4.06.2026)", url: "https://cenauslug.pl/firma-i-biuro/stworzenie-firmowej-strony-internetowej-do-5-podstron" },
      { title: "KB.pl: cennik stron internetowych (tabele 2023)", url: "https://kb.pl/ceny/uslugi-biznesowe/cennik-stron-internetowych-sprawdzamy-ile-kosztuje-zrobienie-strony/" },
      { title: "Hostinger: ile kosztuje stworzenie strony internetowej w 2026 roku (aktualizacja 16.01.2026)", url: "https://www.hostinger.com/pl/tutoriale/?p=487" },
      { title: "BiznesRadar za Fachowcy.pl Ventures: ponad 30% firm nie odbiera połączeń od klientów (30.11.2016)", url: "https://www.biznesradar.pl/a/12517,fachowcy-pl-ponad-30-firm-nie-odbiera-polaczen-telefonicznych-od-klientow" },
    ],
  },
  {
    slug: "ile-telefonow-nie-odbiera-twoja-firma",
    data: "2026-10-15",
    title: "Ile telefonów od klientów nie odbiera Twoja firma? Jak to zmierzyć",
    description: "Nieodebrane połączenia to najdroższa dziura w małej firmie. Co mówią dane, jak samemu zmierzyć straty w tydzień i co zrobić, gdy telefon dzwoni po godzinach.",
    intro: "Nieodebrany telefon od klienta to zwykle utracone zlecenie: klient dzwoni do następnej firmy z listy w Google. Jedyne polskie badanie tego zjawiska pokazało, że 34% firm z pierwszej strony Google nie odebrało połączenia od potencjalnego klienta. Ten poradnik pokazuje, jak w tydzień sprawdzić, jak jest u Ciebie, i co z tym zrobić bez zatrudniania dodatkowej osoby.",
    sections: [
      { id: "dane", title: "1. Co wiadomo o nieodebranych telefonach w małych firmach", body: <>
        <p>W listopadzie 2016 roku Fachowcy.pl Ventures sprawdziło 400 firm z 20 branż w 5 miastach, wybranych z pierwszej dziesiątki wyników Google. Wyniki:</p>
        <ul>
          <li>34% firm nie odebrało telefonu od potencjalnego klienta,</li>
          <li>55% wizytówek w Google nie miało numeru telefonu,</li>
          <li>60% zapytań pochodziło z telefonów komórkowych, a 45% stron z pierwszej dziesiątki nie działało poprawnie na telefonie.</li>
        </ul>
        <p>To dane sprzed dekady i nikt ich w Polsce nie powtórzył w podobnej skali. Nowsze liczby krążące w internecie pochodzą zwykle z materiałów dostawców voicebotów i nie mają podanej metody. Dlatego zbieramy własne dane: w <Link href="/test-za-0-zl">teście za 0 zł</Link> dzwonimy do firm, które się zgłoszą, i zapisujemy wynik. Zbiorcze wyniki, bez nazw firm, będziemy dopisywać w tym poradniku.</p>
      </> },
      { id: "ile-kosztuje", title: "2. Ile kosztuje jedno nieodebrane połączenie", body: <>
        <p>Policz na własnych liczbach, nie na cudzych. Potrzebujesz trzech wartości: ile połączeń od nowych klientów przychodzi tygodniowo, jaka część rozmów kończy się zleceniem, ile średnio zarabiasz na zleceniu.</p>
        <div className="table-wrap"><table><thead><tr><th scope="col">Przykład (firma remontowa)</th><th scope="col">Wartość</th></tr></thead><tbody>
          <tr><th scope="row">Połączenia od nowych klientów tygodniowo</th><td>15</td></tr>
          <tr><th scope="row">Nieodebrane i bez oddzwonienia tego dnia</th><td>5 (jedna trzecia, jak w badaniu)</td></tr>
          <tr><th scope="row">Rozmowy kończące się zleceniem</th><td>1 na 4</td></tr>
          <tr><th scope="row">Średni zysk ze zlecenia</th><td>1 500 zł</td></tr>
          <tr><th scope="row">Strata tygodniowo</th><td>5 × 1/4 × 1 500 zł = około 1 900 zł</td></tr>
        </tbody></table></div>
        <p>To przykład rachunku, nie wynik badania. Wstaw swoje liczby. Jeśli nie znasz liczby nieodebranych, to jest pierwsza rzecz do zmierzenia; większość telefonów pokazuje ją w historii połączeń.</p>
      </> },
      { id: "pomiar", title: "3. Jak zmierzyć to samemu w tydzień", body: <>
        <ol>
          <li><strong>Historia połączeń.</strong> Przez 7 dni codziennie wieczorem zapisz: ile połączeń przyszło, ile nieodebranych, do ilu oddzwoniłeś i po jakim czasie.</li>
          <li><strong>Pory.</strong> Zaznacz, o której przychodzą nieodebrane. U większości firm usługowych skupiają się w trzech porach: rano przed 9:00, w porze obiadu i po 17:00.</li>
          <li><strong>Próba z zewnątrz.</strong> Poproś znajomego, żeby zadzwonił trzy razy jak klient, w tym raz po godzinach. Niech zapisze, po ilu sygnałach ktoś odebrał i czy dostał odpowiedź na pytanie.</li>
          <li><strong>Wizytówka i strona.</strong> Sprawdź, czy numer w Google jest poprawny i czy na stronie na telefonie da się kliknąć „Zadzwoń”. Jeśli nie, część klientów ginie, zanim telefon zadzwoni.</li>
        </ol>
        <p>Jeśli wolisz, żebyśmy zrobili to za Ciebie, zgłoś firmę do <Link href="/test-za-0-zl">testu za 0 zł</Link>. Dostaniesz tabelę z datami i godzinami.</p>
      </> },
      { id: "co-zrobic", title: "4. Co zrobić z nieodebranymi połączeniami", body: <>
        <p>Rozwiązanie zależy od tego, kiedy połączenia giną.</p>
        <div className="table-wrap"><table><thead><tr><th scope="col">Kiedy giną</th><th scope="col">Co działa</th><th scope="col">Koszt</th></tr></thead><tbody>
          <tr><th scope="row">W godzinach pracy, bo masz zajęte ręce</th><td>Automatyczny SMS po nieodebranym („Oddzwonię do 16:00”) i stała pora oddzwaniania</td><td>Zwykle w cenie operatora lub kilka złotych miesięcznie</td></tr>
          <tr><th scope="row">Po godzinach i w weekendy</th><td>Asystent AI, który odbiera, spisuje sprawę i wysyła SMS; klient wie, kiedy oddzwonisz</td><td>Stała opłata miesięczna, mniejsza niż etat</td></tr>
          <tr><th scope="row">Cały czas, bo nie ma kto odbierać</th><td>Osoba do obsługi telefonu lub zewnętrzna recepcja; AI jako pierwsza linia</td><td>Od kilkuset złotych miesięcznie w górę</td></tr>
          <tr><th scope="row">Klienci nie dzwonią w ogóle</th><td>Problem leży wcześniej: wizytówka Google, strona, opinie</td><td>Zacznij od bezpłatnego badania widoczności</td></tr>
        </tbody></table></div>
        <p>Najtańsza poprawka od razu: oddzwaniaj na każde nieodebrane tego samego dnia i napisz na stronie oraz w wizytówce, w jakich godzinach odbierasz. Klient, który wie, czego się spodziewać, częściej poczeka.</p>
      </> },
      { id: "dalej", title: "5. Co dalej", body: <>
        <p>Jeśli połączenia giną po godzinach, zobacz, jak działa <Link href="/asystent-ai-do-odbierania-telefonow">asystent AI do odbierania telefonów</Link>. Jeśli klienci nie znajdują firmy w Google, zobacz <Link href="/wizytowka-google">prowadzenie wizytówki Google</Link>. Jeśli strona ma ruch, ale nikt nie dzwoni, przeczytaj <Link href="/poradniki/dlaczego-strona-nie-pozyskuje-klientow">dlaczego strona nie pozyskuje klientów</Link>.</p>
      </> },
    ],
    sources: [
      { title: "BiznesRadar za Fachowcy.pl Ventures: ponad 30% firm nie odbiera połączeń od klientów (30.11.2016)", url: "https://www.biznesradar.pl/a/12517,fachowcy-pl-ponad-30-firm-nie-odbiera-polaczen-telefonicznych-od-klientow" },
      { title: "Google: jak dodać numer telefonu i godziny w Profilu Firmy", url: "https://support.google.com/business/answer/3038177?hl=pl" },
    ],
  },
];
