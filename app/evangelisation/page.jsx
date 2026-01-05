import React from "react";
import Banner from "../components/section/Banner";
import Image from "next/image";
import HowToFind from "../components/pages/home/HowToFind";
import Community from "../components/pages/home/Community";
import NewsLetter from "../components/pages/home/NewsLetter";
export const metadata = {
  title: "PECS - Holy Innocents' Catholic Church Orpington",
  description:
    "Welcome to Holy Innocents Catholic Church, a vibrant parish community dedicated to faith, worship, and service. Join us for Mass, events, and spiritual growth.",
  keywords:
    "Holy Innocents, Catholic Church, Parish, Mass Times, Community, Worship, Faith, Events, Spiritual Growth, Ministries, Sacraments",
  icons: {
    icon: "/assets/favicon.ico", // or your image path like '/assets/favicon.png'
  },
};

const EvangelisationPage = () => {
  const data = {
    title: "Parish Evangelisation Cells (PECS)",
    description: `At Holy Innocents’ we have embraced a specific form of evangelisation known as the Parish Evangelisation Cell System (PECS). "The PECS System is not about groups but is a way of life." Learn more about PECS at Holy Innocents’ — contact Bob Skudder at robertskudder@sky.com.`,
  };

  return (
    <>
      <Banner data={data} />
      <section
        className="cpy-6 evangelisation-single-page"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="evangelisation-contents">
                <h1 className="evangelisation-title">
                  Parish Evangelisation Cells
                </h1>
                <p>
                  Then after that it could have the remaining text as below: 
                </p>
                <p className="evangelisation-text">
                  The parish is the presence of the Church in a given territory,
                  an environment for hearing God’s word, for growth in the
                  Christian life, for dialogue, proclamation, charitable
                  outreach, worship and celebration. In all its activities the
                  Parish encourages and trains its members to be evangelisers…
                  It is a centre of constant missionary outreach – Pope Francis
                </p>
                <p>
                  It is easy for a church community to become inward-looking, to
                  focus on what is needed to maintain its own existence. But
                  Jesus calls us to be outward-looking, to proclaim His message
                  to the world, to build the Kingdom of God. Pope Francis echoes
                  that call, urging each parish to be “a centre of constant
                  missionary outreach”. As some people have put it, parishes
                  need to move “from maintenance to mission”.
                </p>
                <p>
                  That is what we are trying to achieve under Father Victor’s
                  leadership at Holy Innocents’. As a key part of doing so, we
                  have embraced a specific form of evangelisation known as the
                  Parish Evangelisation Cell System (PECS). On this page, you
                  can learn more about PECS at Holy Innocents’ – how the cells
                  work, what they are seeking to achieve, how PECS fits into the
                  life of our parish. We start by looking back to how parish
                  evangelisation cells came to be established at Holy
                  Innocents’.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="evangelisation-img">
                <Image
                  src={"/assets/images/evangelisation.png"}
                  width={283}
                  height={655}
                  alt="Evangelisation"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-content">
        <div className="container">
          <div className="section-wrapper">
            <ul>
              <li
                className="section-content-list"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <h2 className="section-title-2">
                  How did PECS come to Holy Innocents’?
                </h2>
                <p>
                  Back in 2012, Father Victor was thinking about the future
                  direction of Holy Innocents’. How could we move forward as a
                  parish focused on mission, rather than maintenance?
                </p>
                <p>
                  He visited St Eustorgio&apos;s parish in Milan, the home of
                  parish evangelisation cells in Europe. He was so impressed, he
                  soon went back with a group of Holy Innocents’ parishioners.
                  Like him, they were inspired by the Parish Evangelisation Cell
                  System and the impact it was clearly having on St Eustorgio’s.
                  So it was decided to explore the possibility of starting PECS
                  at Holy Innocents’.
                </p>
                <p>
                  This could not be done in a vacuum. The Parish Evangelisation
                  Cell System emphasises the importance not only of small
                  groups, but also of Eucharistic Adoration and the regular
                  proclamation of the “kerygma”, the basic truths of the Gospel.
                  Also, Father Victor wanted to introduce PECS alongside other
                  aspects of the “mission, not maintenance” model, in particular
                  the development of a culture of co-responsibility.
                </p>
                <p>
                  So a two-year period of prayer and preparation ensued. Cell
                  leaders were trained. The Adoration Room was opened, to help
                  to establish a culture of Eucharistic Adoration in the parish.
                  Father Victor published our Parish Vision. The Parish
                  Co-responsibility Group was formed.
                </p>
                <p>
                  And finally, on the feast of Saints Peter and Paul in June
                  2014, four parish evangelisation cells were launched. With
                  steady growth since the launch of those first cells in 2014,
                  we now have six cells with around 60 members in total.
                </p>
                <p>
                  It is with sadness we report the death of the founder of PECS
                  in Europe, Don Pigi Perini on 19 November 2020  here Revisit
                  Requiem Mass on 21 November  
                  <span>
                    <a
                      href="https://www.youtube.com/watch?v=lPWWgHIN1c4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      here 
                    </a>
                  </span>
                </p>
              </li>
              <li
                className="section-content-list"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <h2 className="section-title-2">
                  What is a parish evangelisation cell? 
                </h2>
                <p>
                  A parish evangelisation cell is a group of up to 12 people.
                  Each cell meets fortnightly, normally in a member&apos;s home,
                  for about 90 minutes. The members pray and praise God
                  together. They talk about praying for, serving and reaching
                  out with the Gospel to their “oikos” – family, friends,
                  neighbours, school friends, workmates.
                </p>
                <p>
                  They watch a video of scripture-based teaching from Father
                  Victor. You can find these teaching videos on You Tube.
                </p>
                <p>
                  Cells are encouraged to grow, by inviting people to come along
                  to their meetings, to experience the joy of Christian
                  fellowship. When there are more than 12 members in a cell, it
                  divides and forms two cells. This organic process of growth
                  and division explains why they are called “cells”.
                </p>
                <p className="section-text-color">
                  Parish Evangelisation Cells shift the parish from a
                  “self-referential” or “self-absorbed” group model to a
                  “missionary” one and challenges us (in the words of Pope
                  Francis) “to go forth from our own comfort zone in order to
                  reach all the peripheries in need of the light of the Gospel” 
                </p>
              </li>
              <li
                className="section-content-list"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <h2 className="section-title-2">
                  What are parish evangelisation cells for?
                </h2>
                <p>The cells have a number of aims:</p>
                <ul className="section-content-ul">
                  <li className="section-content-li">
                    helping cell members to deepen their faith, growing in
                    intimacy with God and becoming more open to His work in
                    their lives. In other words, they develop missionary
                    disciples
                  </li>
                  <li className="section-content-li">
                    helping cell members to grow in friendship and intimacy with
                    each other. They are like extended families; an example of
                    the “small communities” talked about in our Parish Vision
                  </li>
                  <li className="section-content-li">
                    encouraging and helping cells members to evangelise – to
                    pray for, serve and proclaim the Good News to the people
                    around them. This leads to invitations to people to come and
                    experience a cell meeting or to join in another parish
                    activity, such as Alpha or Friday Club
                  </li>
                  <li className="section-content-li">
                    developing new leaders for the cells and for the parish
                  </li>
                  <li className="section-content-li">
                    deepening the Catholic identity of cell members and
                    encouraging their involvement in ministry in the parish.
                  </li>
                </ul>
              </li>
              <li
                className="section-content-list"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <h2 className="section-title-2">
                  How is PECS run in the parish?
                </h2>
                <p>
                  Each cell has a leader and co-leader, chosen by Father Victor.
                  One of the aims of the cells is to develop new leaders and
                  co-leaders, to allow new cells to be established as the
                  existing ones grow.
                </p>
                <p>
                  The Parish Evangelisation Cell System is supervised by Father
                  Victor, with the help of a small administrative team. There
                  are regular meetings of the “PECS Secretariat”, comprising
                  Father Victor, the administrative team and all of the cell
                  leaders and co-leaders.
                </p>
                <p>
                  Father Victor records his teaching for each cycle of cell
                  meetings with the help of one of the leaders. Going forward,
                  he is hoping to encourage the cell leaders to take on some of
                  the cell teaching themselves, using the library of material
                  that he has produced.
                </p>
                <p className="section-text-color">
                  The Parish Evangelisation Cells are not another programme or
                  group in the parish, but a model of a missionary outreach
                  Church in a given territory; the Parish Evangelisation Cell
                  System is the parish in “constant exodus, pilgrimage and
                  exile” 
                </p>
              </li>
              <li
                className="section-content-list"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <h2 className="section-title-2">
                  How PECS fits into the parish
                </h2>
                <p>
                  Our Parish Vision encourages us to cherish the things that we
                  love about Holy Innocents’. We celebrate all of the good work
                  which has been done, and is still being done, in the parish in
                  His name. We thank God for each of the many people, past and
                  present parishioners, involved in that work.
                </p>
                <p>
                  The Parish Vision also encourages us to move forward,
                  “building on our history and our strengths” and “stepping out
                  in faith in radically new ways as we attempt to become the
                  parish we are called to be”.
                </p>
                <p>
                  That is where the Parish Evangelisation Cell System fits in.
                  Because in many ways, the parish evangelisation cells serve as
                  a model, a seedbed for what we are trying to become as a
                  parish:
                </p>
                <ul className="section-content-ul">
                  <li className="section-content-li">
                    <strong>Inclusive:</strong> anyone, inside or outside the
                    parish, is welcome to visit or join a cell. But membership
                    is entirely voluntary
                  </li>
                  <li className="section-content-li">
                    <strong> Small community:</strong> forming an intimate small
                    community offering fellowship, love and support to cell
                    members
                  </li>
                  <li className="section-content-li">
                    <strong>Rooted in prayer:</strong> encouraging cell members
                    to be rooted in prayer, and particularly in Eucharistic
                    Adoration
                  </li>
                  <li className="section-content-li">
                    <strong>Developing disciples:</strong> seeking to deepen the
                    faith of cell members so that they become missionary
                    disciples, fired up with the love of Jesus Christ
                  </li>
                  <li className="section-content-li">
                    <strong>Nurturing evangelisation:</strong> nurturing and
                    supporting cell members as they reach out with the Gospel to
                    those around them
                  </li>
                  <li className="section-content-li">
                    <strong>Encouraging co-responsibility:</strong> encouraging
                    cell members to play a full and active role in the life of
                    the parish
                  </li>
                  <li className="section-content-li">
                    <strong> Fostering a culture of welcome:</strong> fostering
                    a culture of meeting people where they are and welcoming
                    them into our community.
                  </li>
                </ul>
                <p>
                  It is important to realise that evangelisation cells do not
                  seek to replace or supplant any of the many groups and
                  activities at Holy Innocents’.  Quite the contrary. Many of
                  our existing groups and activities have been strengthened by
                  the enthusiasm and commitment of cell members.
                </p>
                <p>
                  And some of our newer initiatives, such as Alpha, A Listening
                  Ear and the Friday Club, might not have got off the ground
                  without them. In a striking image, Father Victor talks of cell
                  members acting as “leaven” in the life of the parish.
                </p>
              </li>
              <li
                className="section-content-list"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <h2 className="section-title-2">The wider context</h2>
                <p>
                  The Parish Evangelisation Cell System has been adopted by
                  parishes in various parts of the world. We send a group to an
                  international conference about PECS at St Eustorgio&apos;s
                  parish in Milan each year.
                </p>
                <p>
                  In 2012, the founder and promoter of PECS in Europe, Dom Pigi
                  Peroni, commissioned Father Victor to oversee parish
                  evangelisation cells in England. As a result, we receive and
                  respond to many enquiries about PECS from around the country.
                  Since 2015, Father Victor has also been a member of the PECS
                  International Commission for Formation.
                </p>
                <p>
                  On Divine Mercy Sunday, 12 April 2015, the Pontifical Council
                  for the Laity formally approved Parish Evangelisation Cells
                  (PECS) as a model/mechanism for evangelisation and as such,
                  the PECS now form a judicial entity of the Catholic Church. 
                </p>
                <p className="section-text-color">
                  This official recognition of PECS was celebrated in September
                  2015, at an audience in Rome with Pope Francis. Many cell
                  members from Holy Innocents’ attended this papal audience,
                  along with thousands of others from cells around the world.
                </p>
              </li>
              <li
                className="section-content-list"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <h2 className="section-title-2">How to find out more</h2>
                <h4 className="section-text-second">
                  Every Christian is a missionary to the extent that he or she
                  has encountered the love of God in Christ Jesus: we no longer
                  say that we are “disciples” and “missionaries”, but rather
                  that we are always “missionary disciples” – Pope Francis
                </h4>
                <h2 className="section-titlee-2">
                  Archbishop John Wilson of Southwark attended  a Parish
                  Evangelisation Cell (PECS) meeting 28 April 2021 
                </h2>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="cpt-6">
        <HowToFind
          data={{
            find_us_title: "",
            find_us_description: "",
            find_us_photo: "/assets/images/map.png",
          }}
        />
      </div>
      <div className="cpt-6">
        <Community
          data={{
            join_our_community_title: "",
            join_our_community_description: "",
            join_our_community_photo: "/assets/images/joidn.png",
          }}
        />
      </div>
      <NewsLetter />
    </>
  );
};

export default EvangelisationPage;
