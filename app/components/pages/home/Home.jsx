"use client";
import Image from "next/image";
import HeroSlider from "./HeroSlider";
import MassEvent from "./MassEvent";
import BookingMass from "./BookingMass";
import NewsLetter from "./NewsLetter";
import Team from "./Team";
import Community from "./Community";
import Minitries from "./Minitries";
import AdorationRoom from "./AdorationRoom";
import ParishCentre from "./ParishCentre";
import HowToFind from "./HowToFind";
import Touch from "./Touch";
import ContactUs from "./ContactUs";
import Evangelisation from "./Evangelisation";
import NewHere from "./NewHere";
import FatherHere from "./FatherHere";
import Upcoming from "./Upcoming";

import React, { useState, useCallback } from "react";

// export const metadata = {
//   title: "Holy Innocents' Catholic Church Orpington - Home",
//   description:
//     "Welcome to Holy Innocents Catholic Church, a vibrant parish community dedicated to faith, worship, and service. Join us for Mass, events, and spiritual growth.",
//   keywords:
//     "Holy Innocents, Catholic Church, Parish, Mass Times, Community, Worship, Faith, Events, Spiritual Growth, Ministries, Sacraments",
//   icons: {
//     icon: "/assets/favicon.png",
//   },
// };

export default function Home() {
  // fetch home page data
  const [data, setData] = useState();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const fetchHomePageData = useCallback(async () => {
    if (!baseUrl) return;
    try {
      const res = await fetch(`${baseUrl}/api/home-settings`);
      const json = await res.json();

      const payload = json?.data ?? json;
      setData(payload[0]);
    } catch (err) {
      console.error("Error fetching team content:", err);
    }
  }, [baseUrl]);

  React.useEffect(() => {
    if (!baseUrl) return;
    fetchHomePageData();
  }, [baseUrl, fetchHomePageData]);
  // console.log('Home page data: ', data);
  return (
    <>
      <HeroSlider />
      <FatherHere data={data} />
      <MassEvent data={data} />
      <NewsLetter />

      <Upcoming />
      <BookingMass data={data} />
      <NewHere data={data} />
      <Team />
      <Community data={data} />
      <Evangelisation data={data} />
      <Minitries data={data} />
      <AdorationRoom data={data} />
      <ParishCentre data={data} />
      <HowToFind data={data} />
      <Touch data={data} />
      <ContactUs data={data} />
    </>
  );
}
