import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Question14 = () => {
  const { isLoading, screenData } = useSelector((state) => state.examination);
  const { summary } = screenData?.surveyQuestions || {};

  return (
    <>
      <div className="question_14">
        <h2>{summary?.title}</h2>
        <p>{summary?.description}</p>

        <h6>{summary?.info_1} </h6>
        <h6>{summary?.info_2} </h6>
      </div>
      <div className="marketing_book">
        <Row>
          <Col lg={5}>
            <img src={summary?.image} alt="" />
          </Col>
          <Col lg={7}>
            <h3>{summary?.image_description}</h3>
            <div>
              <div className="zh_next_btn_container">
                <motion.button
                  className="zh_next_btn"
                  whileHover={{ translateY: 5 }}
                >
                  {summary?.buttonText_1}
                </motion.button>
                <Link href="/">
                  <motion.button
                    className="zh_preview_btn"
                    whileHover={{ translateY: 5 }}
                  >
                    {summary?.buttonText_2}
                  </motion.button>
                </Link>
              </div>
              <div className="zh_next_btn_container"></div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Question14;
