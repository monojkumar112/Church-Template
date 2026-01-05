import Image from "next/image";
import React from "react";

const ParishCentre = ({ data }) => {
  return (
    <>
      <section
        className="parish-centre"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="parish-contentss">
                <h2 className="section-title">{data?.father_phelan_title}</h2>

                {/* {data?.father_phelan_description} */}
                <div dangerouslySetInnerHTML={{ __html: data?.father_phelan_description }} />

                <div className="parish-btn-group-wrap d-flex align-items-center gap-3">
                  {/* <div className="parish-btn-group">
                    <a
                      href="mailto:victorvella@rcaos.org.uk"
                      className="custom-btn learn-more-btn"
                    >
                      Book the Centre
                    </a>
                  </div> */}
                  <div className="parish-btn-group">
                    <a
                      href="https://lowcosthalls.co.uk/location/holy-innocents-church-hall-orpington/"
                      className="custom-btn learn-more-btn"
                    >
                      Virtual Tour
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="parish-img">
                <Image
                  // "/assets/images/parish.png"
                  src={data?.father_phelan_photo}
                  width={636}
                  height={404}
                  alt="Parish"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ParishCentre;
