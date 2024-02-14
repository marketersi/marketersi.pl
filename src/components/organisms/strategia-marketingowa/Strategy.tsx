import Image from "next/image";
import { useSelector } from "react-redux";

export default function Strategy() {

  const { isLoading, screenData } = useSelector((state) => state.strategy);
  const { strategy, featureList } = screenData;

  return (
    <div className="Strategy content">
      <p className="Strategy_Title">{strategy?.title}</p>
      <div className="Strategy_Cards feature">
      {featureList?.map((item) => (
        <div className="Strategy_Card" key={item.id}>
          <div className="Strategy_Card_Title">
            <div className="Strategy_Card_Title_Number">{item.item_number}</div>
            <div>{item.title}</div>
          </div>
          <div>
            <img
              src={item.image_url}
              alt={item.title}
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
          <div className="Strategy_Card_Content_One">{item.paragraph_1}</div>
          <div className="Strategy_Card_Content_Two">{item.paragraph_2}</div>
        </div>
      ))}
    </div>
    </div>
  );
}
