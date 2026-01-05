"use client";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

// Swiper Import
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const EventGallery = ({ blogImage }) => {
  const [selectedImage, setSelectedImage] = useState(null); // modal on/off
  const [thumbsSwiper, setThumbsSwiper] = useState(null); // thumbs slider control

  return (
    <>
      {/* Image Grid */}
      <div className="event-gallery-image">
        <div className="event-gallery-image-item">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {blogImage.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="event-gallery-img">
                  <img
                    src={item.image}
                    alt={`Slide ${index + 1}`}
                    style={{ width: "100%", borderRadius: "10px" }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="event-gallery-image-item-2">
          {/* Thumbnail Slider */}
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={6}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
            style={{ marginTop: "15px" }}
          >
            {blogImage.map((item, index) => (
              <SwiperSlide key={index}>
                <img
                  src={item.image}
                  alt={`Thumb ${index + 1}`}
                  style={{
                    width: "100%",
                    borderRadius: "6px",
                    opacity: item.image === selectedImage ? 1 : 0.8,
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default EventGallery;
