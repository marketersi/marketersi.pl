import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { saveAs } from 'file-saver';

const Question14 = () => {
  const { screenData } = useSelector((state) => state.examination);
  const { summary } = screenData?.surveyQuestions || {};

  const handleDownloadPDF = async () => {
    const pdfUrl =
      'https://marketersi.cdn.prismic.io/marketersi/ZfgO6smUzjad_UM9_marketersi.pdf';
    if (pdfUrl) {
      try {
        const response = await fetch(pdfUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const blob = await response.blob();
        saveAs(blob, 'brochure.pdf');
      } catch (error) {
        console.error('Error downloading PDF:', error);
      }
    }
  };

  const [showGif, setShowGif] = useState(false);

  useEffect(() => {
    const showGifTimer = setTimeout(() => {
      setShowGif(true);
    }, 2000);

    const hideGifTimer = setTimeout(() => {
      setShowGif(false);
    }, 4000);

    return () => {
      clearTimeout(showGifTimer);
      clearTimeout(hideGifTimer);
    };
  }, []);

  return (
    <>
      {/* {showGif && <img src="/assets/congrats.gif" className="congrats_gif" />} */}
      {showGif && <div className='congrats_gif'><img src="/assets/congrats.gif" /></div>}

      <div className="question_14">
        <h2>Gotowe!</h2>
        <p>Teraz czas na ruch po naszej stronie.<br/>
          Sprawdzimy Twoją sytuację<br/>
          i wrócimy z konkretem.<br/>
          </p>

        <h6 className='TitleIconH6'>
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 0C2.91594 0 0 2.91594 0 6.5C0 10.0841 2.91594 13 6.5 13C10.0841 13 13 10.0841 13 6.5C13 2.91594 10.0841 0 6.5 0ZM9.88281 4.32156L5.68281 9.32156C5.63674 9.37644 5.57941 9.42077 5.51471 9.45156C5.45001 9.48234 5.37945 9.49886 5.30781 9.5H5.29938C5.22929 9.49997 5.16 9.48522 5.09599 9.45668C5.03198 9.42815 4.97468 9.38648 4.92781 9.33438L3.12781 7.33438C3.0821 7.28589 3.04654 7.22876 3.02322 7.16633C2.9999 7.10391 2.9893 7.03745 2.99203 6.97087C2.99477 6.90429 3.01078 6.83892 3.03914 6.77862C3.06749 6.71831 3.10761 6.66429 3.15715 6.61971C3.20668 6.57514 3.26462 6.54091 3.32757 6.51905C3.39052 6.49719 3.45721 6.48813 3.52371 6.4924C3.59021 6.49668 3.65518 6.51421 3.71481 6.54396C3.77444 6.5737 3.82752 6.61507 3.87094 6.66562L5.28625 8.23812L9.11719 3.67844C9.20312 3.57909 9.3247 3.51754 9.45564 3.50711C9.58658 3.49668 9.71637 3.53819 9.81695 3.62268C9.91753 3.70716 9.98083 3.82784 9.99315 3.95862C10.0055 4.0894 9.96584 4.21977 9.88281 4.32156Z" fill="green"/>
          </svg>


          <span>Jeśli możemy pomóc – umówimy Cię z ekspertem, który wskaże najlepszą drogę</span>
        </h6>

        <h6 className='TitleIconH6'>
          <svg
            id="Layer_1"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="48px"
            height="48px"
          >
            <g id="Layer_3">
              <path
                d="M24,0C10.745,0,0,10.745,0,24s10.745,24,24,24s24-10.745,24-24S37.255,0,24,0z 
                  M35.997,33.877l-2.122,2.12L24,26.123l-9.874,9.874l-2.123-2.12l9.876-9.876l-9.876-9.876
                  l2.12-2.122L24,21.88l9.878-9.877l2.119,2.122l-9.875,9.876L35.997,33.877z"
                fill="red"
              />
            </g>
          </svg>
          <span>Jeśli okaże się, że to nie to – dostaniesz od nas wartościowe wskazówki, które możesz wdrożyć samodzielnie.</span>
        </h6>

      </div>
      <div className="marketing_book">
        <Row>
          <Col lg={6}>
            <img src={summary?.image} alt="" />
          </Col>
          {/* <Col lg={6}>
            <h3>{summary?.image_description}</h3>
            <div>
              <div className="zh_next_btn_container">
                <motion.button
                  className="zh_next_btn"
                  whileHover={{ translateY: 5 }}
                  onClick={handleDownloadPDF}
                >
                  {summary?.buttonText_1}
                </motion.button>

                <Link href="/Kim-jestesmy">
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
          </Col> */}
        </Row>
      </div>
    </>
  );
};

export default Question14;
