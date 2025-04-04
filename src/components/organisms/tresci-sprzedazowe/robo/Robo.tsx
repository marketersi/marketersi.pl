<<<<<<< HEAD
import React from 'react';
import '../tresci.css';
import { useSelector } from 'react-redux';
=======
import React from "react";
import "../tresci.css";
import { useSelector } from "react-redux";
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936

const Robo = () => {
  const { isLoading, screenData } = useSelector((state) => state.sales);
  const { projects } = screenData || {};
  const { projectSection6 } = projects || {};

  return (
    <>
      <section className="thematic-section">
<<<<<<< HEAD
        {/* <img
          src="https://cdn.owocni.pl/img/single-copywriter/luk.png"
          className="projects-bow-2"
          alt=""
        /> */}

        <div className="container custom-container2 cutom-margibgs">
=======
        <img
          src="https://cdn.owocni.pl/img/single-copywriter/luk.png"
          className="projects-bow-2"
          alt=""
        />

        <div className="container custom-container2">
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="names-client-name copywriter-black copywriter-green-underline copywriter-cname">
                {projectSection6?.underlined_label}
              </div>

<<<<<<< HEAD
              <div className="names-client-text copywriter-client-desc-margin copywriter-custom-margin ">
=======
              <div className="names-client-desc copywriter-client-desc-margin copywriter-custom-margin">
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
                {projectSection6?.title_1}
              </div>
            </div>

            <div className="col-md-12">
<<<<<<< HEAD
              <p className="theme-desc copywriter-custom-mright mobileLefttext">
=======
              <p className="theme-desc copywriter-custom-mright">
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
                {projectSection6?.description}
              </p>
            </div>
          </div>
        </div>

        <div className="copywriter-text-center copywriter-standard-mt-40 copywriter-rwd-mtb-40">
          <img
            src={projectSection6?.bannar_image_1}
            title="Teksty na stronę zrealizowane przez agencję"
            alt="Agencja reklamowa prezentuje wyniki swojej pracy"
<<<<<<< HEAD
            className="lingu"
          />
        </div>

        {/* <div className="copywriter-bg-16">
=======
          />
        </div>

        <div className="copywriter-bg-16">
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
          <img
            className="copywriter-seo-img-dnone"
            src={projectSection6?.bannar_image_2}
            title="Przygotowane przez Owocnych slogany reklamowe"
            alt="Reklama dla klienta agencji"
          />

          <div className="copywriter-inside-img-text">
            {projectSection6?.bannar_image_2_title}
          </div>

          <img
            className="copywriter-roboty-img-810"
            src={projectSection6?.bannar_image_2}
            title="Przygotowane przez Owocnych slogany reklamowe"
            alt="Reklama dla klienta agencji"
          />
<<<<<<< HEAD
        </div> */}

        <div className="container custom-container2 copywriter-standard-mt-80">
          <div className="row">
            <div className="col-md-12 copywriter-standard-mb-m100 new-mb p-0">
              <div className="copywriter-custom-text-turbokids-1">
                {/* {projectSection6?.quote_1} */}
                {/* <b>Zszywanki, które cieszą</b><br/>wyjątkowe kolekcje dla wyjątkowych brzdąców. */}
                <span className="turbokids-text-1">Zszywanki, które cieszą</span>
                <br />
                <span className="turbokids-text-2">Wyjątkowe kolekcje dla wyjątkowych brzdąców.
                </span>
              </div>
              {/* <div className="copywriter-custom-subtext-turbokids-1">
                {projectSection6?.quote_1_desc} fsdsd
              </div> */}
=======
        </div>

        <div className="container custom-container2 copywriter-standard-mt-80">
          <div className="row">
            <div className="col-md-12 copywriter-standard-mb-m100 new-mb">
              <div className="copywriter-custom-text-turbokids-1 pl-20">
                {projectSection6?.quote_1}
              </div>
              <div className="copywriter-custom-subtext-turbokids-1 pl-20">
                {projectSection6?.quote_1_desc}
              </div>
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* <div className="copywriter-text-center copywriter-standard-mb-40 copywriter-rwd-mtb-40">
=======
        <div className="copywriter-text-center copywriter-standard-mb-40 copywriter-rwd-mtb-40">
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
          <img
            style={{ margin: "100px 0 0" }}
            src={projectSection6?.quote_1_image}
            title="Copywriting cena zrealizowanych tekstów"
            alt="Przykład tekstów, które przygotowali copywriterzy agencji"
          />
<<<<<<< HEAD
        </div> */}

        


        
        {/* 
=======
        </div>

        <div className="container custom-container2 copywriter-after-img-1">
          <div className="row">
            <div className="col-md-12">
              <div className="copywriter-custom-text-turbokids-1 copywriter-text-left pr-20">
                {projectSection6?.quote_2}
              </div>
              <div className="copywriter-custom-subtext-turbokids-1 copywriter-text-left pr-20">
                {projectSection6?.quote_2_desc}
              </div>

              <div className="copywriter-text-center roboafter-rwd">
                <img
                  src={projectSection6?.quote_2_image}
                  title="Przykład w jaki sposób Owocni realizują usługi copywriterskie"
                  alt="Teksty reklamowe dla klienta Owocnych"
                />
              </div>
            </div>
          </div>
        </div>

>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
        <img
          src="https://cdn.owocni.pl/img/single-copywriter/luk.png"
          alt=""
          className="projects-rotate-bow projects-bow-1"
<<<<<<< HEAD
        /> */}
=======
        />
>>>>>>> 72f0e3ac1cb034617764abae4f56582be4a3e936
      </section>
    </>
  );
};

export default Robo;
