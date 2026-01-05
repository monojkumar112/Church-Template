import Image from "next/image";
import Link from "next/link";
import React from "react";

const FatherHere = ({ data }) => {

  return (
    <>
      <section
        className="booking-mass cpt-6 "
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="booking-img">
                {!data?.welcome_photo ? (
                  <div
                    className="placeholder placeholder-wave"
                    style={{
                      width: '636px',
                      height: '636px',
                      display: 'block',
                      maxWidth: '100%'
                    }}
                  ></div>
                ) : (
                  <img
                    src={data?.welcome_photo}

                    alt="Mass"
                  />
                )}
              </div>
            </div>
            <div className="col-md-6">
              <div className="booking-content">
                {!data?.welcome_title ? (
                  <>
                    {/* Bootstrap Skeleton for Title */}
                    <h2 className="section-title father-title-name">
                      <span className="placeholder col-8 placeholder-lg placeholder-wave"></span>
                    </h2>
                    {/* Bootstrap Skeleton for Paragraphs */}
                    <p>
                      <span className="placeholder col-12 placeholder-sm placeholder-wave"></span>
                      <span className="placeholder col-11 placeholder-sm placeholder-wave"></span>
                      <span className="placeholder col-10 placeholder-sm placeholder-wave"></span>
                      <span className="placeholder col-9 placeholder-sm placeholder-wave"></span>
                    </p>
                    <p>
                      <span className="placeholder col-7 placeholder-sm placeholder-wave"></span>
                      <span className="placeholder col-6 placeholder-sm placeholder-wave"></span>
                    </p>
                  </>
                ) : (
                  <>
                    <h2 className="section-title father-title-name">
                      {data?.welcome_title}
                    </h2>

                    <p>
                      <div dangerouslySetInnerHTML={{ __html: data?.welcome_description }} />
                    </p>

                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FatherHere;
