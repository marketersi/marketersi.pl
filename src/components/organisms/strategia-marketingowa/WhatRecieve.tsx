import Image from "next/image";
import { useState } from "react";

export default function WhatRecieve() {
  const [WhatRecieve_Dropdown_Show, setWhatRecieve_Dropdown_Show] =
    useState(false);

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
        <button
          className={`${
            WhatRecieve_Dropdown_Show
              ? "Analysis_Card_Content_Button"
              : "Analysis_Card_Content_Button_Clicked"
          }`}
          onClick={() => {
            setWhatRecieve_Dropdown_Show(!WhatRecieve_Dropdown_Show);
          }}
        >
          ▼ Jak taki plan wygląda w praktyce?
        </button>
      </div>

      
      {/* WhatRecieve_Dropdown */}
      <div className="WhatRecieve_Dropdown" hidden={WhatRecieve_Dropdown_Show}>
        <div className="WhatRecieve_Dropdown_TitleOne">
          Na 50-100 stronach powiemy Ci dokładnie o tym co robić, oraz w jaki
          sposób to robić - krok po kroku.
        </div>
        <div className="WhatRecieve_Dropdown_ContentOne">
          Załóżmy, że jedną z dochodowych taktyk, którą zidentyfikowaliśmy dla
          Ciebie jest pisanie bloga, który ma dotrzeć do precyzyjnie określonej
          grupy. Ale jak dokładnie to zrobić? Dostarczamy Ci konkrety. Listę 100
          tematów na posty blogowe, które wybraliśmy analizując, na które
          zapytania najłatwiej Ci wypozycjonować się w Google. Wybieramy jedynie
          takie słowa kluczowe, które mają wystarczająco dużą liczbę
          miesięcznych wyszukiwań, tak aby zapewnić Ci duży zwrot z inwestycji.
          Dzielimy tematy postów blogowych na 3 listy, które są skierowane do
          klientów na różnym etapie świadomości zakupowej. Pokazujemy Ci
          strukturę posta blogowego, która będzie najbardziej przekonująca dla
          Twoich klientów.
        </div>
        <div className="WhatRecieve_Dropdown_TitleTwo">
          A ponieważ wiemy, że nie lubisz pisać, ale masz budżet marketingowy w
          wielkości 1000 PLN miesięcznie – tłumaczymy jak znaleźć dobrego, ale
          niedrogiego copywritera w Twojej niszy. Oddajemy w Twoje ręce dokument
          – brief, który możesz wysłać copywriterowi, aby wiedział na co zwracać
          uwagę, żeby w skuteczny sposób napisać Twoje posty.
        </div>
        <div className="WhatRecieve_Dropdown_ContentTwo">
          Celem jest stworzenie dokumentu, który będzie jedynym źródłem, z
          jakiego będziesz musiał korzystać, aby osiągnąć swoje cele biznesowe.
          To bardzo konkretny harmonogram, który porządkuje taktyki opisane w
          całej strategii. Ten plan marketingowy określa najbardziej dochodowe
          działania, jakie jesteś w stanie podjąć w swojej obecnej sytuacji.
          Jeśli masz mały budżet i niewiele wolnego czasu, rozpoczniemy od
          takich taktyk, które można wykorzystywać przy minimalnym wkładzie
          finansowym i niewielkim wysiłku. Do kolejnych taktyk przejdziemy w
          późniejszej części strategii - kiedy pierwsze działania wygenerują
          obroty pozwalające na zwiększenie Twojego budżetu. Członkowie owocnego
          zespołu niejednokrotnie pokazali światu, że są w stanie generować duże
          zyski dla klientów. Sprawdź sam - poznaj dowolny opis przypadku u góry
          tej strony. Powód dla którego jesteśmy w stanie osiągać rezultaty,
          które osiągamy jest jeden - nigdy nie rozpoczynamy kampanii reklamowej
          bez opracowania solidnej strategii. Ty też nie powinieneś.
        </div>
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
