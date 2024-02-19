import Image from "next/image";
import { useSelector } from "react-redux";

export default function QuoteOne() {

  const { isLoading, screenData } = useSelector((state) => state.strategy);
  const {quoteOne } = screenData;

  return (
    <div className="QuoteOne content">
      <div className="QuoteOne_Image full">
        <Image
          src={quoteOne?.image}
          height={733}
          width={918}
          alt="QuoteOneImage"
        />
      </div>
      <div className="QuoteOne_Text feature">
        {quoteOne?.bottom_title}
      </div>
    </div>
  );
}
