import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutSection = () => {
  return (
    <section
      className="about-section cpt-6"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-content">
              <h2 className="about-section-title">Our Story</h2>
              <p>
                Holy Innocents&apos; Chapel was opened in Orpington in 1909 and
                Holy Innocents&apos; became a parish in 1971. We moved down the
                road to our current church premises in 1981. We are privileged
                to have both Holy Innocents&apos; Catholic School and a
                community of the Sisters of Mercy‎ in the parish. 
              </p>
              <p>
                We belong to the Roman Catholic Archdiocese of Southwark, in the
                Bromley Deanery; and in ecumenical terms we are a proud member
                of Churches Together in Orpington. 
              </p>
              <p>
                But if we are to take seriously Saint John Paul II&apos;s
                description of a parish quoted‎ above, it is not these bare,
                institutional facts that define us as a parish. Rather, what
                matters most is what we are like as a family, a fellowship, a
                welcoming home, a community. 
              </p>
              <p>
                We hope that you will get a good sense of that from this
                website, arranged as it is around the different aspects of our
                parish life; and that if you&apos;ve not already done so, you
                will have the opportunity to come and experience our life and
                our welcome in person. 
              </p>
              <Link
                href="/our-parish-vision"
                className="custom-btn learn-more-btn"
              >
                Our Parish Vision
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-img">
              <Image
                src="/assets/images/about.png"
                alt="About"
                width={642}
                height={700}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
