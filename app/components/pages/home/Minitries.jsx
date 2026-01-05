"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import InvolvedForm from "./../../section/InvolvedForm";

const Minitries = ({ data }) => {
  //get ministries from api
  const [ministries, setMinistries] = useState([]);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const [nextPageUrl, setNextPageUrl] = useState(null);

  // selected ministry id for the modal form
  const [selectedMinistryId, setSelectedMinistryId] = useState(null);
  const [selectedMinistry, setSelectedMinistry] = useState(null);

  const fetchMinistries = async (url) => {
    const fetchUrl = url ?? `${baseUrl}/api/ministries`;
    try {
      const response = await fetch(fetchUrl);
      if (!response.ok) throw new Error("Failed to fetch ministries");
      const data = await response.json();

      const newData = data?.ministries?.data || [];
      setMinistries((prev) => {
        const isFirstPage = fetchUrl === `${baseUrl}/api/ministries`;
        if (isFirstPage) {
          // replace on first load to avoid duplicates from double-mounts
          return newData;
        }
        // append but dedupe by id
        const existingIds = new Set(prev.map((i) => i.id));
        const filtered = newData.filter((i) => !existingIds.has(i.id));
        return [...prev, ...filtered];
      });

      setNextPageUrl(data?.ministries?.next_page_url || null);
    } catch (error) {
      console.error("Error fetching ministries:", error);
    }
  };

  React.useEffect(() => {
    if (!baseUrl) return;
    setMinistries([]); // reset before first load
    fetchMinistries(); // load page 1
  }, [baseUrl]);

  return (
    <>
      <section
        className="minitries cpb-6"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="container">
          <div className="minitries-header">
            <h2 className="section-title">
              {data?.ministries_title}
            </h2>
            <p>
              {data?.ministries_description}
            </p>
          </div>
          <div className="minitries-wrapper">
            <div className="row">
              {ministries.map((ministry) => (
                <div className="col-md-6 col-lg-4 mb-4" key={ministry.id}>
                  <div
                    className="minitries-item"
                    style={{ backgroundColor: ministry.color }}
                  >
                    <div className="minitries-img">
                      <Image
                        src={ministry.image_icon ? ministry.image_icon : ""}
                        width={150}
                        height={150}
                        alt={ministry.name}
                      />
                    </div>
                    <div className="minitries-content">
                      <h3>{ministry.name}</h3>
                      <p>{ministry.description}</p>
                      <button
                        onClick={() => {
                          setSelectedMinistryId(ministry.id),
                            setSelectedMinistry(ministry);
                        }}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        className="custom-btn learn-more-btn"
                      >
                        Get Involved
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {nextPageUrl && (
                <div className="mt-3 d-flex justify-content-center w-100 ">
                  {/* load more button */}
                  <button
                    className="custom-btn load-more-btn btn-sm"
                    onClick={() => fetchMinistries(nextPageUrl)}
                  >
                    Load More
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* modal  */}
      <InvolvedForm
        selectedMinistryId={selectedMinistryId}
        selectedMinistry={selectedMinistry}
      />
    </>
  );
};

export default Minitries;
