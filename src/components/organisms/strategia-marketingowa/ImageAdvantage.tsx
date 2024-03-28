import { useState } from "react";
import { useSelector } from "react-redux";

export default function ImageAdvantage() {
  const { screenData } = useSelector((state) => state.strategy);
  const { imagesAdvantage } = screenData || {};
  const { info_1, info_2 } = imagesAdvantage || [];

  const [ImageAdvantage_Dropdown_Show, setImageAdvantage_Dropdown_Show] =
    useState(true);

  return (
    <div className="ImageAdvantage content">
      <div className="ImageAdvantage_Title feature">
        {/* Opracujemy Twoją wizerunkową przewagę */}
        {imagesAdvantage?.title}
      </div>
      <div className="ImageAdvantage_Content feature">
        {imagesAdvantage?.description}
      </div>
      <div className="ImageAdvantage_Table">
        <div className="ImageAdvantage_Table_Column">
          {info_1?.map((info, index) => (
            <div key={index}>{info}</div>
          ))}
          {/* <div>Wizerunkowe cele firmy</div>
          <div>Architektura i standardy marki</div>
          <div>Storytelling - Nasza opowieść</div>
          <div>Jak się wyróżniamy</div>
          <div>Pożądane Emocje</div> */}
        </div>
        <div className="ImageAdvantage_Table_Column">
          {info_2?.map((info, index) => (
            <div key={index}>{info}</div>
          ))}
          {/* <div>Logo i zasady ekspozycji.</div>
          <div>Zasady komunikacji werbalnej</div>
          <div>Typografia i hierarchia wizualna</div>
          <div>Markowy styl ilustracji i fotografii</div>
          <div>Personal branding</div> */}
        </div>
        <div className="ImageAdvantage_Table_Column">
          <div className="ImageAdvantage_Button_Container">
            <div
              className={`${
                ImageAdvantage_Dropdown_Show
                  ? "ImageAdvantage_Button"
                  : "ImageAdvantage_Button_Clicked"
              }`}
              onClick={() => {
                setImageAdvantage_Dropdown_Show(!ImageAdvantage_Dropdown_Show);
              }}
            >
              ▼ {imagesAdvantage?.button_text}
            </div>
          </div>
        </div>
      </div>
      {/* ImageAdvantage_Dropdown */}
      <div
        className="ImageAdvantage_Dropdown"
        hidden={ImageAdvantage_Dropdown_Show}
      >
        <div className="ImageAdvantage_Dropdown_ContentOne">
          {imagesAdvantage?.paragraph_1}
        </div>
        <div className="ImageAdvantage_Dropdown_ContentTwo">
          {imagesAdvantage?.paragraph_2}
        </div>
      </div>
    </div>
  );
}
