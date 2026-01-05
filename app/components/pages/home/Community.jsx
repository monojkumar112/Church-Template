import Image from "next/image";
import Link from "next/link";
import React from "react";

const Community = ({ data = {} }) => {
  const hasHtmlDescription =
    typeof data.join_our_community_description === "string" &&
    data.join_our_community_description.trim() !== "";

  const title = data.join_our_community_title || "";
  const photo = data.join_our_community_photo || "/assets/images/joidn.png";

  return (
    <>
      <section
        className="community cpb-6"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="community-wrapper">
                <h2 className="section-title">{title}</h2>

                {hasHtmlDescription && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data.join_our_community_description,
                    }}
                  />
                )}

                <div className="community-btn-group">
                  <Link href="/#contact" className="custom-btn learn-more-btn">
                    Join Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="community-img">
                <Image
                  src={photo}
                  width={636}
                  height={636}
                  alt="Join"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Community;
