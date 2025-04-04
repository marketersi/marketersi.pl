import React from "react";
import { useSelector } from "react-redux";

const Executive = () => {
  const { screenData } = useSelector((state) => state.ux);
  const executive = screenData.executive || {};

  return (
    <section>
      <div id="highResult">
<<<<<<< HEAD
        <h2>Makieta UX
          <br/>Klucz do Twojego Sukcesu</h2>
=======
        <h2>{executive.title}</h2>
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
        <div className="row">
          <div className="paraResult">
            <p>{executive.paragraph_1}</p>
            <p>{executive.paragraph_2}</p>
            <p>{executive.paragraph_3}</p>
            <p>{executive.paragraph_4}</p>
          </div>
<<<<<<< HEAD
          {/* <div>
=======
          <div>
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
            {executive.video_url && (
              <video muted={true} loop={true} autoPlay className="desktopVideo">
                <source src={executive.video_url} type="video/mp4" />
              </video>
            )}
<<<<<<< HEAD
          </div> */}
=======
          </div>
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
        </div>
      </div>
    </section>
  );
};

export default Executive;
<<<<<<< HEAD
=======


>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
