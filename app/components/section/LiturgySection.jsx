import Image from "next/image";
import Link from "next/link";
import React from "react";

const LiturgySection = () => {
  return (
    <section
      className="about-section cpt-6"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="about-content">
              <h2 className="about-section-title">liturgy</h2>
              <p>
                The celebration of the Eucharist and other liturgical services
                with reverence and joy is at the centre of our parish life.
              </p>
              <p>
                We are fortunate to have Mass said at Holy Innocents’ almost
                every day. Each weekend we have a vigil Mass on Saturday evening
                (at 6 pm) and three Masses on Sunday (8 am, 10.30 am and 6 pm).
                See the diary in our weekly newsletter for up-to-date Mass
                times.
              </p>
              <p>
                You will find that each of our Masses has a distinct atmosphere,
                from the quiet reverence of our weekday Masses and the
                reflective calm of the Sunday 8 am Mass to the lively and joyful
                bustle of our family Mass at 10.30 am on Sundays.
              </p>
              <p>
                Our parish organist often leads singing at the 6 pm vigil Mass
                on Saturday evening, with the Parish Choir on the fourth
                Saturday of each month. Outside holiday times there is always
                singing at our 6 pm Mass on Sunday, which might be described as
                gently charismatic, as well as at the Sunday 10.30 am Mass.
              </p>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about-img">
              <Image
                src="/assets/images/liturgy.png"
                alt="About"
                width={608}
                height={769}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiturgySection;
