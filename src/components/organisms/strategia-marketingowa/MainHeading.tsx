import Image from "next/image";

const MainHeadingData = {
  title: "Strategia.",
  subtitle: "Tak się tworzy, prężną firmę.",
  text: "Od rozpoznania okazji do szybkiego rozwoju firmy, po efektywny plan realizacji - Strategia to paliwo rakietowe startującej marki.",
  image: "/assets/images/strategiamarketingowa/MainHeadingImage.avif",
};

export default function MainHeading() {
  return (
    <div className="MainHeading content">
      <div className="MainHeading_Container full">
        <div>
          <div className="MainHeading_Title">Strategia.</div>
          <div className="MainHeading_SecondTitle">
            Tak się tworzy,
            <br /> prężną firmę.
          </div>
          <div className="MainHeading_Content">
            Od rozpoznania okazji do szybkiego rozwoju firmy, po efektywny plan
            realizacji - Strategia to paliwo rakietowe startującej marki.
          </div>
        </div>
        <div className="MainHeading_Image">
          <Image
            src={"/assets/images/strategiamarketingowa/MainHeadingImage.avif"}
            alt="MainHeadingImage"
            width={755}
            height={512}
          />
        </div>
      </div>
    </div>
  );
}
