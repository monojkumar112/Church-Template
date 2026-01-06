import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BookingMass = ({ data }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set loading to false when data is available
    if (data) {
      setLoading(false);
    }
  }, [data]);

  if (loading) {
    return (
      <section className="booking-mass">
        <div className="container">
          <div className="row align-items-center" style={{ marginTop: "100px" }}>
            <div className="col-md-6">
              <Skeleton count={3} height={30} style={{ marginBottom: "20px" }} />
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
        className="booking-mass"
    
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="booking-content">
                <h2 className="section-title">{data?.mass_offer_title}</h2>


                <div dangerouslySetInnerHTML={{ __html: data?.mass_offer_description }} />


                <div className="booking-btn-group mt-4">
                  <Link
                    href={"/mass-offering"}
                    className="custom-btn learn-more-btn"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="booking-img">
                <Image
                  src={data?.mass_offer_photo}
                  width={636}
                  height={636}
                  alt="Mass"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingMass;
