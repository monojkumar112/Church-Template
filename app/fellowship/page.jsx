'use client';
import React, { useState, useEffect } from "react";
import Banner from "../components/section/Banner";
import Team from "../components/pages/home/Team";
import Community from "../components/pages/home/Community";
import NewsLetter from "../components/pages/home/NewsLetter";
import FellowshipSection from "../components/section/FellowshipSection";




const FellowshipPage = () => {

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
    title: "Our fellowship ",
    description: `They devoted themselves to the teaching of the apostles and to the communal life, to the breaking of the bread and to the prayers - Acts 2:42`,
    urlLink1: "#",
    urlLink2: "#",
    btnText1: "Get Involved",
    btnText2: "Mass Times",
  };
  return (
    <>
      <Banner data={data} />
      <FellowshipSection />
      <Team />
      <Community
        data={homeData}
      />
      <NewsLetter  />
    </>
  );
};

export default FellowshipPage;
