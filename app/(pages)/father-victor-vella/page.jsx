import React from "react";
import Banner from "../../components/section/Banner";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "Father Victor Vella - Holy Innocents' Catholic Church Orpington",
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
    title: "Father Victor Vella",
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
                src={"/assets/images/leader-ship/father.png"}
                alt="Father Victor Vella"
                width={1250}
                height={743}
              />
            </div>
            <p>
              Victor Vella was born to Gregory and Nazzarena on 8th September
              1961 at Victoria, Gozo, the sister island of Malta, being the
              fourth of five children.
            </p>
            <p>
              In 1978, he commenced his studies for the priesthood in philosophy
              and theology. <br /> He graduated in philosophy at the Pontifical
              University of St Thomas, Rome, in 1983. <br /> After resuming his
              theological studies at the Sacred Heart Seminary in Gozo and was
              ordained on 28th June 1986 at the Cathedral in Victoria.
            </p>
            <p>
              Following his ordination, Father Victor was seconded by his bishop
              to the archdiocese of Westminster where he served two tenures of
              curacy in Chiswick and Wembley.
            </p>
            <p>
              Upon being awarded a scholarship to Oxford University in 1988, he
              studied for a Masters in Philosophy and Political Science whilst
              residing at Campion Hall – the scholarly residence of the Jesuit
              Community at Oxford.
            </p>
            <p>
              On completion, he went to the School of Oriental and African
              Studies (SOAS), University of London, where he gained a
              postgraduate certificate in comparative politics of the Middle
              East.
            </p>
            <p>
              In 1991, Fr Victor was seconded to the archdiocese of Southwark to
              serve two tenures of curacy in West Croydon and Beckenham. He was
              appointed parish priest of Our Lady of the Assumption, Northfleet,
              in April 1997. Whilst serving the parish, he pursued his interest
              in study by pursuing courses in Biblical Hebrew at Heythrop
              College and University College London (UCL).
            </p>
            <p>
              After serving ten years as a parish priest, he decided to take a
              study sabbatical in 2007 to deepen his knowledge in Biblical
              Hebrew and New Testament Greek at the Pontifical Institute of
              Biblical Studies, whilst residing at the Venerable English College
              in Rome before moving to Jerusalem for his second academic term.
            </p>
            <p>
              It was during his sojourn there that he was appointed parish
              priest to Holy Innocents&apos;, Orpington. On 7th November 2008,
              Father Victor was inducted by the Right Reverend Patrick Lynch,
              Auxiliary Bishop of Southwark.
            </p>
            <p>
              Father Victor remains very keen on Judaism and Biblical Hebrew.{" "}
            </p>
            <p>
              To mark his twenty fifth anniversary of ordination, he returned to
              Jerusalem in June/July 2011, to undertake a course in biblical
              studies at Bat Kol Institute. (A centre founded in 1983 for the
              study of the Word of God within its Jewish milieu, using Jewish
              sources, ancient and modern, with the help of Jewish and Christian
              scholars.)
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
