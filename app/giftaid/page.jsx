import React from "react";
import GiftaidFrom from "../components/section/GiftaidFrom";
export const metadata = {
  title: "Holy Innocents' Catholic Church Orpington - Gift Aid",
  description:
    "Welcome to Holy Innocents Catholic Church, a vibrant parish community dedicated to faith, worship, and service. Join us for Mass, events, and spiritual growth.",
  keywords:
    "Holy Innocents, Catholic Church, Parish, Mass Times, Community, Worship, Faith, Events, Spiritual Growth, Ministries, Sacraments",
  icons: {
    icon: "/icon.png",
  },
};
function GiftAidPage() {
  return (
    <>
      <section className="churchsuite-section">
        <div className="container">
          <div className="churchsuite-wrapper">
            <div className="churchsuite-header">
              <h3>Parish Gift Aid Declaration</h3>
              <h5>
                Parish Gift Aid Declaration – Roman Catholic Archdiocese of
                Southwark
              </h5>
            </div>
            <GiftaidFrom />
          </div>
        </div>
      </section>
    </>
  );
}

export default GiftAidPage;
