import React from "react";
import Banner from "../components/section/Banner";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title:
    "Holy Innocents' Catholic Church, Orpington - Holy Innocents' Catholic Church Orpington",
  description:
    "Welcome to Holy Innocents Catholic Church, a vibrant parish community dedicated to faith, worship, and service. Join us for Mass, events, and spiritual growth.",
  keywords:
    "Holy Innocents, Catholic Church, Parish, Mass Times, Community, Worship, Faith, Events, Spiritual Growth, Ministries, Sacraments",
  icons: {
    icon: "/assets/favicon.png",
  },
};
const LeadershipPage = () => {
  const data = {
    title: "Leadership and co-responsibility",
    description: `Co-responsibility requires a change in mentality, particularly with regard to the role of the laity in the Church, who should be considered not as ‘collaborators’ with the clergy, but as persons truly ‘co-responsible’ for the being and activity of the Church  - Pope Benedict XVI`,
  };
  return (
    <>
      <Banner data={data} />
      <section className="leader-ship">
        <div className="container">
          <div className="leader-ship-content">
            <p>
              ​Many people are involved in pastoral and other leadership at Holy
              Innocents’, as we seek to live out the concept of
              co-responsibility – that the responsibility for the life and
              mission of the parish lies not just with the parish priest and the
              other clergy, but with every baptised member of the parish.
            </p>
            <p>
              So the Finance Committee take responsibility for our parish
              finances. Most of our groups and activities have people who serve
              as leaders or coordinators. Each of our Parish Evangelisation
              Cells has a leader and a co-leader. And so on.
            </p>

            <div>
              <ul>
                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div className="section-content-item">
                    <div className="liturgy-item-list">
                      <div className="liturgy-item-contents">
                        <h2 className="section-title-2">
                          What is ‘co-responsibility’?
                        </h2>
                        <p>
                          ​The idea that every baptised Catholic shares
                          responsibility for the life and mission of the
                          Catholic Church. So it&apos;s not just the parish
                          priest who is responsible for the parish and what it
                          does – every baptised member of the parish has gifts
                          and talents and is called to exercise them and to
                          share that responsibility.
                        </p>
                      </div>
                      <div className="liturgy-img-item">
                        <Image
                          src={"/assets/images/heart-knot.jpg"}
                          width={209}
                          height={137}
                          alt="leader-ship-1"
                        />
                      </div>
                    </div>
                    <p>
                      Some of the people involved in visible leadership roles in
                      the parish include:
                    </p>
                    <ul className="section-content-ul">
                      <li className="section-content-li">Our clergy team</li>
                      <li className="section-content-li">
                        Our Co-ordinator for Prayer and Formation
                      </li>
                      <li className="section-content-li">
                        The Parish Secretary
                      </li>
                      <li className="section-content-li">
                        The Sisters of Mercy
                      </li>
                      <li className="section-content-li">
                        our Parish Co-responsibility Group.
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div className="section-content-item">
                    <h2 className="section-title-2">Clergy Team</h2>

                    <div className="liturgy-item-list pb-4">
                      <div className="liturgy-img-item">
                        <Image
                          src={"/assets/images/leader-ship/4.jpg"}
                          width={224}
                          height={150}
                          alt="leader-ship-1"
                        />
                      </div>
                      <div className="liturgy-item-contents">
                        <h4 className="liader-title-2">
                          Father Victor Vella - Parish Priest
                        </h4>
                        <p>
                          Father Victor has been Parish Priest at Holy Innocents
                          since 2008, having previously been Parish Priest at
                          Northfleet for ten years. Born on the island of Gozo
                          (Malta) in 1961 he has been based in the UK since his
                          ordination in 1986, serving in several Parishes in the
                          Diocese of Westminster and Southwark.
                        </p>
                      </div>
                    </div>
                    <p>
                      Father Victor has a Masters in Philosophy and Political
                      Science and a post graduate certificate in comparative
                      politics in the Middle East. He is a keen student of
                      Biblical Hebrew with an extensive knowledge of Jewish
                      history and religion that is often expressed in his
                      preaching.
                    </p>
                    <p>
                      ​Father Victor takes the Church‘s mission of
                      evangelisation very much to heart and has pioneered the
                      introduction of the Parish Evangelisation Cell System
                      (PECS). He oversees PECS in England and is a member of the
                      PECS International Commission for Formation.
                    </p>
                    <p>
                      <strong>Contact</strong> Father Victor
                    </p>
                    <p>More about Father Victor </p>
                  </div>
                </li>
                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div className="section-content-item">
                    <div className="liturgy-item-list pb-4 align-liader">
                      <div className="liturgy-img-item">
                        <Image
                          src={"/assets/images/leader-ship/14.jpg"}
                          width={209}
                          height={140}
                          alt="leader-ship-1"
                        />
                      </div>
                      <div className="liturgy-item-contents">
                        <h4 className="liader-title-2">
                          Deacon Barry Chalkley
                        </h4>
                        <p>
                          Barry has been a Permanent Deacon at Holy Innocents
                          since his ordination in 2004. Born in West London and
                          brought up in the Church of England he became a
                          Catholic in 1982, five years after his marriage to
                          Liz. They have three adult children, two sons and one
                          daughter.
                        </p>
                      </div>
                    </div>
                    <p>
                      He recently retired from full time employment, having been
                      Finance Director of a housing association for the last
                      eighteen years. Deacon Barry has the responsibility
                      withing the clergy team for Marriage preparation, Baptism,
                      First Holy Communion and liaison with Holy Innocents&apos;
                      School. Since his retirement Barry is now active in the
                      parish during the day and is generally at our church on
                      Tuesday, Wednesday and Thursday.
                    </p>
                    <p>
                      ​Deacon Barry is also Assistant Director of Formation for
                      the Permanent Diaconate in the South East London area.
                    </p>
                    <p>
                      <strong>Contact</strong> Deacon Barry
                    </p>
                  </div>
                </li>
                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div className="section-content-item">
                    <div className="liturgy-item-list pb-4 align-liader">
                      <div className="liturgy-img-item">
                        <Image
                          src={"/assets/images/leader-ship/10.jpg"}
                          width={250}
                          height={166}
                          alt="leader-ship-1"
                        />
                      </div>
                      <div className="liturgy-item-contents">
                        <h4 className="liader-title-2">
                          Deacon Wayne du Preez
                        </h4>
                        <p>
                          Wayne was ordained to the Permanent Diaconate in July
                          2014 but had been active in the parish in youth work
                          and outreach prior to this. He was born and grew up in
                          South Africa, moving to the UK in 2000 and has been in
                          the parish since 2005.
                        </p>
                        <p>
                          Originally baptised into the Presbyterian Church, he
                          converted to Catholicism while at university. He has
                          been married to Linda since 1994 and they have three
                          teenage children (two sons and a daughter).{" "}
                        </p>
                      </div>
                    </div>
                    <p>
                      Deacon Wayne is taking an active role in youth ministry
                      within the parish and deanery and also has responsibility
                      within the clergy team for the Confirmation programme.
                    </p>
                    <p>
                      ​Deacon Barry is also Assistant Director of Formation for
                      the Permanent Diaconate in the South East London area.
                    </p>
                    <p>
                      <strong>Contact</strong> Deacon Wayne du Preez
                    </p>
                  </div>
                </li>
                <li
                  className="section-content-list"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div className="section-content-item">
                    <h2 className="section-title-2">
                      Coordinator for Prayer and Formation
                    </h2>
                    <h2 className="section-title-2">Contact Father Victor</h2>
                    <h2 className="section-title-2 mt-4">Sisters of Mercy</h2>
                    <div className="liturgy-item-list pb-4 align-liader">
                      <div className="liturgy-img-item">
                        <Image
                          src={"/assets/images/leader-ship/12.jpg"}
                          width={236}
                          height={158}
                          alt="leader-ship-1"
                        />
                      </div>
                      <div className="liturgy-item-contents">
                        <h4 className="liader-title-2">Sister Esther Boles</h4>
                        <p>
                          Sister Esther is the sacristan and mainspring of the
                          social life of the parish, coordinating many social
                          and fundraising events as well as being a support to
                          the extraordinary ministers and working in our parish
                          school.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className="section-content-list"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div className="section-content-item">
                    <div className="section-content-item">
                      <h2 className="section-title-2">​Parish Secretary</h2>

                      <div className="liturgy-item-list pb-4 align-liader">
                        <div className="liturgy-img-item">
                          <Image
                            src={
                              "/assets/images/leader-ship/natahsa-wheeler.jpg"
                            }
                            width={131}
                            height={146}
                            alt="leader-ship-1"
                          />
                        </div>
                        <div className="liturgy-item-contents">
                          <h4 className="liader-title-2">Natasha Wheeler</h4>
                          <p>
                            Natasha runs the Parish Office, normally working
                            Monday, Wednesday and Friday from 10.30 am to 3.30
                            pm. She is the administration manager and has charge
                            of the parish diary. Natasha is the first point of
                            contact for parish enquiries.
                          </p>
                          <p>
                            She is helped in the Parish Office by parishioners
                            Janet Welch and Claire Westley.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className="section-content-list"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div className="section-content-item">
                    <Image
                      src={"/assets/images/leader-ship/pcrg-may-2023.jpg"}
                      width={447}
                      height={217}
                      className="pb-4"
                      alt="leader-ship-1"
                    />
                    <p>
                      Every baptised member of Holy Innocents&apos; is
                      co-responsible for the life and mission of the parish. To
                      exemplify this, the PCRG was established in 2013. Its
                      remit includes acting as a leadership group for the
                      parish, and developing and taking forward a pastoral plan
                      aimed at implementing the Parish Vision.
                    </p>
                    <p>
                      PCRG members share responsibility for keeping in contact
                      with the groups and activities involved in different
                      aspects of our parish life. The new PCRG team consists of
                      Fr Victor, Natasha Wheeler, parish secretary. (also
                      parishioner), plus 4 parishioners; Aidan Twomey, Mike
                      Delaney, Jackie Low and Andrea Tutt.
                    </p>
                    <p>
                      ​Areas of responsibility: Aidan — evangelisation Andrea —
                      worship Jackie — fellowship Mike — communication.
                    </p>
                  </div>
                </li>
                {/* <li
                  className="section-content-list"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
<div className="section-content-item"></div>
                
                  <h2 className="section-title-2">Youth Ministry </h2>
                  <p>Left to Right:</p>
                  <p>
                    Ashley Solano Hernandez, Elna Stanley, Nina Noss, (Mike
                    Delaney, Fr Victor Vella), Christopher Plichta, Nicole
                    Sanchez Iriarte, ​Carmina Tutt
                  </p>
                  <Image
                    src={"/assets/images/leader-ship/youth-ministry-2.png"}
                    width={841}
                    height={468}
                    alt="leader-ship-1"
                  />
                </li> */}
              </ul>
              <div>
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

export default LeadershipPage;
