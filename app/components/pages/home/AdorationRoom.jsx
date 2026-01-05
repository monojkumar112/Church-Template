import Image from "next/image";
import React from "react";

const AdorationRoom = ({ data }) => {
  return (
    <>
      <section
        className="adoration-room"
        id="adoration-room"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="adoration-img">
                <img
                  // {"/assets/images/charis.png"}
                  src={data?.adoration_room_photo}
                  alt="Adoration Room"

                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="adoration-content">
                <h2> {data?.adoration_room_title} </h2>
                <div dangerouslySetInnerHTML={{ __html: data?.adoration_room_description }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdorationRoom;
