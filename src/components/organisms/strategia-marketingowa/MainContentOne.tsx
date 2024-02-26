import { useSelector } from "react-redux";
const MainContainerOneData = {
  title:
    "Skuteczna strategia marketingowa to plan zorientowany na maksymalne zyski. Jest to narzędzie, które pomaga przedsiębiorcom w wyborze, ustaleniu priorytetów i planowaniu efektywnych działań marketingowych.",
};

export default function MainContentOne() {
  const { isLoading, screenData } = useSelector((state) => state.strategy);

  console.log("screen data strategia", screenData);
  const { MainContentOne } = screenData.MainContent || {};

  return (
    <div className="MainContentOne content">
      <div className="MainContentOne_Container">
        {MainContentOne?.description}
      </div>
    </div>
  );
}
