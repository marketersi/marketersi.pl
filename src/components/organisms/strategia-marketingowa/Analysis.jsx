import Image from "next/image";

export default function Analysis() {
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
          <div>
            <button className="Analysis_Card_Content_Button">
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
          <div>
            <button className="Analysis_Card_Content_Button">
              ▼ Jak to wygląda w praktyce?
            </button>
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
          <div>
            <button className="Analysis_Card_Content_Button">
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
          <div>
            <button className="Analysis_Card_Content_Button">
              ▼ Jak to wygląda w praktyce?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
