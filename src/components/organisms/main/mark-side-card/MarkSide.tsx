"use client";

import React from "react";
import style from "./mark.module.css";
import { Row, Col, Image } from "react-bootstrap";
import ReactPlayer from "react-player";
import MarkCard from "./MarkCard";
import Link from "next/link";

const MarkSide = () => {
  const data = [
    {
      title: "Marka",
      description:
        "Dobra marka przyciąga pracowników, uwodzi klientów i napędza zyski.",
      listItem1: "Nazwa dla firmy",
      listItem2: "Projektowanie logo",
      listItem3: "Identyfikacja spółki",
      link1: "https://owocni.pl/",
      link2: "https://owocni.pl/",
      link3: "https://owocni.pl/",
    },
    {
      title: "Strona",
      description:
        "Tworzymy przyjemne, cyfrowe doświadczenia z gwarancją poprawy wyników sprzedaży.",
      listItem1: "Tworzenie stron",
      listItem2: "Projektowanie UX",
      link1: "https://owocni.pl/",
      link2: "https://owocni.pl/",
      link3: "https://owocni.pl/",
    },
    {
      title: "Marketing",
      description:
        "Optymalny zwrot z inwestycji. Od reklam w Google, do kampanii Facebook.",
      listItem1: "Strategia marketingowa",
      listItem2: "Działania marketingowe",
      listItem3: "Konsultacja marketingu",
      link1: "https://owocni.pl/",
      link2: "https://owocni.pl/",
      link3: "https://owocni.pl/",
    },

    // Add more data as needed
  ];

  return (
    <div>
      <Row>
        <Col sm={4}>
          <div className={style.mark}>
            <Image
              src="/assets/images/Projektowanie-logo.avif"
              alt="rating image"
              width="auto"
              height="auto"
            />
            {/* <MarkCard data={data} /> */}
            <Card data={data[0]} />
          </div>
        </Col>
        <Col sm={4}>
          <ReactPlayer
            url="/assets/videos/Strony-Internetowe_2_jilacc.mp4"
            playing={true} // Set to true for autoplay
            controls
            loop={true} // Set to true for looping
            width="100%"
            height="auto"
            className={style.heroVideo}
          />
          <Card data={data[1]} />
        </Col>
        <Col sm={4}>
          <div className={style.mark}>
            <Image
              src="/assets/images/Agencja-marketingowa.avif"
              alt="rating image"
              width="auto"
              height="auto"
            />
            <Card data={data[2]} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MarkSide;

const Card = ({ data }) => {
  const {
    title,
    description,
    listItem1,
    listItem2,
    listItem3,
    link1,
    link2,
    link3,
  } = data;
  // console.log("link", link);
  return (
    <>
      <div className={style.markCard}>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>
          <li>
            <Link href={link1}>{listItem1}</Link>
            <div className={style.playIcon}>
            <Image
              src="/assets/images/play_arrow.svg"
              alt="rating image"
              width="auto"
              height="auto"
            />
            </div>
          </li>
          <li>
            <Link href={link2}>{listItem2}</Link>
            <div className={style.playIcon}>
            <Image
              src="/assets/images/play_arrow.svg"
              alt="rating image"
              width="auto"
              height="auto"
            />
            </div>
          </li>
          <li>
            <Link href={link3}>{listItem3}</Link>
            <div className={style.playIcon}>
            <Image
              src="/assets/images/play_arrow.svg"
              alt="rating image"
              width="auto"
              height="auto"
            />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
