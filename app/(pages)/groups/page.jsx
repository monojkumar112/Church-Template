import Link from "next/link";
import React from "react";
import GroupsDowload from "../../components/Download/GroupsDowload";
export const metadata = {
  title:
    "All our parish groups and activities - Holy Innocents' Catholic Church Orpington",
  description:
    "Welcome to Holy Innocents Catholic Church, a vibrant parish community dedicated to faith, worship, and service. Join us for Mass, events, and spiritual growth.",
  keywords:
    "Holy Innocents, Catholic Church, Parish, Mass Times, Community, Worship, Faith, Events, Spiritual Growth, Ministries, Sacraments",
  icons: {
    icon: "/assets/favicon.png",
  },
};
const GroupsPage = () => {
  return (
    <>
      <section className="leader-ship">
        <div className="container">
          <div className="leader-ship-content">
            <div className="groups-content">
              <h5> All our parish groups and activities</h5>
              <p>
                {" "}
                You will find below a link to sections on each of our parish
                groups and activities. If you want to learn more about any of
                them, or if you are interested in participating or volunteering
                to help, get in touch with the contact person shown in the
                relevant section or with the{" "}
                <span>
                  <Link href="/contact-us"> Parish Office</Link>
                </span>{" "}
                .​ Sharing my time and talents..... see volunteer sign-up form{" "}
              </p>

              <GroupsDowload />
            </div>

            <div>
              <ul>
                {/* LITURGY SECTION */}
                <li
                  className="section-content-list"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">
                    LITURGY – Holy Innocents’ Worship
                  </h2>
                  <ul className="section-content-ul">
                    <li className="section-content-li">Reading</li>
                    <li className="section-content-li">Altar Servers</li>
                    <li className="section-content-li">Choir</li>
                    <li className="section-content-li">Music Ministry</li>
                    <li className="section-content-li">
                      Welcoming people at Mass
                    </li>
                    <li className="section-content-li">Collectors at Mass</li>
                    <li className="section-content-li">
                      Extraordinary Minister of the Eucharist
                    </li>
                  </ul>
                </li>

                {/* HANDING ON OUR FAITH SECTION */}
                <li
                  className="section-content-list"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">
                    HANDING ON OUR FAITH – Training as a Catechist for
                  </h2>
                  <ul className="section-content-ul">
                    <li className="section-content-li">Baptism Preparation</li>
                    <li className="section-content-li">
                      1st Communion Journey
                    </li>
                    <li className="section-content-li">
                      RCIA / Journey in Faith (preparing adults for sacraments)
                    </li>
                    <li className="section-content-li">Confirmation Journey</li>
                    <li className="section-content-li">Children’s Liturgy</li>
                    <li className="section-content-li">Youth Ministry</li>
                  </ul>
                </li>

                {/* CARING FOR ONE ANOTHER SECTION */}
                <li
                  className="section-content-list"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">CARING FOR ONE ANOTHER</h2>
                  <ul className="section-content-ul">
                    <li className="section-content-li">
                      Good Neighbours To All (GNTA)
                    </li>
                    <li className="section-content-li">
                      Saint Vincent de Paul (SVP)
                    </li>
                    <li className="section-content-li">Bereavement Group</li>
                    <li className="section-content-li">Welcoming Newcomers</li>
                    <li className="section-content-li">
                      Teas and coffees after Sunday Mass
                    </li>
                    <li className="section-content-li">Warm Spaces</li>
                  </ul>
                </li>

                {/* OTHER PARISH MINISTRY SECTION */}
                <li
                  className="section-content-list"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">OTHER PARISH MINISTRY</h2>
                  <ul className="section-content-ul">
                    <li className="section-content-li">
                      Church care – Altar Linen
                    </li>
                    <li className="section-content-li">
                      Helping with office jobs
                    </li>
                    <li className="section-content-li">
                      IT and Communications
                    </li>
                    <li className="section-content-li">
                      Counting / Banking Money
                    </li>
                    <li className="section-content-li">
                      Social and Fundraising Group
                    </li>
                    <li className="section-content-li">
                      Holy Innocents’ Fellowship Group
                    </li>
                    <li className="section-content-li">
                      Churches Together in Orpington (CTO)
                    </li>
                    <li className="section-content-li">Flower Arranging</li>
                    <li className="section-content-li">
                      Gardening and Ground Maintenance
                    </li>
                    <li className="section-content-li">Building Maintenance</li>
                    <li className="section-content-li">Walkers Group</li>
                    <li className="section-content-li">200 Club</li>
                    <li className="section-content-li">
                      Parish Evangelisation Cells (PECS)
                    </li>
                    <li className="section-content-li">Safe-guarding</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GroupsPage;
