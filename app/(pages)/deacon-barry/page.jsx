import React from "react";
import Banner from "../../components/section/Banner";
import Link from "next/link";
export const metadata = {
  title: "Deacon Wayne du Preez'  - Holy Innocents' Catholic Church Orpington",
  description:
    "Welcome to Holy Innocents Catholic Church, a vibrant parish community dedicated to faith, worship, and service. Join us for Mass, events, and spiritual growth.",
  keywords:
    "Holy Innocents, Catholic Church, Parish, Mass Times, Community, Worship, Faith, Events, Spiritual Growth, Ministries, Sacraments",
  icons: {
    icon: "/assets/favicon.png",
  },
};
const DeaconBarryPage = () => {
  const data = {
    title: "Deacon Wayne du Preez",
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
                  <h2 className="section-title-2">Deacon Barry Chalkley</h2>

                  <p>
                    Was born in Perivale, Middlesex and grew up in Ealing in
                    West London. He moved to Petts Wood when he married Liz in
                    1977 and then to Orpington in 1984, just before the birth of
                    their first child.
                  </p>
                  <p>
                    Barry was brought up in the Church of England but was
                    received into the Catholic Church five years after his
                    marriage. He became steadily more involved in his new church
                    before finally realising that he was being called to a new
                    vocation and was ordained to the Permanent Diaconate on 10th
                    July 2004.
                  </p>
                  <p>
                    Barry works full time as the Finance & Resources Director of
                    a charitable Housing Association, which specialises in
                    housing for disabled people. He and Liz have two sons,
                    Michael and Daniel, and one daughter, Hannah.
                  </p>
                  <p>
                    In between his job, his family and his church work Barry
                    finds time for interests
                  </p>
                </li>
                <li
                  className="section-content-list "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h2 className="section-title-2">Deacon Wayne du Preez</h2>

                  <p>
                    Wayne du Preez was born in 1969 in South Africa, and has one
                    younger brother.
                  </p>
                  <p>
                    Wayne studied Mathematical Statistics and Actuarial Science
                    and graduated with an Honours degree in 1990 from the
                    University of Cape Town. Wayne was baptised in the
                    Presbyterian Church, but converted to Catholicism whilst at
                    university. He spent all of 1991 as a conscript in the South
                    African Defence Force during a time of enormous political
                    change, and became a commissioned officer. He started
                    working as an Actuarial Specialist in a Life Insurance
                    Office in Cape Town in 1992, the same year that he met
                    Linda. They were married in 1994, and gave birth to their
                    two sons, Dominic in 1997 and Nicholas in 1999.
                  </p>
                  <p>
                    They emigrated to England in 2000, settling in Bristol
                    shortly before their daughter Emily arrived later that same
                    year. The family moved to London in 2004 and began attending
                    Holy Innocents’ in 2005 when the children joined Holy
                    Innocents’ Primary School. Wayne was drawn to the Diaconate
                    in 2007, but took several years to discern his vocation
                    before being admitted to Candidacy for the Diaconate in
                    2011.
                  </p>
                  <p>
                    IWayne graduated with a Foundation Degree in Pastoral
                    Ministry from St Mary’s University (Twickenham) in 2014, and
                    is currently studying towards his full BA Degree, expected
                    to be completed in 2015.
                  </p>
                  <p>
                    Wayne now works for National Grid in their London Pensions
                    Department. <br /> In his spare time, Wayne enjoys reading
                    and scuba-diving with his sons when he gets the chance.
                  </p>
                  <p>
                    <strong>Links:</strong> <br />
                    Deacon Wayne&apos;s Ordination
                  </p>
                </li>
              </ul>
              <div className="pt-3 d-flex align-items-center justify-content-center">
                <Link href={"/leadership"} className="custom-btn">
                  Back to Leadership
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DeaconBarryPage;
