// Filtr treści z panelu superadmin.marketersi.pl (SEO etap 1, 8.10.2026).
// Usuwa cudze referencje, wyniki i zdjęcia przejęte z szablonu agencji Owocni
// oraz ustawia nowe pozycjonowanie "Google i AI", zanim dane trafią na stronę.
// Gdy te same zmiany zostaną zrobione w panelu, filtr można usunąć:
// skasuj ten plik i blok "interceptors" w httpServices.ts.

export const PUSTY_OBRAZ =
  "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

const OBCE = /owocn/i;
const PLACEHOLDERY = ["VAT ID", "REGON", "ADRES 1", "ADRES 2"];

function czyAdres(tekst: string) {
  return /^https?:\/\//i.test(tekst);
}

// Podmienia cudze zdjęcia na pusty obraz (ukryty w globals.css)
// i wyrzuca je z list zdjęć.
function wyczyscObrazy(wartosc: any): any {
  if (typeof wartosc === "string") {
    return czyAdres(wartosc) && OBCE.test(wartosc) ? PUSTY_OBRAZ : wartosc;
  }
  if (Array.isArray(wartosc)) {
    return wartosc
      .filter((x) => !(typeof x === "string" && czyAdres(x) && OBCE.test(x)))
      .map(wyczyscObrazy);
  }
  if (wartosc && typeof wartosc === "object") {
    const wynik: any = {};
    for (const klucz of Object.keys(wartosc)) {
      wynik[klucz] = wyczyscObrazy(wartosc[klucz]);
    }
    return wynik;
  }
  return wartosc;
}

function ustaw(obiekt: any, sciezka: string[], wartosc: any) {
  let cel = obiekt;
  for (let i = 0; i < sciezka.length - 1; i++) {
    if (!cel || typeof cel !== "object") return;
    cel = cel[sciezka[i]];
  }
  if (cel && typeof cel === "object" && sciezka[sciezka.length - 1] in cel) {
    cel[sciezka[sciezka.length - 1]] = wartosc;
  }
}

export function oczyscOdpowiedz(url: string, body: any): any {
  if (!body || typeof body !== "object") return body;
  const dane = wyczyscObrazy(body);
  const d = dane?.data;
  if (!d || typeof d !== "object") return dane;

  // Strona główna
  if (url.includes("get-home-screen-setting")) {
    ustaw(d, ["heroSection", "title"], "Więcej klientów z Google i AI dla małych firm");
    ustaw(
      d,
      ["heroSection", "subtitle"],
      "Sprawdzamy, gdzie Twoja firma traci klientów: na stronie, w wizytówce Google i w odpowiedziach AI. Potem to naprawiamy."
    );
    ustaw(d, ["heroSection", "description"], "Zacznij od bezpłatnego badania widoczności.");
    // "ZNAKOMITY w rankingach satysfakcji" i ocena 5/5 bez źródła
    ustaw(d, ["ratingSection", "subtitle_2"], "");
    ustaw(d, ["ratingSection", "rating_no"], null);
    // Karuzela opinii klientów z szablonu (bez potwierdzenia, że to klienci Marketersi)
    ustaw(d, ["ClientReviews", "ClientFeedback"], null);
  }

  // Bezpłatne badanie
  if (url.includes("examination")) {
    ustaw(d, ["heroSection", "title"], "Bezpłatne badanie widoczności Twojej firmy w Google i AI");
    // Wyniki 430% i 180% to cudze case study
    ustaw(d, ["ResearchResult", "PercentageCard"], []);
    ustaw(d, ["ratingSection", "CustomerReview"], null);
  }

  // Kontakt
  if (url.includes("contact-setting")) {
    // Wszystkie opinie na mapie to opinie klientów Owocnych
    ustaw(d, ["feedback"], []);
    const kontakt = d.contact_us;
    if (kontakt && typeof kontakt === "object") {
      for (const pole of ["vat_id", "regon", "kawka", "co_work"]) {
        if (PLACEHOLDERY.includes(String(kontakt[pole] ?? "").trim())) kontakt[pole] = "";
      }
    }
  }

  // Opinie i referencje z tekstem o Owocnych na pozostałych podstronach
  const usunOpinieOwocnych = (wartosc: any): any => {
    if (Array.isArray(wartosc)) {
      return wartosc
        .filter(
          (x) =>
            !(
              x &&
              typeof x === "object" &&
              Object.values(x).some((v) => typeof v === "string" && !czyAdres(v) && OBCE.test(v))
            )
        )
        .map(usunOpinieOwocnych);
    }
    if (wartosc && typeof wartosc === "object") {
      for (const klucz of Object.keys(wartosc)) wartosc[klucz] = usunOpinieOwocnych(wartosc[klucz]);
    }
    return wartosc;
  };
  dane.data = usunOpinieOwocnych(d);

  return dane;
}
