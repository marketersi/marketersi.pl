'use client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_VIDEO_RECORDING_SCREEN_DATA } from '@/redux/profesjonalne-nagrywanie-filmow/videoRecordingAction';
import BounceLoader from 'react-spinners/BounceLoader';
import ScrollManager from '../ScrollManager';
import Hero from '@/components/organisms/professional-video-recording/hero/Hero';
import Video from '@/components/organisms/professional-video-recording/video/Video';
import RatingCaption from '@/components/organisms/professional-video-recording/rating-captions/RatingCaption';
import MarkSide from '@/components/organisms/professional-video-recording/mark-side-card/MarkSide';
import OurClients from '@/components/organisms/main/ourclients/OurClients';
import Entrepreneur from '@/components/organisms/professional-video-recording/entrepreneur/Entrepreneur';
import Numbers from '@/components/organisms/professional-video-recording/numbers/Numbers';
import HardResult from '@/components/organisms/professional-video-recording/hard-results/HardResults';
//import Order from '@/components/organisms/professional-video-recording/order/Order';
//import Order from '@/components/organisms/main/order/Order';
import Order from '@/components/organisms/main/order/Order';
import { Provider } from 'react-redux';
import store from "@/store/store";
import AfterBanner from '@/components/organisms/professional-video-recording/after-banner/AfterBanner';
import CennikCard from '../cennik-card/page'
import { FETCH_HOME_SCREEN_DATA } from "@/redux/home/homeAction";

const ProfessionalVideoRecording = () => {
  const { isLoading, screenData } = useSelector(
    (state) => state.videoRecording
  );
  console.log('screen data from video recording', screenData);

  const dispatch = useDispatch();

    // useEffect(() => {
    //   if (!screenData || Object.keys(screenData).length === 0) {
    //    dispatch({ type: FETCH_HOME_SCREEN_DATA });
    //   dispatch({ type: FETCH_VIDEO_RECORDING_SCREEN_DATA });
    //   }
    // }, [screenData, dispatch]);
 useEffect(() => {
      if (!screenData || Object.keys(screenData).length === 0) {
       dispatch({ type: FETCH_VIDEO_RECORDING_SCREEN_DATA });
       dispatch({ type: FETCH_HOME_SCREEN_DATA });
      }
    }, [screenData, dispatch]);
  // useEffect(() => {
  //   dispatch({ type: FETCH_VIDEO_RECORDING_SCREEN_DATA });
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch({ type: FETCH_HOME_SCREEN_DATA });
  // }, [dispatch]);

  if (isLoading) {
    return (
      <div className="loader-container">
        <BounceLoader color="#00bfff" size={50} />
      </div>
    );
  }

  return (
    <>
    <Provider store={store}>
    <ScrollManager/>
      <Hero />
            <AfterBanner /> 
           <CennikCard/>
      {/* <Video /> */}
      <RatingCaption />
      {/* <MarkSide /> */}
      <OurClients />
      <Entrepreneur />
      <Numbers />
      <HardResult />
      <Order />
      </Provider>
    </>
  );
};

export default ProfessionalVideoRecording;
