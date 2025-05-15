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
  const [startIndex, setStartIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const getReviewsPerPage = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 576 ? 4 : 6;
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
    setStartIndex((prevIndex) => (prevIndex + reviewsPerPage) % (Reference?.ReferenceCard || ReferenceCardArray).length);
  };

  const handleShowAll = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
    setStartIndex(0);
  };

  const displayedReviews = showAll
    ? Reference?.ReferenceCard || ReferenceCardArray
    : (Reference?.ReferenceCard || ReferenceCardArray).slice(
        startIndex,
        startIndex + reviewsPerPage
      );

  const totalReviews = Reference?.ReferenceCard?.length || ReferenceCardArray.length;
  const shouldShowNextButton = !showAll && totalReviews > reviewsPerPage;
  const shouldShowShowAllButton = !showAll && totalReviews > reviewsPerPage;
  const shouldShowShowLessButton = showAll && totalReviews > reviewsPerPage;

  return (
    <>
      <div className={style.google}>
        <div className={style.opinionContainer}>
          <div className={style.opinionContent}>
            <h2>Budujemy relacje na lata.</h2>
            <h4>
              Sprawdź, co mówią <br />o nas firmy, które <br />
              nam zaufały.
            </h4>
          </div>
          <Row>
            {Reference?.referenceImage?.map((e, i) => (
              <Col xs={6} sm={4} key={i}>
                <div className={style.tesco}>
                  <img src={e.image} alt={e.name} />
                  <h4>{e.name}</h4>
                  <p>{e.year}</p>
                </div>
              </Col>
            ))}
          </Row>

          <div className={style.referenceCardSec}>
            <Row className={style.rowTransition}>
              {displayedReviews.map((e, i) => (
                <Col xs={6} sm={4} key={i}>
                  <ReferenceCard {...e} />
                </Col>
              ))}
            </Row>

            <div className={style.buttonContainer}>
              {shouldShowShowAllButton && (
                <div onClick={handleShowAll} className={style.showAllbtn}>
                  Pokaz wszystkie
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
                  </div>
                </div>
              )}

              {shouldShowNextButton && !showAll && (
                <div onClick={handleNext} className={style.showAllbtn}>
                  Następne opinie
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
                  </div>
                </div>
              )}

              {shouldShowShowLessButton && (
                <div onClick={handleShowLess} className={style.showAllbtn}>
                  Pokaż mniej
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
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}