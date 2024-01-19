import Image from "next/image";
import { useState } from "react";
import SurveyModal from "./SurveyModal";

export default function Testimonial() {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

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
            <button
              className="Testimonial_Card_Content_Button"
              onClick={handleOpenModal}
            >
              Podoba mi się ten pomyst. Wyślijcie mi niezobowiązującą ofertę
            </button>
          </div>
        </div>
      </div>
      {/* Modal */}
      <SurveyModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        options={options}
      />
    </div>
  );
}
