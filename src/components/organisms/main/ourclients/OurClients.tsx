// "use client";
// import Image from "next/image";
// import { useContext } from "react";
// import Marquee from "react-fast-marquee";
// import ReactPlayer from "react-player/file";
// import { ClientCarousel, CarouselContext } from "./ClientCarousel";
// // import { Variants, motion } from "framer-motion";
// import { useSelector } from "react-redux";
// import Stars from "@/components/molecules/Ratings";
// import "./our-clients.css";
// import Link from "next/link";

// export default function OurClients() {
//   const { isLoading, screenData } = useSelector((state) => state.home);
//   const { ClientReviews } = screenData || {};
//   const { SliderImages, RatingCard, ClientFeedback, FeedbackSummary } =
//     ClientReviews || {};
//   const { row1, row2, row3, row4 } = SliderImages || {};

//   // const slideAnimationLeft: Variants = {
//   //   offscreen: {
//   //     x: -100,
//   //     opacity: 0,
//   //   },
//   //   onscreen: {
//   //     x: 0,
//   //     opacity: 1,
//   //     transition: {
//   //       type: "ease",
//   //       bounce: 0.4,
//   //       duration: 2,
//   //     },
//   //   },
//   // };

//   return (
//     <>
//     <div className="overflow-div">
//     <section className="WidthContent1">
//       {/* <h2 className="ClinetsHead bottommorespace">Jak wygląda współpraca z Marketersi?</h2>
//       <p className="ClinetsPara">Zapytaliśmy setkę naszych klientów i oto, co usłyszeliśmy:</p> */}
//     <div className="OurClients WidthContent mobile-mt">
//       <div className="OurClients_Marquee full mobile">
//         <Marquee autoFill speed={175}>
//           {row1?.map((e, i) => {
//             return (
//               <Image
//                 src={e.message}
//                 alt="row 1 image"
//                 width={0}
//                 height={0}
//                 sizes="100vw"
//                 style={{
//                   width: "50%",
//                   height: "50%",
//                   filter: "grayscale(100%)",
//                   opacity: "0.5",
//                 }}
//                 key={i}
//               />
//             );
//           })}
//         </Marquee>
//         <Marquee autoFill speed={100}>
//           {row2?.map((e, i) => {
//             return (
//               <Image
//                 src={e.message}
//                 alt="row 2 image"
//                 width={0}
//                 height={0}
//                 sizes="100vw"
//                 style={{
//                   width: "50%",
//                   height: "50%",
//                   filter: "grayscale(100%)",
//                   opacity: "0.5",
//                 }}
//                 key={i}
//               />
//             );
//           })}
//         </Marquee>
//         <Marquee autoFill speed={100}>
//           {row3?.map((e, i) => {
//             return (
//               <Image
//                 src={e.message}
//                 alt="row 3 image"
//                 width={0}
//                 height={0}
//                 sizes="100vw"
//                 style={{
//                   width: "50%",
//                   height: "50%",
//                   filter: "grayscale(100%)",
//                   opacity: "0.5",
//                 }}
//                 key={i}
//               />
//             );
//           })}
//         </Marquee>
//         <Marquee autoFill speed={150}>
//           {row4?.map((e, i) => {
//             return (
//               <Image
//                 src={e.message}
//                 alt="row 4 image"
//                 width={0}
//                 height={0}
//                 sizes="100vw"
//                 style={{
//                   width: "50%",
//                   height: "50%",
//                   filter: "grayscale(100%)",
//                   opacity: "0.5",
//                 }}
//                 key={i}
//               />
//             );
//           })}
//         </Marquee>
//       </div>
//       <div className="OurClients_Card_Container popout">
//         <div className="OurClients_Card_One">
//           <ClientCarousel slides={ClientFeedback} />
//         </div>
//         <div className="OurClients_Card_Two mb-0">
//           <div>
//             <Image
//               src={RatingCard?.rating_image}
//               alt="OurClientsImage"
//               width={250}
//               height={180}
//               className="rating_image"
//             />
//           </div>
//           <div className="OurClients_Card_Two_Content">
//             {RatingCard?.rating_description}
//           </div>
//         </div>
//       </div>
//       <div className="OurClients_Marquee full desktop">
//         {/* Marquee 1 */}
//         <Marquee autoFill speed={175}>
//           {row1?.map((e, i) => {
//             return (
//               <Image
//                 src={e.message}
//                 alt="row 1 image"
//                 width={0}
//                 height={0}
//                 sizes="100vw"
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   filter: "grayscale(100%)",
//                   opacity: "0.5",
//                 }}
//                 key={i}
//               />
//             );
//           })}
//         </Marquee>
//         {/* Marquee 2 */}
//         <Marquee autoFill speed={100}>
//           {row2?.map((e, i) => {
//             return (
//               <Image
//                 src={e.message}
//                 alt="row 2 image"
//                 width={0}
//                 height={0}
//                 sizes="100vw"
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   filter: "grayscale(100%)",
//                   opacity: "0.5",
//                 }}
//                 key={i}
//               />
//             );
//           })}
//         </Marquee>
//         {/* Marquee 3 */}
//         <Marquee autoFill speed={100}>
//           {row3?.map((e, i) => {
//             return (
//               <Image
//                 src={e.message}
//                 alt="row 3 image"
//                 width={0}
//                 height={0}
//                 sizes="100vw"
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   filter: "grayscale(100%)",
//                   opacity: "0.5",
//                 }}
//                 key={i}
//               />
//             );
//           })}
//         </Marquee>
//         {/* Marquee 4 */}
//         <Marquee autoFill speed={150}>
//           {row4?.map((e, i) => {
//             return (
//               <Image
//                 src={e.message}
//                 alt="row 4 image"
//                 width={0}
//                 height={0}
//                 sizes="100vw"
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   filter: "grayscale(100%)",
//                   opacity: "0.5",
//                 }}
//                 key={i}
//               />
//             );
//           })}
//         </Marquee>
//       </div>
//       {/* to be deleted */}
//       {/* <motion.div
//         initial="offscreen"
//         whileInView="onscreen"
//         variants={slideAnimationLeft}
//         className="cartAnimation"
//       >
//         <img src={RatingCard?.left_animated_image} alt="" />
//       </motion.div> */}
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }

// export const SlideOne = (props) => {
//   const {
//     client_designation,
//     review,
//     client_name,
//     video_url,
//     image_url,
//     rating,
//   } = props;
//   const { handleNext } = useContext(CarouselContext);

//   return (
//     <>
//       {/* Slide 1 */}
//       <div className="OurClients_Slide">
//         <div className="OurClients_Slide_Title mobile_title">{review}</div>
        
//         <div className="OurClients_Slide_Container">
          
//             <div className="OurClints_Slide_Image part">
//             <Image
//               src={image_url}
//               alt="OurClientsImage1"
//               width={400}
//               height={500}
//               className="OurClients_Slide_Img"
//             />
//             </div>
          
//           <div className="OurClients_Slide_Content part">
//             <div className="OurClients_Slide_Media">
            
//               <div className="OurClients_Slide_Media_Video">
//                 {/* <ReactPlayer
//                   url={video_url}
//                   playing
//                   loop
//                   width="60%"
//                   height="auto"
//                   muted={true}
//                   pip={false}
//                   playsinline
//                 /> */}
//                 {/* ajdjasjkd */}
//                 <img className="ourClientImg" src={video_url} alt=""/>
//               </div>
//               <div className="OurClients_Slide_Media_Rating">
//               <div className="OurClients_Slide_Star_Rating">
//                   <Stars rating={rating} />
//                 </div>
//                 <div>
//                   <div className="OurClients_Slide_Star_Reviewer">
//                     {client_name}
//                   </div>
//                   <div className="OurClients_Slide_Star_Company">
//                     {client_designation}
//                   </div>
//                 </div>
                
//               </div>
//             </div>
//             <div className="OurClients_Slide_Title desktop_title">{review}</div>
//             <div className="OurClients_Slide_Button">
//           <div className="OurClients_Slide_Button_Text">Następna</div>
//           <div className="ArrowButton" onClick={handleNext}>
//             <span className="ArrowButton_Arrow">&gt;</span>
//           </div>
//         </div>
//           </div>
          
//         </div>
        
//       </div>
//     </>
//   );
// };

// export const SlideFour = () => {
//   const { isLoading, screenData } = useSelector((state) => state.home);
//   const { ClientReviews } = screenData || {};
//   const { FeedbackSummary } = ClientReviews || {};

//   return (
//     <>
//       <div className="OurClients_Slide_Last">
//         <div className="OurClients_Card_One_Title">
//           {FeedbackSummary?.title}
//         </div>
//         <div className="OurClients_Card_One_Content">
//           {FeedbackSummary?.description}
//         </div>
//         <div className="OurClients_Card_One_Button_Container">
//           <Link className="OurClients_Card_One_Button" href="marketersi-opinie">
//             Poznaj wszystkie recenzje
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };
// ClientCarousel.js
"use client";
import React, { useState, useEffect, createContext, useContext } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import ReactPlayer from "react-player/file";
import { useSelector } from "react-redux";
import Stars from "@/components/molecules/Ratings";
import "./our-clients.css";
import Link from "next/link";

export const CarouselContext = createContext();

export const ClientCarousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Effect to synchronize component state with URL on initial load and popstate
  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state && typeof event.state.slide === 'number') {
        setCurrentSlide(event.state.slide);
      } else {
        // Fallback for initial page load or when going back beyond carousel states
        const urlParams = new URLSearchParams(window.location.search);
        const slideFromUrl = parseInt(urlParams.get('slide'));
        if (!isNaN(slideFromUrl) && slideFromUrl >= 0 && slideFromUrl < slides.length) {
          setCurrentSlide(slideFromUrl);
        } else {
          setCurrentSlide(0);
        }
      }
    };

    window.addEventListener('popstate', handlePopState);

    // Initial check for slide in URL on component mount
    const urlParams = new URLSearchParams(window.location.search);
    const slideFromUrl = parseInt(urlParams.get('slide'));
    if (!isNaN(slideFromUrl) && slideFromUrl >= 0 && slideFromUrl < slides.length) {
      setCurrentSlide(slideFromUrl);
      // If loaded with ?slide=0, clean up the URL without adding to history
      if (slideFromUrl === 0 && window.location.search === '?slide=0') {
        window.history.replaceState({ slide: 0 }, '', window.location.pathname);
      }
    } else {
      // If no slide param or invalid, ensure URL is clean if it happens to be ?slide=0
      if (window.location.search === '?slide=0') {
        window.history.replaceState({ slide: 0 }, '', window.location.pathname);
      }
    }

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [slides.length]); // Depend on slides.length as it defines the bounds

  // Effect to update URL when currentSlide changes (from user interaction)
  useEffect(() => {
    let newUrl;
    if (currentSlide === 0) {
      // If navigating TO slide 0 (from user click), remove the '?slide=0' from the URL
      // This is pushState, so it adds to history, allowing back navigation to previous slide.
      newUrl = window.location.pathname;
    } else {
      // For any other slide, add the '?slide=X' parameter
      newUrl = `${window.location.pathname}?slide=${currentSlide}`;
    }

    // Only push state if the current URL is different from the new one
    // This prevents redundant history entries if a popstate already set the URL
    // or if the URL is already in the desired state.
    if (window.location.href !== `${window.location.origin}${newUrl}`) {
      window.history.pushState({ slide: currentSlide }, '', newUrl);
    }
  }, [currentSlide]); // Only runs when currentSlide changes due to explicit interaction

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides?.[currentSlide];

  if (!currentSlideData) {
    return null;
  }

  return (
    <CarouselContext.Provider value={{ handleNext, handlePrev, currentSlide }}>
      {currentSlide < slides.length - 1 ? (
        <SlideOne {...currentSlideData} />
      ) : (
        <SlideFour />
      )}
    </CarouselContext.Provider>
  );
};

export default function OurClients() {
  const { isLoading, screenData } = useSelector((state) => state.home);
  const { ClientReviews } = screenData || {};
  const { SliderImages, RatingCard, ClientFeedback, FeedbackSummary } =
    ClientReviews || {};
  const { row1, row2, row3, row4 } = SliderImages || {};

  // Handle loading state or missing ClientFeedback data
  if (isLoading || !ClientFeedback) {
    // You can return a loading spinner or a placeholder here
    return null;
  }

  return (
    <>
      <div className="overflow-div">
        <section className="WidthContent1">
          <div className="OurClients WidthContent mobile-mt">
            <div className="OurClients_Marquee full mobile">
              <Marquee autoFill speed={175}>
                {row1?.map((e, i) => {
                  return (
                    <Image
                      src={e.message}
                      alt="row 1 image"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "50%",
                        height: "50%",
                        filter: "grayscale(100%)",
                        opacity: "0.5",
                      }}
                      key={i}
                    />
                  );
                })}
              </Marquee>
              <Marquee autoFill speed={100}>
                {row2?.map((e, i) => {
                  return (
                    <Image
                      src={e.message}
                      alt="row 2 image"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "50%",
                        height: "50%",
                        filter: "grayscale(100%)",
                        opacity: "0.5",
                      }}
                      key={i}
                    />
                  );
                })}
              </Marquee>
              <Marquee autoFill speed={100}>
                {row3?.map((e, i) => {
                  return (
                    <Image
                      src={e.message}
                      alt="row 3 image"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "50%",
                        height: "50%",
                        filter: "grayscale(100%)",
                        opacity: "0.5",
                      }}
                      key={i}
                    />
                  );
                })}
              </Marquee>
              <Marquee autoFill speed={150}>
                {row4?.map((e, i) => {
                  return (
                    <Image
                      src={e.message}
                      alt="row 4 image"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "50%",
                        height: "50%",
                        filter: "grayscale(100%)",
                        opacity: "0.5",
                      }}
                      key={i}
                    />
                  );
                })}
              </Marquee>
            </div>
            <div className="OurClients_Card_Container popout">
              <div className="OurClients_Card_One">
                {/* Ensure ClientFeedback is an array before passing */}
                {ClientFeedback && <ClientCarousel slides={ClientFeedback} />}
              </div>
              <div className="OurClients_Card_Two mb-0">
                <div>
                  <Image
                    src={RatingCard?.rating_image}
                    alt="OurClientsImage"
                    width={250}
                    height={180}
                    className="rating_image"
                  />
                </div>
                <div className="OurClients_Card_Two_Content">
                  {RatingCard?.rating_description}
                </div>
              </div>
            </div>
            <div className="OurClients_Marquee full desktop">
              <Marquee autoFill speed={175}>
                {row1?.map((e, i) => {
                  return (
                    <Image
                      src={e.message}
                      alt="row 1 image"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "100%",
                        filter: "grayscale(100%)",
                        opacity: "0.5",
                      }}
                      key={i}
                    />
                  );
                })}
              </Marquee>
              <Marquee autoFill speed={100}>
                {row2?.map((e, i) => {
                  return (
                    <Image
                      src={e.message}
                      alt="row 2 image"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "100%",
                        filter: "grayscale(100%)",
                        opacity: "0.5",
                      }}
                      key={i}
                    />
                  );
                })}
              </Marquee>
              <Marquee autoFill speed={100}>
                {row3?.map((e, i) => {
                  return (
                    <Image
                      src={e.message}
                      alt="row 3 image"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "100%",
                        filter: "grayscale(100%)",
                        opacity: "0.5",
                      }}
                      key={i}
                    />
                  );
                })}
              </Marquee>
              <Marquee autoFill speed={150}>
                {row4?.map((e, i) => {
                  return (
                    <Image
                      src={e.message}
                      alt="row 4 image"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "100%",
                        filter: "grayscale(100%)",
                        opacity: "0.5",
                      }}
                      key={i}
                    />
                  );
                })}
              </Marquee>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export const SlideOne = (props) => {
  const {
    client_designation,
    review,
    client_name,
    video_url,
    image_url,
    rating,
  } = props;
  const { handleNext } = useContext(CarouselContext);

  return (
    <>
      <div className="OurClients_Slide">
        <div className="OurClients_Slide_Title mobile_title">{review}</div>
        <div className="OurClients_Slide_Container">
          <div className="OurClints_Slide_Image part">
            <Image
              src={image_url}
              alt="OurClientsImage1"
              width={400}
              height={500}
              className="OurClients_Slide_Img"
            />
          </div>
          <div className="OurClients_Slide_Content part">
            <div className="OurClients_Slide_Media">
              <div className="OurClients_Slide_Media_Video">
                {/* It's more common to use ReactPlayer for videos. If video_url is truly an image, keep img tag. */}
                {/* <ReactPlayer url={video_url} controls width='100%' height='100%' /> */}
                <img className="ourClientImg" src={video_url} alt="" />
              </div>
              <div className="OurClients_Slide_Media_Rating">
                <div className="OurClients_Slide_Star_Rating">
                  <Stars rating={rating} />
                </div>
                <div>
                  <div className="OurClients_Slide_Star_Reviewer">
                    {client_name}
                  </div>
                  <div className="OurClients_Slide_Star_Company">
                    {client_designation}
                  </div>
                </div>
              </div>
            </div>
            <div className="OurClients_Slide_Title desktop_title">{review}</div>
            <div className="OurClients_Slide_Button">
              <div className="OurClients_Slide_Button_Text">Następna</div>
              <div className="ArrowButton" onClick={handleNext}>
                <span className="ArrowButton_Arrow">&gt;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const SlideFour = () => {
  const { isLoading, screenData } = useSelector((state) => state.home);
  const { ClientReviews } = screenData || {};
  const { FeedbackSummary } = ClientReviews || {};

  return (
    <>
      <div className="OurClients_Slide_Last">
        <div className="OurClients_Card_One_Title">
          {FeedbackSummary?.title}
        </div>
        <div className="OurClients_Card_One_Content">
          {FeedbackSummary?.description}
        </div>
        <div className="OurClients_Card_One_Button_Container">
          <Link className="OurClients_Card_One_Button" href="marketersi-opinie">
            Poznaj wszystkie recenzje
          </Link>
        </div>
      </div>
    </>
  );
};