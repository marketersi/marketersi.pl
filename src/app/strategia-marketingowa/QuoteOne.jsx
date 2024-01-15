import Image from "next/image";

export default function QuoteOne() {
  return (
    <div className="QuoteOne content">
      <div className="QuoteOne_Image full">
        <Image
          src={"/assets/images/strategiamarketingowa/QuoteOneImage.avif"}
          height={733}
          width={918}
          alt="QuoteOneImage"
        />
      </div>
      <div className="QuoteOne_Text feature">
        Ludzie nie zawsze zapamiętają, co mówisz, a nawet co robisz, ale zawsze
        pamiętają, jakie wywołasz w nich uczucie.
      </div>
    </div>
  );
}
