import Image from "next/image";

export default function WhatRecieve() {
  return (
    <div className="WhatRecieve content">
      {/* One */}
      <div className="WhatRecieve_Title_One">Co dokładnie otrzymam?</div>
      <div className="WhatRecieve_Content_One">
        Rdzeń owocnej strategii marketingowej to konkretny plan działania. Mówi
        o tym jakie działania podejmować, kiedy i w jakiej kolejności. Dobór
        działań jest zależny od Twojej dostępności czasowej oraz budżetu.
      </div>
      {/* Two */}
      <div className="WhatRecieve_Title_Two">Konkretny plan działania</div>
      <div className="WhatRecieve_Content_Two">
        Po zaprojektowaniu obu lejków sprzedażowych, szeregujemy wszystkie
        taktyki w logiczny plan działania, który zapewnia tobie jak najwyższy
        zwrot z inwestycji przy minimalnym wysiłku.
      </div>
      {/* Table */}
      <div className="WhatRecieve_Table">
        <div className="WhatRecieve_Table_Column">
          <div>Cele krótkodystansowe</div>
          <div>Cele długodystansowe</div>
        </div>
        <div className="WhatRecieve_Table_Column">
          <div>Działania operacyjne</div>
          <div>Monitoring - Pomiar i statystyki</div>
        </div>
        <div className="WhatRecieve_Table_Column">
          <div>Kalendarz działań i oś czasu.</div>
          <div>Sekwencje automatyzacji</div>
        </div>
      </div>
      {/* Image 1 */}
      <div
        className="full"
        style={{ marginBottom: "30px", textAlign: "center" }}
      >
        <Image
          src={"/assets/images/strategiamarketingowa/WhatRecieveImage1.avif"}
          alt="WhatRecieveImage1"
          height={435}
          width={1200}
        />
      </div>
      {/* Three */}
      <div className="WhatRecieve_Title_Three">
        Klienci pozyskani przez Ciebie w pierwszych miesiącach sprawiają, że
        Twój budżet się powiększa i tym samym odblokowuje kolejne etapy planu.
      </div>
      <div className="WhatRecieve_Content_Three_One">
        Każde działanie jest opisane krok po kroku w wyczerpujący sposób
        wewnątrz strategii. Tak aby klient znał dokładną instrukcję potrzebą do
        wprowadzenia danej taktyki w życie. Unikamy marketingowego żargonu, a
        jeśli temat jest zaawansowany – odsyłamy do sprawdzonych źródeł.
      </div>
      <div className="WhatRecieve_Content_Three_Tow">
        Zawsze dostosowujemy kanały komunikacji marketingowej i nasze plany
        działania do potrzeb naszych klientów. Oznacza to, że jeśli Twój model
        biznesowy jest eksperymentalny – możemy skupić się na horyzoncie
        krótkoterminowym zamiast na planie 12-miesięcznym.
      </div>
      {/* Button */}
      <div className="Analysis_Card_Content_Button_Container">
        <button className="Analysis_Card_Content_Button">
          Jak taki plan wygląda w praktyce?
        </button>
      </div>
      {/* Image 2 */}
      <div className="feature" style={{ textAlign: "center" }}>
        <Image
          src={"/assets/images/strategiamarketingowa/WhatRecieveImage2.avif"}
          alt="WhatRecieveImage2"
          height={520}
          width={855}
        />
      </div>
    </div>
  );
}
