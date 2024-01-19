import Image from "next/image";

export default function MainNumber() {
  return (
    <div className="MainNumber content">
      <div className="MainNumber_Container">
        <div className="MainNumber_One">
          <div className="MainNumber_One_Content">
            Szansa sukcesu marketera z udokumentowaną strategią zwiększa się aż
            pięciokrotnie.
          </div>
          <div>
            <Image
              src={"/assets/images/strategiamarketingowa/MainNumberImage1.avif"}
              alt="MainNumberImage1"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
        <div className="MainNumber_Two">
          <div className="MainNumber_Two_Content">
            Szansa sukcesu marketera z udokumentowaną strategią zwiększa się aż
            pięciokrotnie.
          </div>
          <div>
            <Image
              src={"/assets/images/strategiamarketingowa/MainNumberImage2.avif"}
              alt="MainNumberImage2"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className="MainNumber_Two_Footer">
            <div>* </div>
            <div>
              Badanie amerykańskich przedsiębiorstw <br />
              Nathan Ellering 2019r.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
