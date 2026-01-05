import React from "react";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "Our Families - Holy Innocents' Catholic Church Orpington",
  description:
    "Welcome to Holy Innocents Catholic Church, a vibrant parish community dedicated to faith, worship, and service. Join us for Mass, events, and spiritual growth.",
  keywords:
    "Holy Innocents, Catholic Church, Parish, Mass Times, Community, Worship, Faith, Events, Spiritual Growth, Ministries, Sacraments",
  icons: {
    icon: "/assets/favicon.png",
  },
};
const FamiliesAndYouthPage = () => {
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
              <h5> Our Families and Youth</h5>
              <p>
                ​Jesus said to them, “Let the children come to me; do not
                prevent them, for the kingdom of God belongs to such as these…”
                Then he embraced them and blessed them, placing his hands on
                them – ​St Mark’s Gospel
              </p>
            </div>
            <p>
              ​​We hope that everyone, from the youngest to the oldest, feels
              welcome at Holy Innocents’ and encouraged to become part of our
              community. This certainly includes young families, of whatever
              shape and size. Like Jesus, we are delighted to have children and
              young people in our midst.
            </p>
            <p>
              Children are welcome at any of our Masses, including during the
              week. We celebrate our Sunday 10.30 am Mass as a Family Mass each
              week, with Children&apos;s Liturgy for children in Reception class
              and upwards.
            </p>
            <p>
              ​We have a monthly &quot;Children&apos;s Mass&quot;, especially
              accessible to younger children, normally on the third Sunday.{" "}
            </p>
            <p>
              Parents are the main teachers of faith to their children; so much
              so that the Catholic Church talks about each family being &quot;a
              domestic church&quot;. That&apos;s why we place families at the
              centre of our work as a parish for children and young people.
            </p>
            <p>
              We try to support parents in fostering the faith development of
              each child and young person within the sacramental life and
              community of our parish. Not just during times of sacramental
              preparation, important though the sacraments are, but throughout
              their childhood and teenage years.{" "}
            </p>
            <p>
              Many parishioners are involved in leading and helping with all of
              this – perhaps you might like to join them in this most rewarding
              of ministries. We take Safeguarding seriously, so each of our
              volunteers is vetted through the Disclosure and Barring Service
              (DBS) process.
            </p>

            <div>
              <ul>
                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">
                    Altar serving and other ministries
                  </h2>
                  <p>
                    We encourage children, particularly once they have received
                    their First Holy Communion, to become involved in parish
                    life. Many of our young people become Altar servers or
                    Readers, or join our Musicians and singers, or become{" "}
                    <span>
                      <Link href={"/liturgy/#welcomers"}>Welcomers.</Link>
                    </span>
                  </p>
                  <div className="father-img">
                    <Image
                      src="/assets/images/pages/img-1487.jpg"
                      alt="Father Victor Vella"
                      width={465}
                      height={349}
                    />
                  </div>
                </li>
                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">
                    Catholic Youth Ministry team
                  </h2>

                  <p>
                    In 2013, a group of parishioners embarked upon a deanery-led
                    Catholic Youth Ministry course, aimed at equipping and
                    energising them to support the growing faith of young people
                    in the parish, seeking to create access to faith
                    opportunities for young people both within and beyond the
                    parish. It also aims to communicate with and support other
                    groups in the parish working with and for young people.
                  </p>
                  <p>
                    Together they have organised various services at Holy
                    Innocents’, including a memorable Youth Mass and wonderful
                    celebrations of the Stations of the Cross during Lent. They
                    have participated with the young people in deanery-wide
                    faith events such as the Christ the King Day, and encouraged
                    participation in other faith opportunities outside the
                    parish. In addition, they have been involved in the launch
                    of the deanery-level Faith in Action award scheme for young
                    people in the parish, which was launched at the beginning of
                    2017.
                  </p>
                  <p>
                    <strong>Contact</strong> via the{" "}
                    <span>
                      <Link href={"/contact-us"}>Parish Office</Link>
                    </span>
                  </p>
                </li>
                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">Children&apos;s Liturgy</h2>

                  <p>
                    Our Children’s Liturgy group is available for children in
                    Reception Class and upwards. They meet during the 10.30 am
                    Mass every Sunday (except for the first Sunday in each month
                    and with a break in August).
                  </p>
                  <p>
                    The children gather in the church, before processing with a
                    catechist to the Father Phelan Centre after the Opening
                    Prayer. There they listen to the Sunday Gospel in a
                    simplified and shortened version, before doing crafts, drama
                    or singing centred around the Gospel reading. A final prayer
                    within the group brings the children back together, before
                    they rejoin their parents in church during the Offertory.​
                  </p>
                  <p>
                    <strong>Contact</strong> Natalie Tanner via the{" "}
                    <span>
                      <Link href={"/contact-us"}>Parish Office</Link>
                    </span>
                  </p>
                </li>
                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">
                    Holy Innocents&apos; Catholic Primary School
                  </h2>
                  <div className="liturgy-item-list pb-4 align-liader">
                    <div className="liturgy-img-item">
                      <Image
                        src={"/assets/images/pages/hi-school-logo_1_orig.jpg"}
                        width={203}
                        height={183}
                        alt="leader-ship-1"
                      />
                    </div>
                    <div className="liturgy-item-contents">
                      <p>
                        Holy Innocents’ is a successful school, with high
                        standards academically and spiritually. The Ofsted and
                        Diocesan inspections in 2017 clearly identified its many
                        strengths and achievements.
                      </p>
                      <p>
                        The school aims to ensure that the children’s spiritual,
                        moral and ethical experiences are not confined to RE
                        lessons but become a way of life.
                      </p>
                    </div>
                  </div>
                  <p>
                    It is fortunate to have experienced, skilful and creative
                    staff working in partnership for the benefit of all pupils.
                    We place great importance on the creative element of the
                    curriculum and encouraging links to be made where possible
                    thus supporting the whole child and enabling access to the
                    curriculum.
                  </p>
                  <p>
                    There is a wide range of clubs before, during and after
                    school, to extend pupils’ sporting and academic interests
                    and to promote a healthy lifestyle. The school also provides
                    on site, before and after school care.
                  </p>
                  <p>
                    There is an active Parents and Friends Association (PFA),
                    which raises money for the school throughout the year.
                    Parents are welcomed into the school in many different
                    capacities; assemblies, plays, reading and school trips.
                  </p>
                  <p>
                    The school prides itself on being a caring and inclusive
                    community with close links to the parishes of Holy
                    Innocents&apos;, St. Michael & All Angels and St. Theresa’s
                    Biggin Hill. It is located within an attractive, green field
                    site with playing fields and separate playgrounds for Early
                    Years, Key Stage 1 and Key Stage 2.
                  </p>
                </li>
                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">Sacramental preparation</h2>
                  <p>
                    ​​As we help parents to nurture the faith of their children
                    as they grow up, the celebration of the sacraments of
                    initiation – Baptism, First Holy Communion and Confirmation
                    – mark important stages on this journey.
                  </p>
                  <p>
                    Our sacramental life page explains how we prepare children,
                    young people and their families for these sacraments.
                  </p>
                  <p>
                    <strong>Contact</strong> Deacon Wayne du Preez
                  </p>
                </li>

                <li
                  className="section-content-list"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">Uniformed groups</h2>

                  <div className="liturgy-item-list">
                    <div className="liturgy-item-contents">
                      <p>
                        We have a very active range of uniformed groups –
                        Rainbows, Brownies and Guides for girls, and Beavers,
                        Cubs and Scouts for boys. The groups meet regularly in
                        the Scout and Guide Hut on the Holy Innocents&apos;
                        School site during term time.
                      </p>
                    </div>
                    <div className="liturgy-img-item">
                      <Image
                        src={"/assets/images/pages/scouts-uk-logo.jpg"}
                        width={140}
                        height={96}
                        alt="leader-ship-1"
                      />
                    </div>
                  </div>
                  <div className="liturgy-item-list">
                    <div className="liturgy-item-contents">
                      <p>
                        We have a very active range of uniformed groups –
                        Rainbows, Brownies and Guides for girls, and Beavers,
                        Cubs and Scouts for boys. The groups meet regularly in
                        the Scout and Guide Hut on the Holy Innocents&apos;
                        School site during term time.
                      </p>
                      <p>
                        The premises are maintained by the Joint Supporters
                        Association who welcome help and support from parents
                        and carers.
                      </p>
                      <p>
                        Visit girlguiding.co.uk or scouts.org.uk for general
                        information.
                      </p>
                    </div>
                    <div className="liturgy-img-item">
                      <Image
                        src={"/assets/images/pages/girl-guiding-logo.gif"}
                        width={155}
                        height={76}
                        alt="leader-ship-1"
                      />
                    </div>
                  </div>
                  <p>
                    <strong>Contact </strong>
                  </p>
                  <p>
                    Dermot Flynn via the{" "}
                    <span>
                      <Link href={"/contact-us"}>Parish Office</Link>
                    </span>{" "}
                    for Scouts
                  </p>
                  <p>
                    via the{" "}
                    <span>
                      <Link href={"/contact-us"}>Parish Office</Link>
                    </span>{" "}
                    for Brownies
                  </p>
                </li>
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

export default FamiliesAndYouthPage;
