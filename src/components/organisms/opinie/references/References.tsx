import React, { useState } from "react";
import style from "../opinie.module.css";
import { Row, Col, Button } from "react-bootstrap";
import ReferenceCard from "./ReferenceCard";
import { useSelector } from "react-redux";

const ReferenceCardArray = [
  {
    id: 3,
    customer_name: "Mariusz Czerwiński,",
    customer_designation: "Tema, Lublin",
    rating_no: "4.78",
    review:
      "Nasze wcześniejsze logo trochę straszyło, obecne jest świetne! Mamy dużo więcej klientów.",
    created_at: "2024-02-22T11:37:29.000000Z",
    updated_at: "2024-02-22T11:37:29.000000Z",
  },
  {
    id: 2,
    customer_name: "Maciej Ligus",
    customer_designation: "Eximo Project, Bydgoszcz",
    rating_no: "4",
    review:
      "Nie ma dnia, by ktoś nie pochwalił nas za nazwę, logo czy stronę. Genialna robota.",
    created_at: "2024-02-22T11:32:53.000000Z",
    updated_at: "2024-02-22T11:36:59.000000Z",
  },
  {
    id: 1,
    customer_name: "Krzysztof Marcinkiewicz",
    customer_designation: "12 Stopni, Opole",
    rating_no: "5",
    review: "Zorganizowane jak w zegarku. Pełen profesjonalizm. Polecam.",
    created_at: "2024-02-22T11:32:39.000000Z",
    updated_at: "2024-02-22T11:32:39.000000Z",
  },
  {
    id: 3,
    customer_name: "Mariusz Czerwiński,",
    customer_designation: "Tema, Lublin",
    rating_no: "4.78",
    review:
      "Nasze wcześniejsze logo trochę straszyło, obecne jest świetne! Mamy dużo więcej klientów.",
    created_at: "2024-02-22T11:37:29.000000Z",
    updated_at: "2024-02-22T11:37:29.000000Z",
  },
  {
    id: 2,
    customer_name: "Maciej Ligus",
    customer_designation: "Eximo Project, Bydgoszcz",
    rating_no: "4",
    review:
      "Nie ma dnia, by ktoś nie pochwalił nas za nazwę, logo czy stronę. Genialna robota.",
    created_at: "2024-02-22T11:32:53.000000Z",
    updated_at: "2024-02-22T11:36:59.000000Z",
  },
  {
    id: 1,
    customer_name: "Krzysztof Marcinkiewicz",
    customer_designation: "12 Stopni, Opole",
    rating_no: "5",
    review: "Zorganizowane jak w zegarku. Pełen profesjonalizm. Polecam.",
    created_at: "2024-02-22T11:32:39.000000Z",
    updated_at: "2024-02-22T11:32:39.000000Z",
  },
  {
    id: 2,
    customer_name: "Maciej Ligus",
    customer_designation: "Eximo Project, Bydgoszcz",
    rating_no: "4",
    review:
      "Nie ma dnia, by ktoś nie pochwalił nas za nazwę, logo czy stronę. Genialna robota.",
    created_at: "2024-02-22T11:32:53.000000Z",
    updated_at: "2024-02-22T11:36:59.000000Z",
  },
  {
    id: 3,
    customer_name: "Mariusz Czerwiński,",
    customer_designation: "Tema, Lublin",
    rating_no: "4.78",
    review:
      "Nasze wcześniejsze logo trochę straszyło, obecne jest świetne! Mamy dużo więcej klientów.",
    created_at: "2024-02-22T11:37:29.000000Z",
    updated_at: "2024-02-22T11:37:29.000000Z",
  },
  {
    id: 2,
    customer_name: "Maciej Ligus",
    customer_designation: "Eximo Project, Bydgoszcz",
    rating_no: "4",
    review:
      "Nie ma dnia, by ktoś nie pochwalił nas za nazwę, logo czy stronę. Genialna robota.",
    created_at: "2024-02-22T11:32:53.000000Z",
    updated_at: "2024-02-22T11:36:59.000000Z",
  },
  {
    id: 1,
    customer_name: "Krzysztof Marcinkiewicz",
    customer_designation: "12 Stopni, Opole",
    rating_no: "5",
    review: "Zorganizowane jak w zegarku. Pełen profesjonalizm. Polecam.",
    created_at: "2024-02-22T11:32:39.000000Z",
    updated_at: "2024-02-22T11:32:39.000000Z",
  },
  {
    id: 3,
    customer_name: "Mariusz Czerwiński,",
    customer_designation: "Tema, Lublin",
    rating_no: "4.78",
    review:
      "Nasze wcześniejsze logo trochę straszyło, obecne jest świetne! Mamy dużo więcej klientów.",
    created_at: "2024-02-22T11:37:29.000000Z",
    updated_at: "2024-02-22T11:37:29.000000Z",
  },
  {
    id: 2,
    customer_name: "Maciej Ligus",
    customer_designation: "Eximo Project, Bydgoszcz",
    rating_no: "4",
    review:
      "Nie ma dnia, by ktoś nie pochwalił nas za nazwę, logo czy stronę. Genialna robota.",
    created_at: "2024-02-22T11:32:53.000000Z",
    updated_at: "2024-02-22T11:36:59.000000Z",
  },
  {
    id: 1,
    customer_name: "Krzysztof Marcinkiewicz",
    customer_designation: "12 Stopni, Opole",
    rating_no: "5",
    review: "Zorganizowane jak w zegarku. Pełen profesjonalizm. Polecam.",
    created_at: "2024-02-22T11:32:39.000000Z",
    updated_at: "2024-02-22T11:32:39.000000Z",
  },
  {
    id: 2,
    customer_name: "Maciej Ligus",
    customer_designation: "Eximo Project, Bydgoszcz",
    rating_no: "4",
    review:
      "Nie ma dnia, by ktoś nie pochwalił nas za nazwę, logo czy stronę. Genialna robota.",
    created_at: "2024-02-22T11:32:53.000000Z",
    updated_at: "2024-02-22T11:36:59.000000Z",
  },
];

export default function References() {
  const { screenData } = useSelector((state) => state.opinion);
  const Reference = screenData.Reference || {};
  // const ReferenceCard = screenData.Reference. || [];
  console.log(ReferenceCard, "23456789======>");
  const [startIndex, setStartIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  // const reviewsPerPage = 6;
  const getReviewsPerPage = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 576 ? 4 : 6; // 4 for mobile (less than 576px), 6 for others
    }
    return 6;
  };
  const [reviewsPerPage, setReviewsPerPage] = useState(getReviewsPerPage());
  React.useEffect(() => {
    const handleResize = () => {
      setReviewsPerPage(getReviewsPerPage());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (startIndex < ReferenceCard.length / reviewsPerPage) {
      setStartIndex(startIndex + reviewsPerPage);
    } else {
      setStartIndex(0);
    }
  };

  const handleShowAll = () => {
    setStartIndex(0);
    setShowAll(!showAll);
  };

  return (
    <>
      <div className={style.google}>
        <div className={style.opinionContainer}>
          <div className={style.opinionContent}>
            {/* <h3>{Reference?.heading}</h3> */}
            {/* <h2>{Reference?.title}</h2> */}
            <h2>Budujemy relacje na lata.</h2>
            {/* <h4>{Reference?.subtitle}</h4> */}
            <h4>
              Sprawdź, co mówią <br />o nas firmy, które <br />
              nam zaufały.
            </h4>
          </div>
          <Row>
            {Reference?.referenceImage?.map((e, i) => {
              return (
                <Col xs={6} sm={4} key={i}>
                  <div className={style.tesco}>
                    <img src={e.image} alt="" />
                    <h4>{e.name}</h4>
                    <p>{e.year}</p>
                  </div>
                </Col>
              );
            })}
          </Row>

          <div className={style.referenceCardSec}>
            <Row className={style.rowTransition}>
              {Reference?.ReferenceCard?.slice(
                startIndex,
                showAll
                  ? Reference?.ReferenceCard?.length
                  : startIndex + reviewsPerPage
              ).map((e, i) => {
                return (
                  <Col xs={6} sm={4} key={i}>
                    <ReferenceCard {...e} />
                  </Col>
                );
              })}
            </Row>

            {!showAll && (
              <div className={style.buttonContainer}>
                <div onClick={handleNext} className={style.showAllbtn}>
                  {showAll ? null : "Pokaz wszystkie"}
                  <div className={style.googlePlay}>
                    {/* <img src="https://www.owocni.pl/assets/arrow.svg" alt="" /> */}
                    <svg
                      data-name="Layer 1"
                      id="Layer_1"
                      viewBox="0 0 64 64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title />
                      <path
                        d="M51.66,32,19,0,12.66,6.62,38.91,32,12.66,57.38,19,64Z"
                        data-name="&lt;Compound Path&gt;"
                        id="_Compound_Path_"
                      />
                    </svg>
                  </div>
                </div>

                <div onClick={handleNext} className={style.showAllbtn}>
                  {showAll ? null : "Następne opinie"}
                  <div className={style.googlePlay}>
                    <svg
                      data-name="Layer 1"
                      id="Layer_1"
                      viewBox="0 0 64 64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title />
                      <path
                        d="M51.66,32,19,0,12.66,6.62,38.91,32,12.66,57.38,19,64Z"
                        data-name="&lt;Compound Path&gt;"
                        id="_Compound_Path_"
                      />
                    </svg>
                    {/* <span className="ArrowButton_Arrow">&gt;</span> */}
                  </div>
                </div>

                {/* <div className="ArrowButton" onClick={handleNext}>
                <span className="ArrowButton_Arrow">&gt;</span>
                </div> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
