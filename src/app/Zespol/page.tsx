"use client";
import React, { useEffect } from "react";
import style from "./team-page.module.css";
import * as TeamComponents from "@/components/organisms/team/team-components/TeamComponents";
// import OurClients from "@/components/organisms/strategia-marketingowa/OurClients";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_TEAM_SCREEN_DATA } from "@/redux/zespol/teamAction";
import OurClients from "../../components/organisms/main/ourclients/OurClients";
// import "./strategiamarketingowa.css";
import { FETCH_HOME_SCREEN_DATA } from "@/redux/home/homeAction";

const Team = () => {
  const { isLoading, screenData } = useSelector((state) => state.team);
  const {card1, card2, section3, section4} =screenData ;

  if (screenData) {
    console.log("Team screen data from UI => ", screenData);
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCH_TEAM_SCREEN_DATA });
    dispatch({ type: FETCH_HOME_SCREEN_DATA });
  }, []);

 
 
  return (
    <>
      <TeamComponents.Banner />
      <TeamComponents.PersonalCard {...card1} />
      <TeamComponents.FreeSpace />
      <TeamComponents.Support />
      <TeamComponents.ImageSlider />
      <OurClients />
      <TeamComponents.Review />
      <section className={style.Customers}>
        <div className={style.teamContent}>
          <p className={style.customersPara}>
            <span>{section3?.section_three_header}</span>
            {section3?.section_three_subheader}
          </p>
        </div>
        <TeamComponents.PersonalCard {...card2} />
        <div className={style.teamContent}>
          <p className={style.customersPara}>
            {section4?.section_four_para}
          </p>
        </div>
      </section>
      <TeamComponents.Creative />
      <TeamComponents.Caring />
      <TeamComponents.Culture />
      <TeamComponents.GoodTime />
      <TeamComponents.People />
    </>
  );
};

export default Team;
