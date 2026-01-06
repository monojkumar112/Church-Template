import Image from "next/image";
import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const NewHere = ({ data }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set loading to false when data is available
    if (data) {
      setLoading(false);
    }
  }, [data]);

  if (loading) {
    return (
      <section className="new-here">
        <div className="container">
          <div className="row align-items-center" style={{ marginTop: "100px" }}>
            <div className="col-md-6">
              <Skeleton height={636} />
            </div>
            <div className="col-md-6">
              <Skeleton count={2} height={30} style={{ marginBottom: "20px" }} />
              <Skeleton count={4} height={20} style={{ marginBottom: "10px" }} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="new-here">
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
