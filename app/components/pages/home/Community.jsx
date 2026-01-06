import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Community = ({ data = {} }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set loading to false when data is available
    // Check if data object has been populated (not just empty object)
    if (data && Object.keys(data).length > 0) {
      setLoading(false);
    } else if (data === undefined) {
      // If data is still undefined, wait a bit then show content anyway
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      // If data is empty object, show content immediately
      setLoading(false);
    }
  }, [data]);

  if (loading) {
    return (
      <section className="community cpb-6">
        <div className="container">
          <div className="row align-items-center" style={{ marginTop: "100px" }}>
            <div className="col-md-6">
              <Skeleton count={2} height={30} style={{ marginBottom: "20px" }} />
              <Skeleton count={4} height={20} style={{ marginBottom: "10px" }} />
              <Skeleton height={50} width={150} />
            </div>
            <div className="col-md-6">
              <Skeleton height={636} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section
        className="community cpb-6"
      
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="community-wrapper">
                <h2 className="section-title">{data?.join_our_community_title}</h2>

                {data?.join_our_community_description && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data.join_our_community_description,
                    }}
                  />
                )}

                <div className="community-btn-group mt-4">
                  <Link href="/#contact" className="custom-btn learn-more-btn">
                    Join Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="community-img">
                <Image
                  src={data?.join_our_community_photo}
                  width={636}
                  height={636}
                  alt="Join Our Community"
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
