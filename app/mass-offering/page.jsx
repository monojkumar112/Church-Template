import React from "react";
import Banner from "../components/section/Banner";
import MassOffering from "../components/section/MassOffering";
export const metadata = {
  title: "Holy Innocents' Catholic Church Orpington - Mass Offering",
  description:
    "Welcome to Holy Innocents Catholic Church, a vibrant parish community dedicated to faith, worship, and service. Join us for Mass, events, and spiritual growth.",
  keywords:
    "Holy Innocents, Catholic Church, Parish, Mass Times, Community, Worship, Faith, Events, Spiritual Growth, Ministries, Sacraments",
  icons: {
    icon: "/icon.png",
  },
};
const MassOfferingPage = () => {
  const data = {
    title: "Our Mass Offering ",
  };
  return (
    <>
      <Banner data={data} />
      <MassOffering />
    </>
  );
};

export default MassOfferingPage;
