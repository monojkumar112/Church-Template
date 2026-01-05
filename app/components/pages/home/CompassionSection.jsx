"use client";
import Link from "next/link";
import React from "react";

const CompassionSection = () => {
  // Sample images - these should be replaced with actual images from your assets
  const compassionImages = [
    {
      id: 1,
      src: "/assets/images/compassion1.png",
      alt: "Prayer and contemplation",
    },
    {
      id: 2,
      src: "/assets/images/compassion2.png",
      alt: "Church community",
    },
    {
      id: 3,
      src: "/assets/images/compassion3.png",
      alt: "Blessing ceremony",
    },
  ];

  return (
    <>
      <section
        className="compassion-section cpb-6"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="container">
          <div className="compassion-header text-center">
            <p className="compassion-subheadline">SUB-HEADLINE</p>
            <h2 className="section-title compassion-title">
              LOVE AND COMPASSION
            </h2>
            <p className="compassion-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <div className="compassion-btn-wrapper">
              <Link href="/about-us" className="custom-btn compassion-read-more-btn">
                READ MORE
              </Link>
            </div>
          </div>

          <div className="compassion-images-wrapper">
            <div className="row align-items-center">
              {compassionImages.map((image) => (
                <div className="col-md-4 mb-4" key={image.id}>
                  <div className="compassion-image-card">
                    <img
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompassionSection;
