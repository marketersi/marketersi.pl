"use client";
import React, { useEffect } from "react";
import "./contact.css";
import ReactPlayer from "react-player";
import { Col, Row, Container, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_CONTACT_SCREEN_DATA } from "@/redux/kontakt/contactActions";
import Card from "@/components/organisms/contact/Card";
import ContactForm from "@/components/organisms/contact/Form";
import ContactMap from "@/components/organisms/contact/Map";
import Loader from "@/components/organisms/animation/Loader";
import { useRouter } from "next/navigation";

const ContactScreen = () => {
  const { isLoading, screenData, contactUsResponse, isContactUsLoading } =
    useSelector((state) => state.contact);
  const { project, contact_us, feedback } = screenData || {};
  const modifiedManual = contact_us?.manual.split(" ");

  const reversedProject = project?.slice().reverse();

  const brandImagesArray = [
    contact_us?.first_image,
    contact_us?.second_image,
    contact_us?.third_image,
    contact_us?.fourth_image,
  ];

  const dispatch = useDispatch();
  const router = useRouter();

  console.log("post response", contactUsResponse);

  if (screenData) {
    console.log("contact screen data from UI => ", project);
  }

  useEffect(() => {
    dispatch({ type: FETCH_CONTACT_SCREEN_DATA });
  }, [dispatch]);

  useEffect(() => {
    if (contactUsResponse?.status) {
      router.push("/dziekujemy");
    }
  }, [contactUsResponse?.status]);

  return (
    <>
      {/* {isContactUsLoading || isLoading ? (
        <Loader />
      ) : ( */}
        <section>
          {/* top section */}
          <div className="first_form_container">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 Form_content_section">
                  <ReactPlayer
                    url="/assets/images/contact/Serce2_lpslwb.webm"
                    playing={true}
                    loop={true}
                    muted={true}
                    style={{ aspectRatio: 235 / 235 }}
                    className="bg_video"
                  />
                  <p className="first_sect_p">{contact_us?.sub_title}</p>
                  <h1 className="first_heading_txt">
                    {contact_us?.main_title}
                  </h1>
                </div>
                <div className="col-lg-6 form_section">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>

          {/* <!-- contact card section --> */}
          <div className="card_section">
            <Container>
              <Row>
                {project &&
                  reversedProject?.map((item, index) => {
                    return (
                      <Col key={index}>
                        <Card {...item} />
                      </Col>
                    );
                  })}
              </Row>
            </Container>
          </div>

          {/* <!-- Brand Image Section --> */}
          <div className="section_logo">
            <div className="container Image_logos">
              {brandImagesArray?.map((item, index) => {
                return (
                  <div className="logo" key={index}>
                    <Image src={item} alt="" width="220px" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* <!-- Map & Review section --> */}
          <div className="container_fluid_plus">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-sm-12">
                  <p className="solid_bolds_text text-center">
                    <span className="solid_bold">
                      {modifiedManual && modifiedManual[0]}
                      {modifiedManual && modifiedManual[1]}
                    </span>
                    <span className="solid_tital">
                      {modifiedManual && modifiedManual[2]}
                    </span>
                  </p>
                  <div className="solid_bolld_botm_txt text-center">
                    {contact_us?.bellow_to_manual}
                  </div>

                  <div className="icons">
                    <p className="left_icin_txt">
                      {/* Od 2021 działamy <br /> w 100% zdalnie. */}
                      {contact_us?.social_media_content}
                    </p>
                    <Image
                      src="/assets/images/contact/1 614011205.avif"
                      alt=""
                    />
                  </div>
                  <div className="botum">
                    <h3> {contact_us?.social_media_title} </h3>
                  </div>
                  <div className="botum_contents">
                    <div className="orders_number">
                      {" "}
                      <span style={{ fontWeight: "bold" }}>VAT-ID: </span>
                      {contact_us?.vat_id} <br />
                      <span style={{ fontWeight: "bold" }}>REGON: </span>
                      {contact_us?.regon}
                    </div>
                    <div className="orders_number">
                      <span style={{ fontWeight: "bold" }}>Kawka: </span>
                      {contact_us?.kawka} <br />
                      <span style={{ fontWeight: "bold" }}>CO-work: </span>
                      {contact_us?.co_work}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <div className="right_box_bottom">
                    <ContactMap />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      {/* )} */}
    </>
  );
};

export default ContactScreen;
