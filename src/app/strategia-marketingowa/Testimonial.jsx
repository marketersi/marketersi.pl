import Image from "next/image";

export default function Testimonial() {
  return (
    <div className="Testimonial content">
      <div className="Testimonial_Card feature">
        <div>
          <Image
            src={"/assets/images/strategiamarketingowa/TestimonialImage.avif"}
            alt="TestimonialImage"
            width={700}
            height={640}
          />
        </div>
        <div className="Testimonial_Card_Content">
          <div className="Testimonial_Card_Content_Title">
            Gdy przedsiębiorca zaczyna sobie zdawać sprawę z całego potencjału
            wzrostu, jaki posiada jego biznes, w firmie zaczyna się dziać
            prawdziwa magia.
          </div>
          <div>
            <button className="Testimonial_Card_Content_Button">
              Podoba mi się ten pomyst. Wyślijcie mi niezobowiązującą ofertę
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
