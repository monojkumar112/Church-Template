import Image from "next/image";
import React from "react";

const Touch = ({ data }) => {
  return (
    <>
      <section
        className="touch cpy-6"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="container">
          <div className="touch-wrapper">
            <div className="touch-content">
              <h2 className="section-title">{data?.stay_touch_title}</h2>
              <p>
                {data?.stay_touch_description}
              </p>
              <div className="how-to-find-btn-group">
                <a href="/churchsuite" className="custom-btn get-qucte-btn">
                  Register
                </a>
                <a href="/giftaid" className="custom-btn-alt get-qucte-btn">
                  Gift Aid
                </a>
                <a
                  href="/assets/files/Gift_Aid_QR_Code.pdf"
                  download="Gift_Aid_QR_Code.pdf"
                  className="custom-btn-alt get-qucte-btn"
                >
                  QR Code
                </a>
              </div>
            </div>
            <div className="touch-img">
              <Image
                // {"/assets/images/tach.png"}
                src={data?.stay_touch_photo}
                width={287}
                height={215}
                alt="Touch"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Touch;
