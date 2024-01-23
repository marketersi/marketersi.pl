import Image from "next/image";
import { useState } from "react";

export default function Analysis() {
  const [Analysis1_Dropdown_Show, setAnalysis1_Dropdown_Show] = useState(false);
  const [Analysis2_Dropdown_Show, setAnalysis2_Dropdown_Show] = useState(false);
  const [Analysis3_Dropdown_Show, setAnalysis3_Dropdown_Show] = useState(false);
  const [Analysis4_Dropdown_Show, setAnalysis4_Dropdown_Show] = useState(false);

  return (
    <div className="Analysis content">
      {/* Card 1 */}
      <div className="Analysis_Card full">
        <div className="Analysis_Card_Content">
          <div className="Analysis_Card_Content_Title">
            Analiza sytuacji biznesowej
          </div>
          <div className="Analysis_Card_Content_Text">
            Twoje cele biznesowe tłumaczymy na cele marketingowe tak aby znaleźć
            najmniej wymagające drogi ich osiągnięcia.
          </div>
          <div className="Analysis_Card_Content_Table">
            <div className="Analysis_Card_Content_Table_Column">
              <div>Klucz - personalizacja:</div>
              <div>Misja wizja i wartości</div>
              <div>Wyznaczone cele biznesowe</div>
            </div>
            <div className="Analysis_Card_Content_Table_Column">
              <div>KPI - Kluczowe wskaźniki efektywności</div>
              <div>Unikalna propozycja sprzedaży</div>
              <div>Analiza sytuacji rynkowej</div>
            </div>
          </div>

          <div className="ImageAdvantage_Button_Container">
            <button
              className={`${
                Analysis1_Dropdown_Show
                  ? "ImageAdvantage_Button"
                  : "ImageAdvantage_Button_Clicked"
              }`}
              onClick={() => {
                setAnalysis1_Dropdown_Show(!Analysis1_Dropdown_Show);
              }}
            >
              ▼ Jak to wygląda w praktyce?
            </button>
          </div>
        </div>

        <div>
          <Image
            src={"/assets/images/strategiamarketingowa/AnalysisImage1.avif"}
            alt="AnalysisImage1"
            height={401}
            width={652}
          />
        </div>
      </div>
      {/* Dropdown 1 */}
      <div className="full" hidden={Analysis1_Dropdown_Show}>
        <div className="Analysis1_Dropdown_Container">
          <div className="Analysis1_Dropdown_Text1">
            Przeprowadzamy z Tobą serię wywiadów, aby dowiedzieć się jak
            najwięcej o Tobie i Twojej firmie: Nasz proces rozpoczyna się od
            zadania sporej ilości pytań. Choć te rozmowy zawsze są inne,
            ponieważ musimy je dopasować do każdego klienta, to istnieją 3 ważne
            filary, które pomagamy ustalić w każdym przypadku:
          </div>
          <div className="Analysis1_Dropdown_Text2">
            1. Jakie cele chcesz osiągnąć w ciągu 3, 6 i 12 miesięcy? Jakie są
            <br />
            2. największe wyzwania, przed którymi stoisz na chwilę obecną? Jak
            <br />
            3. wygląda Twój budżet na potrzeby wprowadzenia strategii w życie?
          </div>
          <div className="Analysis1_Dropdown_Text3">
            Aby mieć pewność, że uda nam się otrzymać możliwie szczegółowe
            odpowiedzi, stosujemy kombinację wywiadów telefonicznych oraz
            tekstowych kwestionariuszy. Podczas tworzenia strategii
            marketingowej cały czas pozostajemy w kontakcie, aby zadawać
            dodatkowe pytania oraz omawiać proponowane podejścia.
          </div>
          <div className="Analysis1_Dropdown_Image">
            <Image
              src={
                "/assets/images/strategiamarketingowa/AnalysisDropdownOne_1.avif"
              }
              alt="AnalysisDropdownOne_1"
              height={778 * 0.9}
              width={1438 * 0.9}
            />
          </div>
          <div className="Analysis1_Grid">
            <div className="Analysis1_GridItem1">
              <div>
                Analizujemy Twoją obecną lub potencjalną grupę odbiorców przez
                pryzmat Twojej oferty w celu ustalenia, gdzie leżą Twoje mocne
                strony – rzeczywiste oraz postrzegane.
              </div>
              <div>
                Określamy, w jaki sposób wykorzystać te mocne strony, aby
                zbudować strategię marketingową, która pomoże osiągnąć Twoje
                cele.
              </div>
            </div>
            <div className="Analysis1_GridItem2">
              <div>
                Oceniamy również Twoje rzeczywiste i postrzegane słabości.
              </div>
              <div>
                Oceniamy również Twoje rzeczywiste i postrzegane słabości.
                Identyfikujemy sposoby poprawy Twojego produktu, jak i jego
                postrzegania, lub określamy drogi minimalizacji negatywnego
                wpływu słabości na sprzedaż.
              </div>
            </div>
            <div className="Analysis1_GridItem3">
              <div>
                Oceniamy jakie możliwości posiadasz na dzień dzisiejszy.
              </div>
              <div>
                Proponujemy strategie ich wykorzystania w możliwie najkrótszym
                czasie.
              </div>
            </div>
            <div className="Analysis1_GridItem4">
              <div>
                Wskazujemy krytyczne zagrożenia, które mogą zagrozić rozwojowi
                Twojej firmy.
              </div>
              <div>
                Opracowujemy strategię minimalizującą ryzyko w jak największym
                stopniu
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="Analysis_Card full">
        <div>
          <Image
            src={"/assets/images/strategiamarketingowa/AnalysisImage2.avif"}
            alt="AnalysisImage2"
            height={401}
            width={652}
          />
        </div>
        <div className="Analysis_Card_Content_Odd">
          <div className="Analysis_Card_Content_Title">
            Analiza grupy docelowej
          </div>
          <div className="Analysis_Card_Content_Text">
            Tworzymy profile konsumenckie. Szukamy efektywnych dróg komunikacji
            i ustalamy, która grupa docelowa ma najwyższy priorytet dla zysku.
          </div>
          <div className="Analysis_Card_Content_Table_Odd">
            <div className="Analysis_Card_Content_Table_Column">
              <div>Demografia</div>
              <div>Cechy psychograficzne</div>
              <div>Źródła zdobywania informacji</div>
            </div>
            <div className="Analysis_Card_Content_Table_Column">
              <div>Wyzwania (Problemy i potrzeby)</div>
              <div>Motywatory pozytywne i negatywne</div>
              <div>Awatary - Kompletne profile klientów</div>
            </div>
          </div>

          <div className="ImageAdvantage_Button_Container">
            <button
              className={`${
                Analysis2_Dropdown_Show
                  ? "ImageAdvantage_Button"
                  : "ImageAdvantage_Button_Clicked"
              }`}
              onClick={() => {
                setAnalysis2_Dropdown_Show(!Analysis2_Dropdown_Show);
              }}
            >
              ▼ Jak to wygląda w praktyce?
            </button>
          </div>
        </div>
      </div>
      {/* Dropdown 2 */}
      <div className="full" hidden={Analysis2_Dropdown_Show}>
        <div className="Analysis2_Dropdown_Container">
          <div className="Analysis2_Dropdown_Text1">
            Zanim będziemy w stanie zaprojektować Twoją strategię marketingową,
            musimy stworzyć jasny obraz Twojego docelowego klienta. Potrzebujemy
            odnaleźć najbardziej opłacalne segmenty rynku, do których skierujemy
            nasze działania marketingowe. Ustalamy segmenty docelowe - grupujemy
            Twoich potencjalnych klientów i nadajemy im priorytety w oparciu o
            wiele czynników.
          </div>
          <div className="Analysis2_Dropdown_Text2">
            Zdefiniowanie grupy docelowej pozwala zwiększyć sprzedaż - ponieważ
            sprawia, że dotrzemy do osób, które są skłonne nie tylko kupić Twój
            produkt lub usługę, ale również będą z niego najbardziej zadowolone,
            generując tym samym powtórne zamówienia oraz polecenia.
          </div>
          <div className="Analysis2_Dropdown_Image1">
            <Image
              src={
                "/assets/images/strategiamarketingowa/AnalysisDropdownTwo_1.avif"
              }
              alt="AnalysisDropdownTwo_1"
              height={433 * 0.9}
              width={835 * 0.9}
            />
          </div>
          <div className="Analysis2_Dropdown_Text3">
            Zdefiniowanie grupy docelowej pozwala zwiększyć sprzedaż - ponieważ
            sprawia, że dotrzemy do osób, które są skłonne nie tylko kupić Twój
            produkt lub usługę, ale również będą z niego najbardziej zadowolone,
            generując tym samym powtórne zamówienia oraz polecenia.
          </div>
          <div className="Analysis2_Dropdown_Image2">
            <Image
              src={
                "/assets/images/strategiamarketingowa/AnalysisDropdownTwo_2.avif"
              }
              alt="AnalysisDropdownTwo_2.avif"
              height={433 * 0.9}
              width={835 * 0.9}
            />
          </div>
          <div className="Analysis2_Dropdown_Text4">
            Zazwyczaj w Owocnych identyfikujemy 2-4 segmenty rynku, do których
            można dotrzeć przy wysokim zwrocie z inwestycji. Początkowo
            koncentrujemy nasze działania na tym, który jest najłatwiejszy do
            zdobycia i przynosi największe zyski. Do drugiego segmentu
            przechodzimy w momencie wysycenia pierwszego.
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="Analysis_Card full">
        <div className="Analysis_Card_Content">
          <div className="Analysis_Card_Content_Title">Analiza konkurencji</div>
          <div className="Analysis_Card_Content_Text">
            Analizujemy najlepszą konkurencję, by zrozumieć, w jaki sposób
            stworzymy ogromną konkurencyjną przewagę.
          </div>
          <div className="Analysis_Card_Content_Table">
            <div className="Analysis_Card_Content_Table_Column">
              <div>Rynek: Wielkość, udział, trendy, liderzy.</div>
              <div>Analiza środowiska konkurencyjnego</div>
              <div>Zasady konkurowania</div>
            </div>
            <div className="Analysis_Card_Content_Table_Column">
              <div>Analiza SWOT</div>
              <div>kluczowe wnioski</div>
              <div> </div>
            </div>
          </div>

          <div className="ImageAdvantage_Button_Container">
            <button
              className={`${
                Analysis3_Dropdown_Show
                  ? "ImageAdvantage_Button"
                  : "ImageAdvantage_Button_Clicked"
              }`}
              onClick={() => {
                setAnalysis3_Dropdown_Show(!Analysis3_Dropdown_Show);
              }}
            >
              ▼ Jak to wygląda w praktyce?
            </button>
          </div>
        </div>
        <div>
          <Image
            src={"/assets/images/strategiamarketingowa/AnalysisImage3.avif"}
            alt="AnalysisImage3"
            height={401}
            width={652}
          />
        </div>
      </div>
      {/* Dropdown 3 */}
      <div className="full" hidden={Analysis3_Dropdown_Show}>
        <div className="Analysis3_Dropdown_Container">
          <div className="Analysis3_Dropdown_Text1">
            Przeprowadzamy z Tobą serię wywiadów, aby dowiedzieć się jak
            najwięcej o Tobie i Twojej firmie: Nasz proces rozpoczyna się od
            zadania sporej ilości pytań. Choć te rozmowy zawsze są inne,
            ponieważ musimy je dopasować do każdego klienta, to istnieją 3 ważne
            filary, które pomagamy ustalić w każdym przypadku:
          </div>
          <div className="Analysis3_Dropdown_Text2">
            Aby mieć pewność, że uda nam się otrzymać możliwie szczegółowe
            odpowiedzi, stosujemy kombinację wywiadów telefonicznych oraz
            tekstowych kwestionariuszy. Podczas tworzenia strategii
            marketingowej cały czas pozostajemy w kontakcie, aby zadawać
            dodatkowe pytania oraz omawiać proponowane podejścia.
          </div>
          <div className="Analysis3_Dropdown_Text3">
            Aby mieć pewność, że uda nam się otrzymać możliwie szczegółowe
            odpowiedzi, stosujemy kombinację wywiadów telefonicznych oraz
            tekstowych kwestionariuszy. Podczas tworzenia strategii
            marketingowej cały czas pozostajemy w kontakcie, aby zadawać
            dodatkowe pytania oraz omawiać proponowane podejścia.
          </div>
          <div className="Analysis3_Dropdown_Image">
            <Image
              src={
                "/assets/images/strategiamarketingowa/AnalysisDropdownThree_1.avif"
              }
              alt="AnalysisDropdownThree_1"
              height={610 * 0.8}
              width={1438 * 0.8}
            />
          </div>
          <div className="Analysis3_Grid">
            <div className="Analysis3_GridItem1">
              <div className="Analysis3_GridItemNumber">1</div>
              <div className="Analysis3_GridItemTitle">
                Komunikat marketingowy
              </div>
              <div className="Analysis3_GridItemContent">
                Kiedy już zrozumiemy Twoją konkurencję oraz co ważniejsze -
                Twoich klientów, wykorzystamy tę wiedzę projektując prosty,
                zwięzły i skuteczny komunikat, który będzie stanowił podstawę
                Twojego przyszłego marketingu.
              </div>
            </div>
            <div className="Analysis3_GridItem2">
              <div className="Analysis3_GridItemNumber">2</div>
              <div className="Analysis3_GridItemTitle">
                Plan strony internetowej
              </div>
              <div className="Analysis3_GridItemContent">
                Kiedy już zrozumiemy Twoją konkurencję oraz co ważniejsze -
                Twoich klientów, wykorzystamy tę wiedzę projektując prosty,
                zwięzły i skuteczny komunikat, który będzie stanowił podstawę
                Twojego przyszłego marketingu.
              </div>
            </div>
            <div className="Analysis3_GridItem3">
              <div className="Analysis3_GridItemNumber">3</div>
              <div className="Analysis3_GridItemTitle">
                Komunikat marketingowy
              </div>
              <div className="Analysis3_GridItemContent">
                Kiedy już zrozumiemy Twoją konkurencję oraz co ważniejsze -
                Twoich klientów, wykorzystamy tę wiedzę projektując prosty,
                zwięzły i skuteczny komunikat, który będzie stanowił podstawę
                Twojego przyszłego marketingu.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="Analysis_Card full">
        <div>
          <Image
            src={"/assets/images/strategiamarketingowa/AnalysisImage4.avif"}
            alt="AnalysisImage4"
            height={401}
            width={652}
          />
        </div>
        <div className="Analysis_Card_Content_Odd">
          <div className="Analysis_Card_Content_Title">
            Skalowalny lejek marketingowy
          </div>
          <div className="Analysis_Card_Content_Text">
            Projektujemy kuloodporny system, który poprowadzi klienta od
            pierwszego kontaktu z Twoim biznesem do pierwszej transakcji. A
            potem do kolejnych.
          </div>
          <div className="Analysis_Card_Content_Table_Odd">
            <div className="Analysis_Card_Content_Table_Column">
              <div>Lejki sprzedażowe i pozakupowe</div>
              <div>Kanały efektywnej komunikacji</div>
              <div>Pozycjonowanie na rynku</div>
            </div>
            <div className="Analysis_Card_Content_Table_Column">
              <div>Narzędzia automatyzacji (marketing automation)</div>
              <div>Kanały wydajnej dystrybucji (marketing mix)</div>
              <div>Warunkowanie optymalnej ceny</div>
            </div>
          </div>
          <div className="ImageAdvantage_Button_Container">
            <button
              className={`${
                Analysis4_Dropdown_Show
                  ? "ImageAdvantage_Button"
                  : "ImageAdvantage_Button_Clicked"
              }`}
              onClick={() => {
                setAnalysis4_Dropdown_Show(!Analysis4_Dropdown_Show);
              }}
            >
              ▼ Jak to wygląda w praktyce?
            </button>
          </div>
        </div>
      </div>
      {/* Dropdown 4 */}
      <div className="full" hidden={Analysis4_Dropdown_Show}>
        <div className="Analysis4_Dropdown_Container">
          <div className="Analysis4_Panel">
            <div className="Analysis4_PanelImage">
              <Image
                src={
                  "/assets/images/strategiamarketingowa/AnalysisDropdownFour_1.avif"
                }
                alt="AnalysisDropdownFour_1"
                height={361 * 0.9}
                width={514 * 0.9}
              />
            </div>
            <div className="Analysis4_PanelText">
              <div className="Analysis4_PanelTextTitle">Lejek sprzedażowy</div>
              <div className="Analysis4_PanelTextContent">
                Tworzymy lejek sprzedażowy – kuloodporny system, który prowadzi
                potencjalnego klienta od pierwszego kontaktu z Twoim biznesem do
                pierwszego zakupu
              </div>
              <div className="Analysis4_PanelTextContent">
                Mapujemy wielokanałowy proces zaprojektowany tak, aby skutecznie
                dotrzeć do Twojej grupy docelowej we właściwym miejscu i czasie.
              </div>
              <div className="Analysis4_PanelTextContent">
                Tak, by przekształcić zainteresowanie w sprzedaż.
              </div>
            </div>
          </div>
          <div className="Analysis4_Panel">
            <div className="Analysis4_PanelImage">
              <Image
                src={
                  "/assets/images/strategiamarketingowa/AnalysisDropdownFour_2.avif"
                }
                alt="AnalysisDropdownFour_2"
                height={361 * 0.9}
                width={514 * 0.9}
              />
            </div>
            <div className="Analysis4_PanelText">
              <div className="Analysis4_PanelTextTitle">Lejek pozakupowy</div>
              <div className="Analysis4_PanelTextContent">
                Budujemy strategię utrzymania klienta, aby zmienić
                dotychczasowych klientów w stałych nabywców i źródło poleceń.
                Mówimy o tym, jak sprzedawać droższe pakiety lub inne usługi.
              </div>
              <div className="Analysis4_PanelTextContent">
                Ważne: w strategii marketingowej dostarczamy wyjaśnień na temat
                działania każdego etapu lejka, tak abyś mógł bez wysiłku
                zrozumieć planowane przez nas działania - nawet jeśli znasz
                jedynie podstawy marketingu. Jeśli nie wiesz jak działają social
                media, google adwords, facebook ads, email marketing, content
                marketing czy też Google Analytics - wytłumaczymy Ci wszystko
                prostym do zrozumienia językiem
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
