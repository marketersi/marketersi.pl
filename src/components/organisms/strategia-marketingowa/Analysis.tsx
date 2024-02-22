import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Analysis() {
  const { isLoading, screenData } = useSelector((state) => state.strategy);
  const { Card1, Card2, Card3, Card4 } = screenData;
  const { ButtonData } = screenData?.Card1 || {};
  const { Point1, Point2 } = Card1?.Points || {};

  const [Analysis1_Dropdown_Show, setAnalysis1_Dropdown_Show] = useState(false);
  const [Analysis2_Dropdown_Show, setAnalysis2_Dropdown_Show] = useState(false);
  const [Analysis3_Dropdown_Show, setAnalysis3_Dropdown_Show] = useState(false);
  const [Analysis4_Dropdown_Show, setAnalysis4_Dropdown_Show] = useState(false);

  return (
    <div className="Analysis content">
      {/* Card 1 */}
      <div className="Analysis_Card full">
        <div className="Analysis_Card_Content">
          <div className="Analysis_Card_Content_Title">{Card1?.title}</div>
          <div className="Analysis_Card_Content_Text">{Card1?.subtitle}</div>
          <div className="Analysis_Card_Content_Table">
            <div className="Analysis_Card_Content_Table_Column">
              {Point1?.map((e, index) => {
                return <div key={index}>{e}</div>;
              })}
            </div>
            <div className="Analysis_Card_Content_Table_Column">
              {Point2?.map((e, index) => {
                return <div key={index}>{e}</div>;
              })}
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
              ▼ {Card1?.button_text}
            </button>
          </div>
        </div>

        <div className="Analysis_Card_img_order">
          <Image
            src={Card1?.main_image}
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
            {ButtonData?.description_1}
          </div>
          <div className="Analysis1_Dropdown_Text2">
            {ButtonData?.ButtonPoints?.map((e, index) => {
              return <div key={index}>{e}</div>;
            })}
          </div>
          <div className="Analysis1_Dropdown_Text3">
            {ButtonData?.description_2}
          </div>
          <div className="Analysis1_Dropdown_Image">
            <Image
              src={ButtonData?.image}
              alt="AnalysisDropdownOne_1"
              height={778 * 0.9}
              width={1438 * 0.9}
            />
          </div>
          <div className="Analysis1_Grid">
            <div className="Analysis1_GridItem1">
              {ButtonData?.CardGrid?.Card1?.map((point, i) => {
                return <div key={i}>{point}</div>;
              })}
            </div>
            <div className="Analysis1_GridItem2">
              {ButtonData?.CardGrid?.Card2?.map((point, i) => {
                return <div key={i}>{point}</div>;
              })}
            </div>
            <div className="Analysis1_GridItem3">
              {ButtonData?.CardGrid?.Card3?.map((point, i) => {
                return <div key={i}>{point}</div>;
              })}
            </div>
            <div className="Analysis1_GridItem4">
              {ButtonData?.CardGrid?.Card4?.map((point, i) => {
                return <div key={i}>{point}</div>;
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="Analysis_Card full">
        <div className="analysis_card_img2">
          <Image
            src={Card2?.main_image}
            alt="AnalysisImage2"
            height={401}
            width={652}
          />
        </div>
        <div className="Analysis_Card_Content_Odd">
          <div className="Analysis_Card_Content_Title">{Card2?.title}</div>
          <div className="Analysis_Card_Content_Text">{Card2?.subtitle}</div>
          <div className="Analysis_Card_Content_Table_Odd">
            <div className="Analysis_Card_Content_Table_Column">
              {Card2?.Points?.Point1?.map((point, e) => {
                return <div key={e}>{point}</div>;
              })}
            </div>
            <div className="Analysis_Card_Content_Table_Column">
              {Card2?.Points?.Point2?.map((point, e) => {
                return <div key={e}>{point}</div>;
              })}
            </div>
          </div>

          <div className="ImageAdvantage_Button_Container text-xl-end">
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
              ▼ {Card2?.button_text}
            </button>
          </div>
        </div>
      </div>
      {/* Dropdown 2 */}
      <div className="full" hidden={Analysis2_Dropdown_Show}>
        <div className="Analysis2_Dropdown_Container">
          <div className="Analysis2_Dropdown_Text1">
            {Card2?.ButtonData?.description_1}
          </div>
          <div className="Analysis2_Dropdown_Text2">
            {Card2?.ButtonData?.description_2}
          </div>
          <div className="Analysis2_Dropdown_Image1">
            <Image
              src={Card2?.ButtonData?.image_1}
              alt="AnalysisDropdownTwo_1"
              height={433 * 0.9}
              width={835 * 0.9}
            />
          </div>
          <div className="Analysis2_Dropdown_Text3">
            {Card2?.ButtonData?.description_3}
          </div>
          <div className="Analysis2_Dropdown_Image2">
            <Image
              src={Card2?.ButtonData?.image_2}
              alt="AnalysisDropdownTwo_2.avif"
              height={433 * 0.9}
              width={835 * 0.9}
            />
          </div>
          <div className="Analysis2_Dropdown_Text4">
            {Card2?.ButtonData?.description_4}
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="Analysis_Card full">
        <div className="Analysis_Card_Content">
          <div className="Analysis_Card_Content_Title">{Card3?.title}</div>
          <div className="Analysis_Card_Content_Text">{Card3?.subtitle}</div>
          <div className="Analysis_Card_Content_Table">
            <div className="Analysis_Card_Content_Table_Column">
              {Card3?.Points?.Point1?.map((point, e) => {
                return <div key={e}>{point}</div>;
              })}
            </div>
            <div className="Analysis_Card_Content_Table_Column">
              {Card3?.Points?.Point2?.map((point, e) => {
                return <div key={e}>{point}</div>;
              })}
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
              ▼ {Card3?.button_text}
            </button>
          </div>
        </div>
        <div>
          <Image
            src={Card3?.main_image}
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
            {Card3?.ButtonData?.description_1}
          </div>
          <div className="Analysis3_Dropdown_Text2">
            {Card3?.ButtonData?.description_2}
          </div>
          <div className="Analysis3_Dropdown_Text3">
            {Card3?.ButtonData?.description_3}
          </div>
          <div className="Analysis3_Dropdown_Image">
            <Image
              src={Card3?.ButtonData?.image}
              alt="AnalysisDropdownThree_1"
              height={610 * 0.8}
              width={1438 * 0.8}
            />
          </div>
          <div className="Analysis3_Grid">
            {Card3?.ButtonData?.CardGrid.map((card, index) => (
              <div key={index} className={`Analysis3_GridItem${index + 1}`}>
                <div className="Analysis3_GridItemNumber">
                  {card.item_number}
                </div>
                <div className="Analysis3_GridItemTitle">{card.title}</div>
                <div className="Analysis3_GridItemContent">{card.info}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="Analysis_Card full mt-5">
        <div>
          <Image
            src={Card4?.main_image}
            alt="AnalysisImage4"
            height={401}
            width={652}
          />
        </div>
        <div className="Analysis_Card_Content_Odd">
          <div className="Analysis_Card_Content_Title">{Card4?.title}</div>
          <div className="Analysis_Card_Content_Text">{Card4?.subtitle}</div>
          <div className="Analysis_Card_Content_Table_Odd">
            <div className="Analysis_Card_Content_Table_Column">
              {Card4?.Points?.Point1?.map((point, e) => {
                return <div key={e}>{point}</div>;
              })}
            </div>
            <div className="Analysis_Card_Content_Table_Column">
              {Card4?.Points?.Point2?.map((point, e) => {
                return <div key={e}>{point}</div>;
              })}
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
              ▼ {Card4?.button_text}
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
                src={Card4?.ButtonData?.image_1}
                alt="AnalysisDropdownFour_1"
                height={361 * 0.9}
                width={514 * 0.9}
              />
            </div>
            <div className="Analysis4_PanelText">
              <div className="Analysis4_PanelTextTitle">
                {Card4?.ButtonData?.title1}
              </div>
              <div className="Analysis4_PanelTextContent">
                {Card4?.ButtonData?.description_1}
              </div>
              <div className="Analysis4_PanelTextContent">
                {Card4?.ButtonData?.description_2}
              </div>
              <div className="Analysis4_PanelTextContent">
                {Card4?.ButtonData?.description_3}
              </div>
            </div>
          </div>
          <div className="Analysis4_Panel">
            <div className="Analysis4_PanelImage">
              <Image
                src={Card4?.ButtonData?.image_2}
                alt="AnalysisDropdownFour_2"
                height={361 * 0.9}
                width={514 * 0.9}
              />
            </div>
            <div className="Analysis4_PanelText">
              <div className="Analysis4_PanelTextTitle">
                {Card4?.ButtonData?.title_2}
              </div>
              <div className="Analysis4_PanelTextContent">
                {Card4?.ButtonData?.description_4}
              </div>
              <div className="Analysis4_PanelTextContent">
                {Card4?.ButtonData?.description_5}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
