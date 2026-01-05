import React from "react";
import Image from "next/image";
import Link from "next/link";
import ParishVisionDowload from "../../components/Download/ParishVisionDowload";
export const metadata = {
  title:
    "Holy Innocents' Catholic Church - Vision - Holy Innocents' Catholic Church Orpington",
  description:
    "Welcome to Holy Innocents Catholic Church, a vibrant parish community dedicated to faith, worship, and service. Join us for Mass, events, and spiritual growth.",
  keywords:
    "Holy Innocents, Catholic Church, Parish, Mass Times, Community, Worship, Faith, Events, Spiritual Growth, Ministries, Sacraments",
  icons: {
    icon: "/assets/favicon.png",
  },
};
const OurParishVisionPage = () => {
  return (
    <>
      <section className="leader-ship">
        <div className="container">
          <div className="leader-ship-content">
            <div className="groups-content-pryer">
              <h2 className="section-title-2">Our Parish Vision</h2>
              <div className="father-img">
                <Image
                  src="/assets/images/pages/a-parish-on-a-hilltop-parish-vision-may-2023_orig.jpeg"
                  alt="Father Victor Vella"
                  width={1170}
                  height={649}
                />
              </div>
            </div>
            <div>
              <ul>
                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">
                    Our Parish Vision in words
                  </h2>
                  <h5 className="section-title-3">“A Parish on a Hilltop”</h5>

                  <p>
                    The new Parish Vision is rooted in the prophet Isaiah
                    (Isaiah 60:1-3), the Sermon on the Mount (Matt 5:14, 16) and
                    the book The Cost of Discipleship, written by the 20th
                    century Lutheran theologian Dietrich Bonhoeffer.
                  </p>
                  <p>
                    A vision remains a dream unless its progress is embedded in
                    three words namely, picture, future and passion. It is
                    therefore a picture of the future that evokes, brings forth
                    and produces passion.
                  </p>
                  <p>
                    Three essential tools are required to achieve the new Parish
                    Vision:
                  </p>
                  <ul className="section-content-ul">
                    <li className="section-content-li">
                      Primacy of the Holy Spirit
                    </li>
                    <li className="section-content-li">Evangelisation</li>
                    <li className="section-content-li">Strong Leadership</li>
                  </ul>
                  <p>
                    The new vision statement is inspired by Saint John Henry
                    Newman’s words: “The Light, O Lord, will be all from you;
                    none of it will be mine. It will be you shining on others
                    through me.”
                  </p>
                  <p>
                    This quote is the basis of the pithy parish vision
                    statement:
                  </p>
                  <h5 className="section-title-3">
                    “Christ shining on others through us.”
                  </h5>
                  <p>
                    Parish Co Responsibility Group (PCRG) New framework May 2023
                  </p>
                  <ParishVisionDowload />
                </li>
              </ul>
              <div className="pt-3 d-flex align-items-center justify-content-center">
                <Link href={"/about-us"} className="custom-btn">
                  ​ Return to About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurParishVisionPage;
