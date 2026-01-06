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
                    className="minitries-item-modern"
                    style={{ 
                      backgroundColor: ministry.color || '#f8f3ed'
                    }}
                    data-color={ministry.color || '#f8f3ed'}
                  >
                    <div className="minitries-img-modern">
                      <div className="minitries-icon-wrapper">
                        <Image
                          src={ministry.image_icon || "/assets/images/default-icon.png"}
                          width={120}
                          height={120}
                          alt={ministry.name}
                          className="minitries-icon"
                        />
                      </div>
                    </div>
                    <div className="minitries-content-modern">
                      <h3 className="minitries-name-modern">{ministry.name}</h3>
                      <p className="minitries-description-modern">{ministry.description}</p>
                      <button
                        onClick={() => {
                          setSelectedMinistryId(ministry.id),
                            setSelectedMinistry(ministry);
                        }}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        className="custom-btn learn-more-btn minitries-btn-modern"
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
