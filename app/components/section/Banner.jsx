import Link from "next/link";
import React from "react";

const Banner = ({ data }) => {
  return (
    <section className="banner" data-aos="fade-up" data-aos-duration="3000">
      <div className="container">
        <div className="banner-wrapper">
          <h1 className="banner-title">{data?.title}</h1>
          <p className="banner-text">{data?.description}</p>

          {(data?.btnText1 || data?.btnText2) && (
            <div className="banner-item-btn">
              {data?.btnText1 && (
                <Link
                  href={data?.urlLink1}
                  className="custom-btn learn-more-btn"
                >
                  {data?.btnText1}
                </Link>
              )}
              {data?.btnText2 && (
                <Link
                  href={data?.urlLink2}
                  className="custom-btn-alt learn-more-btn"
                >
                  {data?.btnText2}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Banner;
