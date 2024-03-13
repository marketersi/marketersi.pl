import React from "react";
import { useSelector } from "react-redux";

const Counter = () => {
  const { isLoading, screenData } = useSelector((state) => state.ux);
  const CounterData = screenData.CounterData || [];

  console.log("screenData from counter", CounterData);
  return (
    <>
      <section>
        <div id="numbers">
          {CounterData.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt="" />
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Counter;
