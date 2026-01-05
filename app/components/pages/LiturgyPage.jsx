"use client";
import React, { useState, useEffect } from "react";
import Team from "../pages/home/Team";
import Community from "../pages/home/Community";
import NewsLetter from "../pages/home/NewsLetter";
import LiturgySection from "../section/LiturgySection";
import LiturgyContent from "../section/LiturgyContent";
import Banner from "../section/Banner";

const LiturgyPage = () => {
  // get home data
  const [homeData, setHomeData] = useState();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    const load = async () => {
      const res = await fetch(`${baseUrl}/api/home-settings`);
      const json = await res.json();
      const payload = res?.data ?? json;
      setHomeData(payload[0]);
    };
    load();
  }, [baseUrl]);

  const data = {
    title: "Our liturgy",
    description: `The Eucharist is the source and summit of the whole Christian life.  It is the vital centre of all that the Church is and does -  ​One Bread, One Body, Catholic bishops of Britain and Ireland, 1998`,
    urlLink1: "#",
    urlLink2: "#",
    btnText1: "Get Involved",
    btnText2: "Mass Times",
  };

  return (
    <>
      <Banner data={data} />
      <LiturgySection />
      <LiturgyContent />
      <Team />
      <Community data={homeData} />
      <NewsLetter data={homeData} />
    </>
  );
};

export default LiturgyPage;
