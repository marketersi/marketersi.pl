import Image from "next/image";
import { useSelector } from "react-redux";

export default function AnswerAll() {

  const { isLoading, screenData } = useSelector((state) => state.strategy);
  const { FAQsection } = screenData;

  return (
    <div className="AnswerAll content">
      <div className="AnswerAll_Title">
        {FAQsection?.title}
      </div>
      <div className="AnswerAll_Image feature">
        <Image
          src={FAQsection?.image_url}
          alt="AnswerAllImage"
          height={299}
          width={1001}
        />
      </div>
    </div>
  );
}
