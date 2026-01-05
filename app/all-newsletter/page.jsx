import React from "react";
import NewsletterSection from "../components/section/NewsletterSection";
export const metadata = {
  title: "Holy Innocents' Catholic Church Orpington - All Newsletters",
  description:
    "Welcome to Holy Innocents Catholic Church, a vibrant parish community dedicated to faith, worship, and service. Join us for Mass, events, and spiritual growth.",
  keywords:
    "Holy Innocents, Catholic Church, Parish, Mass Times, Community, Worship, Faith, Events, Spiritual Growth, Ministries, Sacraments",
  icons: {
    icon: "/icon.png",
  },
};
const allNewsletterPage = () => {
  return (
    <>
      <section className="event-banner">
        <div className="container">
          <div className="event-header-content">
            <h1>All Newsletters</h1>
          </div>
        </div>
      </section>
      <NewsletterSection />
    </>
  );
};

export default allNewsletterPage;
