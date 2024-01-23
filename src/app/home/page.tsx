import Hero from "@/components/organisms/main/Hero/Hero";
import Entrepreneur from "@/components/organisms/main/entrepreneur/Entrepreneur";
import MarkSide from "@/components/organisms/main/mark-side-card/MarkSide";
import RatingCaption from "@/components/organisms/main/rating-captions/RatingCaption";
import Numbers from "@/components/organisms/main/numbers/Numbers";
import HardResult from "@/components/organisms/main/hard-results/HardResults";
import React from "react";
import Order from "@/components/organisms/main/order/Order";
import Video from "@/components/organisms/main/video/Video";

const HomeScreen = () => {
  return (
    <div>
      <Hero />
      <Video />
      <RatingCaption />
      <MarkSide />
      {/* <Reviews /> */}
      <Entrepreneur />
      <Numbers />
      <HardResult />
      <Order />
    </div>
  );
};

export default HomeScreen;
