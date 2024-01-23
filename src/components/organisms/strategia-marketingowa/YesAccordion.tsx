import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

export default function YesAccordion() {
  return (
    <div className="Accordion content">
      <Accordion allowZeroExpanded className="popout">
        {/* Item 1 */}
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Czy moja strategia może skupić się na obszarach innych niż te
              wymienione powyżej?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Oczywiście, potrzeby naszych klientów są różne, dlatego każda
              strategia, którą tworzymy skupia się na tych elementach, które są
              ważne dla klienta. Poinformuj naszego konsultanta o tym czego
              potrzebujesz, a dobierzemy dla Ciebie rozwiązanie uszyte na miarę
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        {/* Item 2 */}
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Zależy mi na czasie. Czy moge liczyć na szybką realizację?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Tak! Większość realizacji zamykamy w trzy tygodnie. Jeśli zależy
              Ci na szybkim wdrożeniu, możemy opracować niektóre elementy
              marketingu jeszcze przed ukończeniem strategii.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        {/* Item 3 */}
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Czy macie doświadczenie w mojej branży?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Możemy strzelić w ciemno - tak! W ciągu 12 lat zrealizowaliśmy
              tysiące projektów, dlatego wyjątkowo rzadko zdarza nam sie
              pracować z nowymi branżami. Zapytaj naszego konsultanta o firmy
              podobne do Twojej, a z pewnością będzie w stanie podesłać
              przynajmniej kilka przykładów.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        {/* Item 4 */}
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Czy możecie zająć się wdrożeniem strategii marketingowej za mnie?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Oczywiście, nasz zespół strategów składa się z samych praktyków ze
              świetnymi wynikami, dlatego marketerzy tworzący Twoją strategię
              bez problemów zajmą się jej wdrożeniem w życie. Strategia to
              zazwyczaj początek długoletniej relacji z naszymi klientami.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
