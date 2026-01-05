import React from "react";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title:
    "Holy Innocents' Catholic Church - Social and Support Fellowship - Holy Innocents' Catholic Church Orpington",
  description:
    "Welcome to Holy Innocents Catholic Church, a vibrant parish community dedicated to faith, worship, and service. Join us for Mass, events, and spiritual growth.",
  keywords:
    "Holy Innocents, Catholic Church, Parish, Mass Times, Community, Worship, Faith, Events, Spiritual Growth, Ministries, Sacraments",
  icons: {
    icon: "/assets/favicon.png",
  },
};
const SocialAndSupportPage = () => {
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
              <h5>Social and support groups and activities</h5>
              <p>
                Social and support groups and activities ﻿﻿It’s me… it’s you…
                it’s us… it’s love… it’s Christ who builds community - ​The
                Community Song
              </p>
            </div>
            <p>
              The Community Song, quoted above, is a great favourite at our
              Sunday 10 am Mass. It reminds us in a very vivid way that each of
              us has a part to play in helping everyone – visitors, newcomers,
              existing parishioners – to feel at home in our parish community.
            </p>
            <p>
              Getting to know each other better; having fun together; offering
              support to each other – these are all important elements of
              community building and you can find them in many aspects of our
              parish life. In this section you can find out more about some of
              the groups and activities at Holy Innocents’ which seek to build
              our community in these ways. Newcomers, and new volunteers, are
              always welcome.
            </p>
            <p>​Our regular social and fundraising events include:​</p>
            <ul className="section-content-ul">
              <li className="section-content-li">
                <strong>​Plant Sale</strong>
              </li>
            </ul>
            <p>
              An annual fixture, our Catholic Women’s League plant sale provides
              a chance to buy beautiful and healthy plants for your garden or
              for your house.​
            </p>
            <ul className="section-content-ul">
              <li className="section-content-li">
                <strong>​Cake Sale</strong>
              </li>
            </ul>
            <p>
              What would Christmas be without cake? We usually hold our annual
              cake sale just before Christmas – you can purchase anything from a
              bag of fairy cakes to an old-fashioned Christmas cake. Make sure
              you finish it before Lent!
            </p>
            <ul className="section-content-ul">
              <li className="section-content-li">
                <strong>The annual Parish Day</strong>
              </li>
            </ul>
            <p>
              We hold our annual Parish Day each summer outdoors at Holy
              Innocents’ School (weather permitting). Our whole parish, friends
              and neighbours come together for an open air Mass, followed by a
              shared lunch and games, so you can really make a day of it.
            </p>
            <ul className="section-content-ul">
              <li className="section-content-li">
                <strong>Raffles</strong>
              </li>
            </ul>
            <p>
              To support our many groups we often host a raffle with the support
              of our very generous local businesses and friends. We offer better
              odds than the lottery!
            </p>

            <div>
              <ul>
                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">Bereavement Support Group</h2>
                  <p>
                    Our Bereavement Support Group offers friendship to those who
                    are grieving the death of a loved one, whatever the
                    circumstances. The members of the team are not counsellors
                    but have received training to ensure they listen with
                    empathy.
                  </p>
                  <p>
                    As part of the ministry they attend all the funerals and
                    keep in touch with the next of kin. If anyone would like to
                    talk to one of the team in complete confidence, they can be
                    contacted via the Parish Office and can be assured of a warm
                    welcome.
                  </p>
                  <p>
                    The monthly Healing Mass is another source of consolation
                    for those who are grieving the loss of a loved one. At our
                    annual Mass of Remembrance in November, we read out the
                    names of those who have died during the past year as we
                    light a candle in their memory.
                  </p>
                  <p>
                    Many of our bereaved parishioners have become friends
                    through the Group&apos;s coffee mornings which are
                    advertised in the Newsletter.
                  </p>
                  <p>
                    ​ <strong>Contact</strong> Helen Dwyer co-ordinator....{" "}
                    <a href="mailto:aliceedwyer@aol.co.uk">
                      aliceedwyer@aol.co.uk
                    </a>
                  </p>
                  <p>Thank you</p>
                </li>
                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">Golf Club</h2>
                  <p>
                    Our Holy Innocents’ Golf Club takes advantage of the many
                    golf courses in the Orpington area for friendly matches and
                    periodic competitions.
                  </p>
                  <p>
                    An annual parish Golf Day is held in late May at a local
                    course. It is open to parishioners and guests, who play 27
                    holes and have two competitions, one in the morning and one
                    in the afternoon.
                  </p>
                  <p>
                    <strong>Contact</strong> Nigel de Gruchy via the{" "}
                    <span>
                      <Link href={"/contact-us"}>Parish Office </Link>
                    </span>{" "}
                  </p>
                </li>
                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">
                    Knights of St. Columba and Catenians
                  </h2>
                  <p>
                    The Knights of St Columba (KSC) is a national organisation
                    of Catholic men. It has a long history of involvement in
                    welfare, youth and charity work. The Orpington Council,
                    which covers several local parishes, meets in our
                    neighbouring parish of St. James the Great in Petts Wood on
                    the third Monday of each month.
                  </p>
                  <p>
                    The Catenians provide a social network for Catholic laymen
                    and their families and offer support to members in times of
                    difficulty or need, with ongoing concern for deceased
                    members&apos; widows and dependants. There are local Circles
                    in Bromley and Chislehurst.
                  </p>
                  <p>
                    <strong>Contact</strong>
                    Peter Standen for the KSC; or for the Catenians via the{" "}
                    <span>
                      <Link href={"/contact-us"}>Parish Office </Link>
                    </span>{" "}
                  </p>
                </li>
                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">Refreshments after Mass</h2>
                  <p>Refreshments (Under review)</p>
                  <p>
                    The Catenians provide a social network for Catholic laymen
                    and their families and offer support to members in times of
                    difficulty or need, with ongoing concern for deceased
                    members&apos; widows and dependants. There are local Circles
                    in Bromley and Chislehurst.
                  </p>
                  <p>
                    <strong>Contact</strong>
                  </p>
                </li>
                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">
                    Social and Fundraising Group
                  </h2>
                  <p>
                    We have regular social events in the parish, with the dual
                    aim of having a good time together and raising a bit of
                    money for the parish. Each of these events – some of which
                    take place in the hall of Holy Innocents’ Catholic School or
                    in the Scout Hut in the school grounds – is advertised well
                    in advance in the Newsletter and is open to all.
                  </p>
                  <p>
                    These events include our annual Parish Day, with an outdoor
                    Mass followed by a barbeque, stalls and games for the
                    children; and popular favourites such as race and quiz
                    nights.
                  </p>
                  <p>
                    <strong>Contact</strong> Sister Esther via the{" "}
                    <span>
                      <Link href={"/contact-us"}>Parish Office </Link>
                    </span>{" "}
                  </p>
                </li>
                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">Walkers&apos; Group</h2>
                  <p>
                    One of the longest-running social groups in our parish, the
                    Walkers’ Group usually meets in the afternoon on the second
                    Sunday of each month, with start times varying according to
                    season, for a walk of approximately one and a half to two
                    hours. There is also an all-day walk in the spring.
                  </p>
                  <p>
                    Walking is not only a healthy pursuit, but also an excellent
                    way to meet old friends and make new ones while walking in
                    our beautiful countryside and villages. Why not try it?
                    Suitable footwear (walking boots or shoes, or trainers)
                    should always be worn.
                  </p>
                  <p>
                    Brief details of each walk, with meeting place and name and
                    telephone number for the walk organiser, are published in
                    the Newsletter.
                  </p>
                  <p>
                    <strong>Contact</strong> Val Yeates via the{" "}
                    <span>
                      <Link href={"/contact-us"}>Parish Office </Link>
                    </span>{" "}
                    Sister Esther via the
                  </p>
                </li>
                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">200 Club</h2>
                  <p>
                    One of our most popular fundraising activities, our 200 Club
                    provides members the chance to win some significant prizes
                    while supporting our fundraising for the planned new Parish
                    Complex. A small subscription provides the chance of a win –
                    or the consolation that you are supporting the parish!
                  </p>
                  <p>
                    The draw takes place on the second Sunday of each month,
                    with amounts totalling £200 paid to winners, rising at
                    Christmas and Easter to £1000.
                  </p>

                  <p>
                    <strong>Contact</strong> Steve Pallett (07949 509528 or via
                    the ){" "}
                    <span>
                      <Link href={"/contact-us"}>Parish Office </Link>
                    </span>{" "}
                    Sister Esther via the
                  </p>
                </li>
              </ul>
              <div className="pt-3 d-flex align-items-center justify-content-center">
                <Link href={"/fellowship"} className="custom-btn">
                  Return to Our Fellowship
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SocialAndSupportPage;
