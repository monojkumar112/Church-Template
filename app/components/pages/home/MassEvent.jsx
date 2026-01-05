"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const MassEvent = ({ data }) => {
  const [notices, setNotices] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const [loading, setLoading] = useState(false);

  const fetchNotices = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${baseUrl}/api/notices`);
      const notice = await response.json();

      console.log("API response:", notice); // 👈 check structure

      // Safely set notices
      const fetchedNotices = notice?.data?.data || notice?.data || notice || [];

      setNotices(fetchedNotices);
    } catch (error) {
      console.error("Error fetching notices:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  // Decide how many to show
  const displayedNotices = showAll ? notices : notices.slice(0, 2);
  return (
    <section
      className="mass-event cpt-6 cpb-6"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="container">
        <div className="row">
          {/* Left Content */}
          <div className=" col-lg-6">
            <div className="mass-event-left">
              <h1>{data?.mass_time_title}</h1>
              <div dangerouslySetInnerHTML={{ __html: data?.mass_time_description }} />
              <div className="mass-event-right mass-event-right-iframe" id="event">
                <iframe
                  src="https://holyinnocents.churchsuite.co.uk/embed/calendar?view=agenda&hide=daynames,navigation&theme=light&accent=%234a90e2&font=Inter&preview=false"
                  width="599"
                  height="620"
                  style={{
                    border: "none",
                    borderRadius: "10px",
                    padding: "15px",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.09)",
                  }}
                  frameBorder="0"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-6">
            <div className="row">
              {loading ? (
                <p>Loading...</p>
              ) : displayedNotices.length > 0 ? (
                displayedNotices.map((notice) => (
                  <div className="col-lg-12 mb-3" key={notice.id}>
                    <div
                      className="notice-left"
                      style={{
                        backgroundColor: notice.card_color || "#ffffff",
                      }}
                    >
                      <h2>{notice.title || "No Title Available"}</h2>
                      <div
                        className="parish-content"
                        dangerouslySetInnerHTML={{
                          __html: notice.body ?? "No Content Available",
                        }}
                      />
                    </div>
                  </div>
                ))
              ) : (
                <p>No notices available.</p>
              )}
            </div>

            {notices.length > 2 && (
              <div className="d-flex see-more-btn justify-content-center">
                <Link
                  href="/all-notice"
                  className="custom-btn load-more-btn btn-sm"
                >
                  View All Notices
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section >
  );
};

export default MassEvent;
