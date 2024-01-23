import ReactModal from "react-modal";
import SurveyModalSelect from "./SurveyModalSelect";
import Image from "next/image";

export default function SurveyModal(props) {
  return (
    <ReactModal
      isOpen={props.showModal}
      contentLabel="Form Modal"
      className="Modal content"
      overlayClassName="Overlay"
    >
      <div className="ModalTitle">
        Zdobądź 3 różne opcje cenowe na marketing swojej firmy.
      </div>
      <div className="ModalContent">
        Przejdź krótki formularz. Zobacz co dla Ciebie zrobimy, ile za to
        policzymy i jak szybko Ci się to zwróci.
      </div>
      <div className="ModalCard">
        <div className="ModalDropdownTitleOne">
          Jaki cel stawiasz przed swoją firmą?
        </div>
        <SurveyModalSelect options={props.options} />
        <div className="ModalDropdownTitleTwo">Jak się reklamujesz?</div>
        <SurveyModalSelect options={props.options} />
        <div className="ModalSubmitButton">Rozpocznij kalkulację</div>
      </div>
      <button className="ModalCloseButton" onClick={props.handleCloseModal}>
        <Image
          src={"/assets/images/strategiamarketingowa/close.svg"}
          alt="Close"
          width={20}
          height={20}
        />
      </button>
    </ReactModal>
  );
}
