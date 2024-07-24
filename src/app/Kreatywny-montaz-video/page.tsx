'use client';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FETCH_VIDEO_EDITING_SCREEN_DATA } from '@/redux/Kreatywny-montaz-video/creativeVideoAction';
import BounceLoader from 'react-spinners/BounceLoader';
import Hero from '@/components/organisms/Kreatywny-montaz-video/hero/Hero';
import Video from '@/components/organisms/Kreatywny-montaz-video/video/Video';
import RatingCaption from '@/components/organisms/Kreatywny-montaz-video/rating-captions/RatingCaption';
import MarkSide from '@/components/organisms/Kreatywny-montaz-video/mark-side-card/MarkSide';
import OurClients from '@/components/organisms/Kreatywny-montaz-video/ourclients/OurClients';
import Order from '@/components/organisms/Kreatywny-montaz-video/order/Order';
import HardResult from '@/components/organisms/Kreatywny-montaz-video/hard-results/HardResults';
import Numbers from '@/components/organisms/Kreatywny-montaz-video/numbers/Numbers';
import Entrepreneur from '@/components/organisms/Kreatywny-montaz-video/entrepreneur/Entrepreneur';

const CreativeVideoEditingScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCH_VIDEO_EDITING_SCREEN_DATA });
  }, [dispatch]);

  if (false) {
    return (
      <div className="loader-container">
        <BounceLoader color="#00bfff" size={50} />
      </div>
    );
  }

  return (
    <>
      {/* Hero section */}
      <Hero />
      {/* Video Section */}
      <Video />
      {/* Ratings Section */}
      <RatingCaption />
      {/* Mark Side  */}
      <MarkSide />
      {/* Our Client */}
      <OurClients />
      {/* Entrepreneur */}
      <Entrepreneur />
      {/* Numbers */}
      <Numbers />
      {/* Hard Result */}
      <HardResult />
      {/* Order */}
      <Order />
    </>
  );
};

export default CreativeVideoEditingScreen;
