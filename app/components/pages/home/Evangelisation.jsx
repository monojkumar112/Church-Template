import Image from "next/image";
import Link from "next/link";
import React from "react";

const Evangelisation = ({ data }) => {
  return (
    <>
      <section
        className="evangelisation cpb-6"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="evangelisation-content">
                <h2 className="section-title">{data?.pecs_title}</h2>
                {/* <h5>
                  {data?.pecs_description}
                </h5> */}
                <div
                  dangerouslySetInnerHTML={{ __html: data?.pecs_description }}
                />
                <div className="evangelisation-btn-group">
                  <div className="evangelisation-btn-group-item">
                    <Link
                      href={"/fellowship/parish-evangelisation-cells-pecs"}
                      className="custom-btn learn-more-btn"
                    >
                      Read More
                    </Link>
                  </div>
                  <div className="evangelisation-btn-group-item">
                    <Link
                      href={
                        "https://www.youtube.com/@frvictorvellapecsteachings6138"
                      }
                      className="custom-btn learn-more-btn"
                      target="_blank"
                    >
                      Father Victor Vella PECS Teaching
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="evangelisation-img">
                <img src={data?.pecs_photo} alt="Evangelisation" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Evangelisation;
