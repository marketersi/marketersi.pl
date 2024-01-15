import Image from "next/image";

export default function Strategy() {
  return (
    <div className="Strategy content">
      <p className="Strategy_Title">3 cechy owocnej strategi:</p>
      <div className="Strategy_Cards feature">
        <div className="Strategy_Card">
          <div className="Strategy_Card_Title">
            <div className="Strategy_Card_Title_Number">1</div>
            <div>Dopasowana</div>
          </div>
          <div>
            <Image
              src={"/assets/images/strategiamarketingowa/StrategyImage1.avif"}
              alt="StrategyImage1"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className="Strategy_Card_Content_One">
            Ten plan marketingowy określa najbardziej dochodowe działania, jakie
            jesteś w stanie podjąć w swojej obecnej sytuacji. Jest opracowany
            pod Twoją dostępność czasową i budżetu.
          </div>
          <div className="Strategy_Card_Content_Two">
            Jeśli masz mały budżet i niewiele wolnego czasu, rozpoczniemy od
            takich taktyk, które można wykorzystywać przy minimalnym wkładzie
            finansowym i niewielkim
          </div>
        </div>
        <div className="Strategy_Card">
          <div className="Strategy_Card_Title">
            <div className="Strategy_Card_Title_Number">2</div>
            <div>Konkretna</div>
          </div>
          <div>
            <Image
              src={"/assets/images/strategiamarketingowa/StrategyImage2.avif"}
              alt="StrategyImage2"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className="Strategy_Card_Content_One">
            Na 50-100 stronach powiemy Ci dokładnie o tym co robić, oraz w jaki
            sposób to robić – krok po kroku.
          </div>
          <div className="Strategy_Card_Content_Two">
            Naszym celem jest stworzenie dokumentu, który będzie jedynym
            źródłem, z jakiego będziesz musiał korzystać, aby osiągnąć swoje
            wyznaczone cele biznesowe.
          </div>
        </div>
        <div className="Strategy_Card">
          <div className="Strategy_Card_Title">
            <div className="Strategy_Card_Title_Number">3</div>
            <div>Skuteczna</div>
          </div>
          <div>
            <Image
              src={"/assets/images/strategiamarketingowa/StrategyImage3.avif"}
              alt="StrategyImage3"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className="Strategy_Card_Content_One">
            Członkowie owocnego zespołu niejednokrotnie pokazali światu, że są w
            stanie generować duże zyski dla klientów. Sprawdź sam!
          </div>
          <div className="Strategy_Card_Content_Two">
            Powód dla którego jesteśmy w stanie osiągać rezultaty, które
            osiągamy jest jeden – nigdy nie rozpoczynamy kampanii reklamowej bez
            opracowania solidnej strategii.
          </div>
        </div>
      </div>
    </div>
  );
}
