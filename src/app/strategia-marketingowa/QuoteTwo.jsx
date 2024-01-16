import Image from "next/image";

export default function QuoteTwo() {
  return (
    <div className="QuoteTwo content">
      <div className="QuoteTwo_Title feature">
        Marka bez osobowości, jest jak piosenka bez melodii.
      </div>
      <div className="QuoteTwo_TextOne">
        W jaki sposób sprawimy, że klienci będą rozpoznawać markę nawet wtedy
        gdy nie będą widzieć jej logotypu?
      </div>
      <div className="QuoteTwo_TextTwo">
        To tylko niektóre z wielu zagadnień, które pomożemy Ci rozwiązać.
      </div>
      <div className="QuoteTwo_Image full">
        <Image
          src={"/assets/images/strategiamarketingowa/QuoteTwoImage.avif"}
          alt="QuoteTwoImage"
          width={2000}
          height={1044}
        />
      </div>
    </div>
  );
}
