import Image from "next/image";

export default function StrategyAction() {
  return (
    <div className="StrategyAction content">
      <div className="StrategyAction_Container full">
        <div className="StrategyAction_Content_Container">
          <div className="StrategyAction_Content_Title">
            Wprowadzenie strategii w życie
          </div>
          <div className="StrategyAction_Content_TextOne">
            Niezależnie od tego, czy chodzi o sprzedaż bezpośrednią, content
            marketing, czy planowanie kampanii reklamowej na Facebooku – zawsze
            dostaniesz od nas komplet informacji pozwalający na wprowadzenie
            strategii w życie samodzielnie.
          </div>
          <div className="StrategyAction_Content_TextTwo">
            Jeśli Twój budżet na marketing wynosi przynajmniej 3000 PLN netto
            miesięcznie – przedstawimy Ci również opcjonalną ofertę wprowadzenia
            strategii marketingowej w życie za Ciebie.
          </div>
        </div>
        <div>
          <Image
            src={
              "/assets/images/strategiamarketingowa/StrategyActionImage.avif"
            }
            alt="StrategyActionImage"
            height={364}
            width={652}
          />
        </div>
      </div>
    </div>
  );
}
