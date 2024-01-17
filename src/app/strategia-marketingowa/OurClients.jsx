import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function OurClients() {
  return (
    <div className="OurClients content">
      <div className="OurClients_Title">
        Pozwól naszym klientom opowiedzieć Ci o współpracy z nami
      </div>
      <div className="OurClients_Marquee full">
        <Marquee>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
        <Marquee>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
        <Marquee>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
        <Marquee>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
        <Marquee>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
        <Marquee>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
        <Marquee>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
      <div className="OurClients_Card_Container popout">
        <div className="OurClients_Card_One">
          <div className="OurClients_Card_One_Title">
            20 lat pracy. Tysiące{" "}
            <span className="YellowMark">zadowolonych</span> klientów
          </div>
          <div className="OurClients_Card_One_Content">
            Międzynarodowe korporacje. Lokalni przedsiębiorcy. Instytucje
            publiczne.
          </div>
          <div className="OurClients_Card_One_Button_Container">
            <button className="OurClients_Card_One_Button">
              Poznaj wszystkie recenzje
            </button>
          </div>
        </div>
        <div className="OurClients_Card_Two">
          <div>
            <Image
              src={"/assets/images/strategiamarketingowa/OurClientsImage.svg"}
              alt="OurClientsImage"
              width={250}
              height={180}
            />
          </div>
          <div className="OurClients_Card_Two_Content">
            Amerykańska agencja ratingowa “Rating Capitan” plasuje nas w swoim
            raporcie w gronie{" "}
            <span className="YelloMarkReverse">10 najlepszych agencji</span> w
            Polsce. (Na podstawie realnych opinii)
          </div>
        </div>
      </div>
    </div>
  );
}
