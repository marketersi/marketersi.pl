import Image from "next/image";

export default function Branding() {
  return (
    <div className="Branding content">
      <div className="Branding_Container full">
        <div className="Branding_Content_Container">
          <div className="Branding_Title">Storytelling</div>
          <div className="Branding_Text">
            Marka, to rodzaj doświadczenia. Emocje, które należy starannie
            zaprojektować i wdrożyć.
          </div>
        </div>
        <div className="Branding_Image">
          <Image
            src={"/assets/images/strategiamarketingowa/BrandingImage.avif"}
            width={635}
            height={371}
            alt="BrandingImage"
          />
        </div>
      </div>
    </div>
  );
}
