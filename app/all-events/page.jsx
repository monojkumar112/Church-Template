import React from "react";
import AllEventSection from "../components/section/AllEventSection";
export const metadata = {
  title:
    "Holy Innocents' Catholic Church Orpington - Holy Innocents' Catholic Church - Recent events",
  description:
    "Welcome to Holy Innocents Catholic Church, a vibrant parish community dedicated to faith, worship, and service. Join us for Mass, events, and spiritual growth.",
  keywords:
    "Holy Innocents, Catholic Church, Parish, Mass Times, Community, Worship, Faith, Events, Spiritual Growth, Ministries, Sacraments",
  icons: {
    icon: "/icon.png",
  },
};
const AllEventsPage = () => {
  return (
    <>
      <section className="event-banner">
        <div className="container">
          <div className="event-header-content">
            <h1>All Events</h1>
            <p>View all events and activities.</p>
          </div>
        </div>
      </section>
      <AllEventSection />
    </>
  );
};

export default AllEventsPage;
