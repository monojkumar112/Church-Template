"use client";
import React, { useState, useEffect } from "react";
import HowToFind from "../pages/home/HowToFind";
import Community from "../pages/home/Community";
import NewsLetter from "../pages/home/NewsLetter";
import DonateFrom from "../pages/donate/DonateFrom";

const DonateSection = () => {
  // get data
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
      {/* <BannerImage /> */}

      {/* <DonateUs /> */}

      <DonateFrom />

      <HowToFind data={homeData} />
      <div className="cpt-6">
        <Community data={homeData} />
      </div>
      <NewsLetter data={homeData} />
    </>
  );
};

export default DonateSection;
