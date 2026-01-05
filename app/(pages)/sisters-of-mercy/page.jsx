import React from "react";
import Banner from "../../components/section/Banner";
import Link from "next/link";
export const metadata = {
  title:
    "Sisters of Mercy at St. Anne&apos;s Convent - Holy Innocents' Catholic Church Orpington",
  description:
    "Welcome to Holy Innocents Catholic Church, a vibrant parish community dedicated to faith, worship, and service. Join us for Mass, events, and spiritual growth.",
  keywords:
    "Holy Innocents, Catholic Church, Parish, Mass Times, Community, Worship, Faith, Events, Spiritual Growth, Ministries, Sacraments",
  icons: {
    icon: "/assets/favicon.png",
  },
};
const SistersOfMercypage = () => {
  const data = {
    title: "Sisters of Mercy at St. Anne's Convent",
  };
  return (
    <>
      <Banner data={data} />
      <section className="leader-ship">
        <div className="container">
          <div className="leader-ship-content">
            <div>
              <ul>
                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">
                    Sisters of Mercy at St. Anne&apos;s Convent
                  </h2>

                  <p>
                    The{" "}
                    <span>
                      <a
                        href="https://www.sistersofmercyunion.org.uk/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Sisters of Mercy{" "}
                      </a>
                    </span>{" "}
                    have been in Orpington for over a century.
                  </p>
                  <p>
                    In 1827, two years before Catholic Emancipation was granted,
                    Catherine McAuley, herself no stranger to poverty, opened a
                    house for the relief of the poor, in Baggot St, Dublin. Her
                    programme of social service included child care, teaching,
                    visitation of the sick, shelter and training for unemployed
                    girls.
                  </p>
                  <p>
                    On 12th December 1831 Catherine founded the largest
                    religious congregation ever established by an
                    English-speaking Catholic.
                  </p>
                  <p>
                    At her death, 11th November 1841, her associates numbered
                    140, 13 branches (two of which were in England) had been
                    sent out, and her Rule had been approved in Rome.
                  </p>
                  <p>
                    We are fortunate to have sisters living in the convent in
                    Bishop Butt Close, just around the corner from Holy
                    Innocents&apos; Catholic Church. They are active in our
                    parish in many ministries, including visiting the sick and
                    housebound, working behind the scenes to keep the church
                    tidy, organising social events and refreshments and helping
                    with children&apos;s activities and at our parish school.
                  </p>
                  <p>
                    Their order is active in Kenya, Peru, England and Wales.
                  </p>
                  <p>
                    One important task is the operation of a clinic and school
                    in Kenya. Sister Vincent Finnerty is responsible for them
                    and receives support from the Orpington Sisters of Mercy.
                  </p>
                  <p>
                    The life of the sisters is especially prayerful with private
                    prayers made individually each morning and night, as well as
                    communal prayers at 8.00 am and 5.30 pm.
                  </p>
                </li>
              </ul>
              <div className="pt-3 d-flex align-items-center justify-content-center">
                <Link href={"/about-us"} className="custom-btn">
                  Return to About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SistersOfMercypage;
