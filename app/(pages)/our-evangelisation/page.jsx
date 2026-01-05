import Link from "next/link";
import React from "react";
export const metadata = {
  title:
    "Holy Innocents' Catholic Church - Our Evangelisation - Holy Innocents' Catholic Church Orpington",
  description:
    "Welcome to Holy Innocents Catholic Church, a vibrant parish community dedicated to faith, worship, and service. Join us for Mass, events, and spiritual growth.",
  keywords:
    "Holy Innocents, Catholic Church, Parish, Mass Times, Community, Worship, Faith, Events, Spiritual Growth, Ministries, Sacraments",
  icons: {
    icon: "/assets/favicon.png",
  },
};
const OurEvangelisationPage = () => {
  return (
    <>
      <section className="leader-ship">
        <div className="container">
          <div
            className="leader-ship-content"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="section-content-list">
              <div className="groups-content">
                <h5> Our evangelisation</h5>
                <div className="groups-content-lists">
                  <div className="row">
                    <div className="col-md-6">
                      <p>
                        Go, therefore, and make disciples of all nations,
                        baptising them in the name of the Father, and of the
                        Son, and of the holy Spirit - Jesus, quoted in the 28th
                        chapter of St Matthew’s Gospel
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>
                        Those who have received the Good News and who have been
                        gathered by it into the community of salvation can and
                        must communicate and spread it…[the Church] exists in
                        order to evangelise - Pope Paul VI
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <p>
                ​As ​Christians, we are called to communicate and spread the
                Gospel, the good news of Jesus Christ. That’s what
                &apos;evangelisation&apos; means. It’s a task not just for
                priests and deacons, but for all of us in the Church. It’s what
                the Church is for.
              </p>
              <p>
                We communicate the Gospel in all sorts of ways. By how we live
                our lives. By our patience, generosity and compassion. Our
                honesty and trustworthiness. Our gentleness and our joy. But we
                need to back up our actions with our words. To talk to people
                about how God loves us and them. About our faith in Jesus Christ
                and how it makes a difference in our lives. About how we are
                proud to be Catholic.
              </p>
              <p>
                You can read below about the groups in Holy Innocents’ that are
                dedicated to the work of evangelisation. In a sense, we could
                have included every parishioner and every one of our parish
                groups on this page. Each of them is called to spread the
                Gospel, by what they do and say and how they do and say it.
              </p>
            </div>
            <ul>
              <li
                className="section-content-list "
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <h2 className="section-title-2">Outreach Group</h2>
                <p>
                  ​﻿Originally, the main aim of the group was to support Father
                  Victor in making home visits to as many parishioners as
                  possible. More recently our efforts have been focused on
                  welcoming new parishioners and their families to the parish.
                  We introduced the Parish Contact Card (you have probably seen
                  it in the porch) as a way of encouraging new people to
                  introduce themselves. We have had a really good response to
                  this initiative. Coupled with the many activities taking place
                  at Holy Innocents’, the number of people wishing to join or to
                  become involved in some way has risen and that’s been
                  reflected in the higher number of visits the group made last
                  year.
                </p>
                <p>
                  When visiting parishioners, we normally go out in pairs and
                  before we go out, we pray. Thinking about what makes the
                  visits so special, Margaret one of our long-standing members,
                  said, “It is a privilege to be able to welcome new
                  parishioners to our parish. A personal visit from us means so
                  much to them.” While Claire, a new member, recalled, “The
                  people we visit are always very pleased to see us…At the same
                  time we are able to get to know them a little and learn about
                  their hopes for being part of Holy Innocents. I feel it
                  confirms their welcome to and inclusion in our parish in a
                  personal way and it is something we should definitely aim to
                  continue.”{" "}
                </p>
                <p>
                  The Outreach Group is also responsible for producing the
                  parish Easter and Christmas cards. And, we are indebted to all
                  the parishioners who have supported us and helped to deliver
                  the 6,000 cards at Christmas and at Easter, to the surrounding
                  households.{" "}
                </p>
                <p>
                  Looking ahead, we are arranging a fund-raising concert at Holy
                  Innocents’ on March 2nd for our parishioners their families
                  and friends and all our friends from Churches Together in
                  Orpington.
                </p>
                <p>
                  If you would like to know more about the work of the Outreach
                  Group, or might consider joining it, please contact
                </p>
                <p>
                  ​ <strong>Contact</strong>{" "}
                  <span>
                    <Link href={"/contact-us"}> Father Victor </Link>
                  </span>{" "}
                  or{" "}
                  <span>
                    <Link href={"/contact-us"}>Maria Nethercot </Link>
                  </span>{" "}
                </p>
              </li>
            </ul>
            <div className="pt-3 d-flex align-items-center justify-content-center">
              <Link href={"/mission"} className="custom-btn">
                Back to Our Mission
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurEvangelisationPage;
