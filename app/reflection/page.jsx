import React from "react";
import BannerImage from "../components/pages/donate/BannerImage";
import HowToFind from "../components/pages/home/HowToFind";
import Community from "../components/pages/home/Community";
import NewsLetter from "../components/pages/home/NewsLetter";
import Image from "next/image";
export const metadata = {
  title: "Holy Innocents' Catholic Church Orpington - Home",
  description:
    "Welcome to Holy Innocents Catholic Church, a vibrant parish community dedicated to faith, worship, and service. Join us for Mass, events, and spiritual growth.",
  keywords:
    "Holy Innocents, Catholic Church, Parish, Mass Times, Community, Worship, Faith, Events, Spiritual Growth, Ministries, Sacraments",
  icons: {
    icon: "/assets/favicon.ico", // or your image path like '/assets/favicon.png'
  },
};

const ReflectionPage = () => {
  return (
    <>
      <BannerImage />

      <section className="cpt-6" data-aos="fade-up" data-aos-duration="3000">
        <div className="container">
          <h2 className="about-section-title reflection-title text-center">
            A parishioner&apos;s gospel reflection
          </h2>
          <div className="reflection-content">
            <div className="reflection-item">
              <div className="reflection-img">
                <Image
                  src="/assets/images/other-image/parable-of-the-mustard-seed1.png"
                  alt="About"
                  width={200}
                  height={261}
                />
                <p className="reflection-shot">Parable of the mustard seed</p>
              </div>
              <div className="reflection-text-content">
                <p>5th October 2025: 27th Sunday of the Year (Cycle C)</p>
                <p>Parishioner’s Gospel</p>
                <p>Contributor: Caroline Grainger</p>
                <br />
                <p>Luke 17:5-10</p>
                <p>
                  This Gospel, at first sight, is puzzling. The disciples ask
                  Jesus to increase their faith - an understandable request -
                  how nice and comfortable they must have thought it would be to
                  never have any doubts. Maybe they thought Jesus would give
                  them a piece of wisdom to fall back on when they were troubled
                  or show them another miracle.
                </p>
                <p>
                  Instead he says, almost dismissively, that if their faith was
                  even as big as a mustard seed they could tell a tree to get up
                  and plant itself in the sea. He then asks if a master would
                  thank a servant for doing his job. The implied answer is of
                  course &apos;no&apos;. 
                </p>
              </div>
            </div>
            <p>
              What he seems to be saying is that a small amount of faith can
              accomplish great things but also not to worry about it. He
              instructs the disciples to carry on doing their duty without
              expecting extra rewards.
            </p>
            <p>
              Even when we have doubts therefore, we should just carry on, doing
              the right thing, loving God through loving our neighbour without
              expecting supernatural displays of acknowledgement. Doing our duty
              has to be enough for us.
            </p>
            <p>
              ​Disappointing perhaps but on balance it&apos;s probably just as
              well we can&apos;t prove our holiness by moving trees around, it
              would be very tempting to show off.
            </p>
            <div className="reflection-text-fild">
              <p>***********************************</p>
              <p>12th October 2025: 28th Sunday of the Year (Cycle C)</p>
              <p>Parishioner’s Gospel</p>
            </div>
            <p>Luke 17: 11-19</p>
            <p>
              In today’s Gospel, ten men with leprosy cry out to Jesus for
              mercy. Their plea is simple but full of faith: “Jesus, Master,
              have mercy on us!” And Jesus, in His compassion, answers them and
              sends them to the priests, and on the way, all of them are healed
              but only one returns to thank Him.
            </p>
            <p>
              Jesus responds not only by acknowledging his gratitude but by
              offering something even greater than physical healing: “Rise and
              go; your faith has saved you.”
            </p>
            <p>
              This tells us that God desires more than just responding to our
              requests. He longs for relationship, for hearts that recognize His
              grace and return in deeper and meaningful gratitude.
            </p>
            <p>
              Many of us find it easy to call out to God in our need. But how
              often do we stop to thank Him when the blessing comes? Do we
              recognize His hand in answered prayers, in healing, in the
              ordinary blessings we encounter we go about of daily life?
            </p>
            <p>
              The Samaritan received a second, deeper healing. His faith and
              gratitude opened him to salvation.
            </p>
            <p>
              May we, too, be like the one who turned to God not only to ask,
              but to thank and worship.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReflectionPage;
