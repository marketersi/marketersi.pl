import Link from "next/link";
import type { ReactNode } from "react";

export type Poradnik = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  sections: { id: string; title: string; body: ReactNode }[];
  sources: { title: string; url: string }[];
};

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
];
