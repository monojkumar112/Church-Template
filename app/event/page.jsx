import React from "react";
import EventSection from "../components/section/EventSection";
export const metadata = {
  title:
    "Holy Innocents' Catholic Church Orpington - Holy Innocents' Catholic Church - Recent events",
  description:
    "Welcome to Holy Innocents Catholic Church, a vibrant parish community dedicated to faith, worship, and service. Join us for Mass, events, and spiritual growth.",
  keywords:
    "Holy Innocents, Catholic Church, Parish, Mass Times, Community, Worship, Faith, Events, Spiritual Growth, Ministries, Sacraments",
  icons: {
    icon: "/assets/favicon.png",
  },
};
const EventPage = () => {
  return (
    <>
      <section className="event-banner">
        <div className="container">
          <div className="event-header-content">
            <h1>Recent Events</h1>
            <p>Stay updated with our latest events and activities.</p>
          </div>
        </div>
      </section>
      <EventSection />
    </>
  );
};

export default EventPage;
