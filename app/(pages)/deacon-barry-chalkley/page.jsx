import React from "react";
import Banner from "../../components/section/Banner";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "Deacon Barry Chalkley - Holy Innocents' Catholic Church Orpington",
  description:
    "Welcome to Holy Innocents Catholic Church, a vibrant parish community dedicated to faith, worship, and service. Join us for Mass, events, and spiritual growth.",
  keywords:
    "Holy Innocents, Catholic Church, Parish, Mass Times, Community, Worship, Faith, Events, Spiritual Growth, Ministries, Sacraments",
  icons: {
    icon: "/assets/favicon.png",
  },
};
const fatherVictorVellapage = () => {
  const data = {
    title: "Deacon Barry Chalkley",
  };
  return (
    <>
      <Banner data={data} />
      <section className="leader-ship">
        <div className="container">
          <div
            className="leader-ship-content"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="father-img">
              <Image
                src={"/assets/images/leader-ship/deocaon.jpg"}
                alt="Deacon Barry Chalkley"
                width={1250}
                height={743}
              />
            </div>
            <p>
              Was born in Perivale, Middlesex and grew up in Ealing in West
              London. He moved to Petts Wood when he married Liz in 1977 and
              then to Orpington in 1984, just before the birth of their first
              child.
            </p>
            <p>
              Barry was brought up in the Church of England but was received
              into the Catholic Church five years after his marriage. He became
              steadily more involved in his new church before finally realising
              that he was being called to a new vocation and was ordained to the
              Permanent Diaconate on 10th July 2004.
            </p>
            <p>
              Barry works full time as the Finance & Resources Director of a
              charitable Housing Association, which specialises in housing for
              disabled people. He and Liz have two sons, Michael and Daniel, and
              one daughter, Hannah.
            </p>
            <p>
              In between his job, his family and his church work Barry finds
              time for interests
            </p>
            <div className="pt-3 d-flex align-items-center justify-content-center">
              <Link href={"/leadership"} className="custom-btn">
                Back to Leadership
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default fatherVictorVellapage;
