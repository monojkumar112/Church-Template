import React from "react";
import RegisterFrom from "../components/section/RegisterFrom";
export const metadata = {
  title: "Holy Innocents' Catholic Church Orpington - Home",
  description:
    "Welcome to Holy Innocents Catholic Church, a vibrant parish community dedicated to faith, worship, and service. Join us for Mass, events, and spiritual growth.",
  keywords:
    "Holy Innocents, Catholic Church, Parish, Mass Times, Community, Worship, Faith, Events, Spiritual Growth, Ministries, Sacraments",
  icons: {
    icon: "/icon.png", // or your image path like '/assets/favicon.png'
  },
};

const ChurchsuitePage = () => {
  return (
    <>
      <section className="churchsuite-section">
        <div className="container">
          <div className="churchsuite-wrapper">
            <div className="churchsuite-header">
              <h3>
                We are really pleased you would like to register your details
                with Holy Innocents&apos;. Simply fill in the form below to
                provide your details.
              </h3>
              <h5>​Communications between the Parish and yourself</h5>
              <p>
                We respect your privacy and wish to give you the choice about
                how we communicate with you and your family. Of course, we will
                only use your email to communicate with you directly and we will
                not share your details outside of the church.
              </p>
            </div>
            <RegisterFrom />
          </div>
        </div>
      </section>
    </>
  );
};

export default ChurchsuitePage;
