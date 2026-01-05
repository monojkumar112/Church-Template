import Image from "next/image";
import React from "react";

const NewHere = ({ data }) => {
  return (
    <>
      <section className="new-here" data-aos="fade-up" data-aos-duration="3000">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="new-image-left">
                {/* {"/assets/images/new-here.png"} */}
                <Image
                  src={data?.new_here_photo}
                  width={636}
                  height={636}
                  alt="New Here"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="new-here-right">
                <h2 className="section-title">{data?.new_here_title}</h2>
                <div dangerouslySetInnerHTML={{ __html: data?.new_here_description }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewHere;
