"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import Skeleton from "react-loading-skeleton"; // Import skeleton loader
import "react-loading-skeleton/dist/skeleton.css"; // CSS for skeleton loader
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";

const HeroSlider = () => {
  const [carousels, setCarousels] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const fetchCarousels = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/carousels`, {
        cache: "no-store",
      });
      const data = await response.json();
      setCarousels(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching carousels:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (baseUrl) {
      fetchCarousels();
    }
  }, [baseUrl]);

  // 🔹 Show loader while fetching data
  if (loading) {
    return <Skeleton height={768} />;
  }

  console.log("carousels", carousels);

  return (
    <section className="hero-section">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect="fade"
        speed={1500}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {carousels.length > 0 ? (
          carousels.map((carousel, index) => (
            <SwiperSlide key={carousel.id}>
              <div className="slider-item-con">
                <div className="sider-img">
                  {carousel.type === "image" ? (
                    <Image
                      src={carousel.image_path}
                      alt={carousel?.title || "Hero Slide"}
                      width={1920}
                      height={857}
                    />
                  ) : carousel.video_embed ? (
                    <div
                      dangerouslySetInnerHTML={{ __html: carousel.video_embed }}
                    />
                  ) : null}
                </div>

                <div className="slider-content">
                  <h1>
                    {carousel.title ?? "Welcome Holy Innocents Catholic Church"}
                  </h1>
                  <p className="text-white">
                    {carousel.description ??
                      "Join us for worship and community."}
                  </p>

                  {/* 🔹 Client Feedback অনুযায়ী Button Logic */}
                  <div className="slider-item-btn">
                    {index === carousels.length - 1 ? (
                      // 🔸 শেষ স্লাইডে শুধু "Join Us"
                      <Link href="/#contact" className="custom-btn join-us-btn">
                        Join Us
                      </Link>
                    ) : null}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <div className="slider-item-con text-center py-40">
              <h2 className="text-white text-3xl">No slides available</h2>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
