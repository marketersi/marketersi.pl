import Banner from "@/components/organisms/team/banner/Banner";
import FreeSpace from "@/components/organisms/team/free-space/FreeSpace";
import ImageSlider from "@/components/organisms/team/image-slider/ImageSlider";
import Review from "@/components/organisms/team/review/Review";
import PersonalCard from "@/components/organisms/team/personal/PersonalCard";
import Support from "@/components/organisms/team/support/Support";
import style from './team-page.module.css'
import React from "react";
import Creative from "@/components/organisms/team/creative/Creative";
import Caring from "@/components/organisms/team/caring/Caring";

const page = () => {
  const personalCardData1 = {
    imageSrc:
      "https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmariusz.jpg.9f5b45ad.webp&w=128&q=75",
    name: "Mariusz Słowik",
    role: "Założyciel",
    description:
      "Jeśli lubisz ten specyficzny klimat osobistego zrozumienia panujący w małym zespole, to w Owocnych poczujesz się jak w domu.",
  };
  const personalCardData2 = {
    imageSrc:
      "https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjakub.88638b87.jpg&w=256&q=75",
    name: "Jakub Piekarski",
    // role: "Założyciel",
    description:
      "„To właśnie dbałość o te maleńkie detale tworzy w finale całą różnicę.”",
  };
  return (
    <>
      <Banner />
      <PersonalCard {...personalCardData1} />
      <FreeSpace />
      <Support />
      <ImageSlider />
      <Review />
      <section className={style.Customers }>
      <div className={style.teamContent}>
        <p style={{margin:'100px 0'}}><span>Customers often ask how good designs are created.</span> The answer lies in simplicity.Simple is smart!But turning complexity into simplicity is not easy at all.</p>
      </div>
      <PersonalCard {...personalCardData2} />
      <div className={style.teamContent}>
        <p style={{margin:'100px 0'}}><span>Tu nie ma drogi na skróty. </span> Sukces to ciężka praca. Jeśli tego nie kochasz, nie zarwiesz tych długich nocy.</p>
      </div>
      </section>
      <Creative />
      <Caring />
    </>
  );
};

export default page;
