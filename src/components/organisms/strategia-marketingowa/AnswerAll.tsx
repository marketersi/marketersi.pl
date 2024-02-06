import Image from "next/image";

export default function AnswerAll() {
  return (
    <div className="AnswerAll content">
      <div className="AnswerAll_Title">
        Na wszystkie pytania odpowiedź brzmi:
      </div>
      <div className="AnswerAll_Image feature">
        <Image
          src={"/assets/images/strategiamarketingowa/AnswerAllImage.avif"}
          alt="AnswerAllImage"
          height={299}
          width={1001}
        />
      </div>
    </div>
  );
}
