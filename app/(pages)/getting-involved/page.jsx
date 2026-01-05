import React from "react";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title:
    "Holy Innocents Catholic Church - Getting Involved - Holy Innocents' Catholic Church Orpington",
  description:
    "Welcome to Holy Innocents Catholic Church, a vibrant parish community dedicated to faith, worship, and service. Join us for Mass, events, and spiritual growth.",
  keywords:
    "Holy Innocents, Catholic Church, Parish, Mass Times, Community, Worship, Faith, Events, Spiritual Growth, Ministries, Sacraments",
  icons: {
    icon: "/assets/favicon.png",
  },
};
const GettingInvolvedPage = () => {
  return (
    <>
      <section className="leader-ship">
        <div className="container">
          <div
            className="leader-ship-content"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="groups-content">
              <h5> Getting involved</h5>
              <p>
                Many the gifts, many the works, one in the Lord of all. One
                bread, one body, one Lord of all. One cup of blessing which we
                bless. And we, though many, throughout the earth. We are one
                body in this one Lord - extract from the hymn &quot;One bread,
                one body&quot; by John Foley, Jesuit priest
              </p>
            </div>

            <div>
              <p>
                Many people contribute their many different talents and gifts to
                the life of our community at Holy Innocents’. Father Victor
                often reminds us that all of this ministry (that is, work or
                service to build up the church), whether in the spotlight or
                behind the scenes, is equally valuable.
              </p>
              <p>
                Everyone, young or old, newcomer or long-time member of the
                parish, is welcome to become involved (or more involved) in what
                we do here at Holy Innocents’. Here are some ways in which you
                can get involved.​
              </p>
              <ul>
                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div className="liturgy-item-list">
                    <div className="liturgy-item-contents">
                      <h2 className="section-title-2">What is ministry?</h2>
                      <p>
                        Any form of work or service for the Church or in its
                        life and mission. It isn&apos;t just things we do
                        related to our liturgy (eucharistic ministry, reading at
                        Mass, music ministry and so on), important though they
                        are, that are &quot;ministries&quot;; rather, all
                        service is ministry
                      </p>
                    </div>
                  </div>
                </li>
                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div className="liturgy-item-list">
                    <div className="liturgy-item-contents">
                      <h2 className="section-title-2">Arriving</h2>
                      <p>
                        If you are new to the parish, you are very welcome. Do
                        let us know you’ve arrived:
                      </p>
                    </div>
                  </div>

                  <ul className="section-content-ul">
                    <li className="section-content-li">
                      introduce yourself to Father Victor or one of the team{" "}
                    </li>
                    <li className="section-content-li">
                      take a Welcome Pack from the porch
                    </li>
                    <li className="section-content-li">
                      fill in the newcomers form on this website or complete a
                      newcomers card in the porch
                    </li>
                    <li className="section-content-li">
                      introduce yourself to some parishioners
                    </li>
                    <li className="section-content-li">
                      stay behind for refreshments when we have them after Mass.
                    </li>
                  </ul>
                </li>
                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">Joining in</h2>

                  <p>
                    There are many forms of ministry at Holy Innocents’ and we
                    have many groups and activities. Prayer, social and other
                    meetings and events are advertised in the Newsletter, on the
                    noticeboards and on the News and events pages of this
                    website.
                  </p>
                  <p>
                    For most ministries, prayer gatherings, groups and social
                    events, you are welcome simply to go along. For some roles,
                    such as those involving children, you may need to be chosen
                    by Father Victor, to have a safeguarding check or to have
                    particular skills or training. If in doubt, the easiest way
                    to find out is to get in touch with the relevant contact
                    person shown on this website or in the Newsletter or to
                    contact the Parish Office.
                  </p>
                </li>
                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">
                    Serving and supporting in other ways
                  </h2>

                  <p>
                    You might be reading all this and thinking that you would
                    love to carry out a ministry in the parish or to join a
                    group or activity – but there may be reasons you cannot at
                    the moment.
                  </p>
                  <p>
                    Your ministry might be raising a family or caring for a
                    loved one. You could be getting to know your neighbours and
                    settling into the area, or serving the wider community in
                    other ways. These are all ways to represent Christ and His
                    church in the world.
                  </p>
                  <p>
                    If you are housebound or infirm, you might find it quite
                    difficult to get out, let alone come to church. In that
                    case, please do let the Parish Office know, so we can keep
                    in touch.
                  </p>
                  <p>
                    If you are able, please find time to read our Newsletter and
                    pray regularly for the parish, its activities and people.
                  </p>
                </li>
                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">Contributing</h2>

                  <p>
                    ​We know that for many, just finding enough money to live on
                    can be very difficult. But we ask those parishioners who are
                    able to do so to be as generous as possible in their
                    financial support to our parish, in the weekly collections,
                    by supporting fundraising events, by joining the 200 Club
                    and by considering leaving a legacy to the parish.
                  </p>
                  <p>
                    Because of strain on the parish finances caused by the costs
                    of maintenance of our parish buildings and the effort to
                    raise money for our planned new Parish Complex, we have
                    regular second collections at weekend Masses.
                  </p>
                  <p>
                    You can sign up for the Gift Aid scheme which allows us to
                    reclaim 25p on every £1 donated by a UK taxpayer who has
                    signed the relevant form.
                  </p>
                  <div className="d-flex get-involoed-its gap-3">
                    <p>
                      <strong> Contact</strong>
                    </p>{" "}
                    <p>
                      (Gift Aid) contact the{" "}
                      <span>
                        <Link href={"/contact-us"}>Parish Office </Link>
                      </span>{" "}
                      <br />
                      (200 Club) Ojes Paul or via the{" "}
                      <span>
                        <Link href={"/contact-us"}>Parish Office </Link>
                      </span>{" "}
                      )
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GettingInvolvedPage;
