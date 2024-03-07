import { useState } from "react";

export default function ImageAdvantage() {
  const [ImageAdvantage_Dropdown_Show, setImageAdvantage_Dropdown_Show] =
    useState(true);

  return (
    <div className="ImageAdvantage content">
      <div className="ImageAdvantage_Title feature">
        Opracujemy Twoją wizerunkową przewagę
      </div>
      <div className="ImageAdvantage_Content feature">
        W świecie, w którym Twojego potencjalnego klienta od konkurencji dzieli
        jedynie kilka kliknięć, należy starannie zaplanować to, w jaki sposób
        będziemy się wyróżniać - zarówno słowem jak i obrazem.
      </div>
      <div className="ImageAdvantage_Table">
        <div className="ImageAdvantage_Table_Column">
          <div>Wizerunkowe cele firmy</div>
          <div>Architektura i standardy marki</div>
          <div>Storytelling - Nasza opowieść</div>
          <div>Jak się wyróżniamy</div>
          <div>Pożądane Emocje</div>
        </div>
        <div className="ImageAdvantage_Table_Column">
          <div>Logo i zasady ekspozycji.</div>
          <div>Zasady komunikacji werbalnej</div>
          <div>Typografia i hierarchia wizualna</div>
          <div>Markowy styl ilustracji i fotografii</div>
          <div>Personal branding</div>
        </div>
        <div className="ImageAdvantage_Table_Column">
          <div className="ImageAdvantage_Button_Container">
            <button
              className={`${
                ImageAdvantage_Dropdown_Show
                  ? "ImageAdvantage_Button"
                  : "ImageAdvantage_Button_Clicked"
              }`}
              onClick={() => {
                setImageAdvantage_Dropdown_Show(!ImageAdvantage_Dropdown_Show);
              }}
            >
              ▼ Jak taki plan wygląda w praktyce?
            </button>
          </div>
        </div>
      </div>
      {/* ImageAdvantage_Dropdown */}
      <div
        className="ImageAdvantage_Dropdown"
        hidden={ImageAdvantage_Dropdown_Show}
      >
        <div className="ImageAdvantage_Dropdown_ContentOne">
          Starannie badamy Twoją konkurencję, aby upewnić się, że Twoja marka
          wyróżni się w korzystny sposób. Dobieramy odpowiednią paletę kolorów,
          styl i tworzymy wytyczne dla Twojego brandingu. Opracowujemy opowieść
          Twojej marki - w taki sposób, by wywoływała odpowiednie emocje w
          Twoich potencjalnych klientach i zdobyła ich zaufanie.
        </div>
        <div className="ImageAdvantage_Dropdown_ContentTwo">
          Skuteczny emotional branding pozwoli Ci uzyskać przewagę nad
          konkurencją już na pierwszy rzut oka. Takie strategiczne podejście do
          identyfikacji sprawi, że twoja marka zapisze się w pamięci klienta od
          pierwszego kontaktu i zostanie z nim aż do podjęcia decyzji zakupowej.
        </div>
      </div>
    </div>
  );
}
