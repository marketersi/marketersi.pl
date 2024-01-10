"use client";
import React from "react";
import "./contact.css";
import ReactPlayer from "react-player";

const page = () => {
  return (
    <section>
      <div className="first_form_container">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 Form_content_section">
              <ReactPlayer
                url="/assets/images/contact/Serce2_lpslwb.webm"
                playing={true}
                loop={true}
                // width="100%"
                // height="auto"
                style={{ aspectRatio: 235 / 235 }}
                className="bg_video"
              />
              {/* <video
                playsinline=""
                autoplay=""
                loop=""
                className="bg_video"
                poster="image/Serce2_lpslwb.webm"
                height="235"
                width="235"
                src="/assets/images/contact/Serce2_lpslwb.webm"
                style={{ aspectRatio: 235 / 235 }}
              ></video> */}
              <p className="first_sect_p">Razem jesteśmy Owocni.</p>
              <h1 className="first_heading_txt">
                Stwórzmy <br /> razem coś <br /> fajnego!
              </h1>
            </div>
            <div className="col-lg-6 form_section">
              <form action="" className="form_sect">
                <p className="form_head_txt text-center">
                  Napisz, jak możemy pomóc?
                </p>
                <p className="form_mail_content text-center">
                  "studio@owocni.pl
                </p>
                <textarea
                  name="message"
                  placeholder="Wiadomość"
                  className="form_text_area"
                ></textarea>
                <div className=" small_forms d-flex gap-1">
                  <input
                    placeholder="Imię"
                    className=" form_inputs"
                    name="name"
                  />
                  <input
                    placeholder="Mail"
                    className="form_inputs"
                    type="email"
                    name="mail"
                  />
                  <input
                    placeholder="Telefon"
                    className="form_inputs"
                    pattern="\d{7,15}"
                    name="phone"
                  />
                </div>

                <div className="btn_img">
                  <div className="btn">
                    <button>csds</button>
                  </div>
                  <div className="sticker_img">
                    <svg
                      width="66"
                      height="80"
                      viewBox="0 0 66 80"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M33 67.5C33 67.5 55 56.5 55 40V18L33 12.5L11 18V40C11 56.5 33 67.5 33 67.5Z"
                        fill="#E0E0E0"
                        stroke="#E0E0E0"
                        stroke-width="5.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M48.7597 32.0811L46.2548 29.5762C45.9114 29.2325 45.4937 29.0605 45.0026 29.0605C44.5112 29.0605 44.0935 29.2325 43.75 29.5762L31.6672 41.6772L26.2521 36.2437C25.9083 35.8998 25.4908 35.7281 24.9998 35.7281C24.5085 35.7281 24.091 35.8998 23.7472 36.2437L21.2423 38.7486C20.8984 39.0924 20.7266 39.51 20.7266 40.0013C20.7266 40.4921 20.8984 40.9101 21.2423 41.2538L27.9097 47.9211L30.4148 50.426C30.7584 50.77 31.176 50.9417 31.6672 50.9417C32.1582 50.9417 32.5758 50.7696 32.9197 50.426L35.4247 47.9211L48.7597 34.5862C49.1033 34.2423 49.2754 33.8248 49.2754 33.3335C49.2757 32.8425 49.1033 32.4249 48.7597 32.0811Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- section_second --> */}
      <div className="card_section">
        <div className="card">
          <div className="tital">Nowe projekty</div>
          <div className="name_img">
            <div className="img">
              <img src="/assets/images/contact/Gosia.avif" alt="" />
            </div>
          </div>
          <div className="mail_id">
            <a href="#">studio@owocni.pl</a>
          </div>
          <a href="#" id="card_btn_active" className="card_btn">
            Zadzwoń <br /> 570-704-470
          </a>
        </div>
        <div className="card">
          <div className="tital">Nowe projekty</div>
          <div className="name_img">
            <div className="img">
              <img src="/assets/images/contact/Marta.avif" alt="" />
            </div>
            <div className="name">
              Małgosia <br /> Zielińska
            </div>
          </div>
          <div className="mail_id">
            <a href="#">studio@owocni.pl</a>
            <p className="absolute-left">
              Feel free to call or mail in English :).
            </p>
            <img
              src="/assets/images/contact/English.avif"
              className="absolute-left-img"
              alt=""
            />
          </div>
          <a href="#" className="card_btn">
            Zadzwoń <br /> 660-970-980
          </a>
        </div>
        <div className="card">
          <div className="tital">Obsługa projektu</div>
          <div className="name_img">
            <div className="img">
              <img src="/assets/images/contact/Kinga.avif" alt="" />
            </div>
            <div className="name">
              Małgosia <br /> Zielińska
            </div>
          </div>
          <div className="mail_id">
            <a href="#">obsługa@owocni.pl</a>
          </div>
          <a href="#" className="card_btn">
            Zadzwoń <br /> 535-009-444
          </a>
        </div>
      </div>

      {/* <!-- section three --> */}
      <div className="section_logo">
        <div className="container img_logos">
          <div className="logo">
            <img
              src="/assets/images/contact/20latDzialalnosciPLbiel.svg"
              alt=""
              width="200px"
            />
          </div>
          <div className="logo">
            <img
              src="/assets/images/contact/Top10Poland.avif"
              alt=""
              width="250px"
            />
          </div>
          <div className="logo">
            <img
              src="/assets/images/contact/Made-in-poland.avif"
              alt=""
              width="250px"
            />
          </div>
          <div className="logo">
            <img
              src="/assets/images/contact/EU-logo.avif"
              alt=""
              width="250px"
            />
          </div>
        </div>
      </div>

      {/* <!-- section four --> */}
      <div className="container_fluid_plus">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <p className="solid_bolds_text text-center">
                <span className="solid_bold">100%</span>
                <span className="solid_tital">zdalnie</span>
              </p>
              <div className="solid_bolld_botm_txt text-center">
                czyli zawsze pod ręką!
              </div>

              <div className="icons">
                <p className="left_icin_txt">
                  Od 2021 <br /> działamy <br /> w 100% zdalnie.
                </p>
                <img src="/assets/images/contact/1 614011205.avif" alt="" />
              </div>
              <div className="botum">
                <h3> OWOCNI.PL - Mariusz Słowik </h3>
              </div>
              <div className="botum_contents">
                <div className="orders_number">
                  {" "}
                  <span style={{ fontWeight: "bold" }}>VAT-ID:</span>
                  PL9581414161 <br />
                  <span style={{ fontWeight: "bold" }}>REGON:</span>220204880
                </div>
                <div className="orders_number">
                  <span style={{ fontWeight: "bold" }}>Kawka:</span>Miętowa 66,
                  81-589 Gdynia <br />
                  <span style={{ fontWeight: "bold" }}>CO-work: </span>
                  Konstruktorska 11, 02-673 Warszawa
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="right_box_bottom">
                <img src="/assets/images/contact/mapakontakt.avif" alt="" />

                <div className="map_content">
                  <p>Województwo</p>
                  <h3>podkarpackie</h3>
                  <h4>
                    Tak można pracować! Wielka różnica na plus od konkurencji.
                  </h4>
                  <p>Tomasz Kopacz, MoneyWell, Rzeszów</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
