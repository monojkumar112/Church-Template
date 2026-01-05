'use client';
import React, { useState, useEffect } from "react";
import Banner from "../components/section/Banner";
import AboutSection from "../components/section/AboutSection";
import Team from "../components/pages/home/Team";
import Community from "../components/pages/home/Community";
import NewsLetter from "../components/pages/home/NewsLetter";


const AboutPage = () => {
  const data = {
    title: "About Us",
    description: `The parish  is not principally a structure, a territory, or a building, but rather, 'the family of God,  a fellowship afire with a unifying spirit', 'a familial and welcoming home', the 'community of the faithful' - Saint John Paul II`,
    urlLink1: "/brief-history",
    urlLink2: "/#event",
    btnText1: "Our parish history",
    btnText2: "Mass Times",
  };


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

  return (
    <>
      <Banner data={data} />
      <AboutSection />
      <Team />
      <Community data={homeData} />
      <NewsLetter />
    </>
  );
};

export default AboutPage;
