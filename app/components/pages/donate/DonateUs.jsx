import Image from "next/image";
import React from "react";

const DonateUs = () => {
  return (
    <>
      <section
        className="donate cpb-6 cpt-7"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="donate-content">
                <h2 className="about-section-title">Donate</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electr
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="donate-img">
                <Image
                  src="/assets/images/donate.png"
                  alt="About"
                  width={509}
                  height={32}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DonateUs;
