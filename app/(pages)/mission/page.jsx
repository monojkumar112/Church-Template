import Link from "next/link";
import React from "react";
export const metadata = {
  title:
    "Holy Innocents' Catholic Church - Our Mission - Holy Innocents' Catholic Church Orpington",
  description:
    "Welcome to Holy Innocents Catholic Church, a vibrant parish community dedicated to faith, worship, and service. Join us for Mass, events, and spiritual growth.",
  keywords:
    "Holy Innocents, Catholic Church, Parish, Mass Times, Community, Worship, Faith, Events, Spiritual Growth, Ministries, Sacraments",
  icons: {
    icon: "/assets/favicon.png",
  },
};
const MissionPage = () => {
  return (
    <>
      {" "}
      <section className="leader-ship">
        <div className="container">
          <div
            className="leader-ship-content"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="groups-content">
              <h5> Our mission</h5>
              <p>
                Let us go forth, then, let us go forth to offer everyone the
                life of Jesus Christ. Here I repeat to the entire Church what I
                have often said to the priests and laity of Buenos Aires: I
                prefer a Church which is bruised, hurting and dirty because it
                has been out on the streets, rather than a Church which is
                unhealthy from being confined and clinging to its own security…
                If something should rightly disturb us and trouble our
                consciences, it is the fact that so many of our brothers and
                sisters are living without the strength, light and consolation
                born of friendship with Jesus Christ, without a community of
                faith to support them, without meaning and a goal in life -{" "}
                <small>Pope Francis</small>
              </p>
            </div>
            <p>
              It takes a lot of effort to keep a church going. There are always
              Masses to be arranged, sermons to be written, floors to be swept,
              bills to be paid, light bulbs to be changed, meetings to be
              attended – and as you can see from this website, a hundred and one
              other things to do.
            </p>
            <p>
              So much to do, in fact, that it’s easy to lose sight of what the
              Church is really about. What it’s here for.
            </p>
            <p>
              Which is to do God’s work in the world: spread His word; build His
              Kingdom. This is the mission of Christ’s Church; so it is our
              mission too, here at Holy Innocents’. On these pages of our
              website, you can learn more about how we are trying to carry it
              out:
            </p>
            <p>
              <strong>
                <Link href={"/our-evangelisation"}>Our evangelisation</Link>
              </strong>
            </p>
            <p>
              <strong>
                <Link href={"/our-evangelisation"}>​Our social action </Link>
              </strong>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionPage;
