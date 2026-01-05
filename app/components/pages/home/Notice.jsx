"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Notice = () => {
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
      className="notice cpy-6"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="container">
        <div className="row">
          {loading ? (
            <p>Loading...</p>
          ) : displayedNotices.length > 0 ? (
            displayedNotices.map((notice) => (
              <div className="col-md-6 col-lg-6 mb-3" key={notice.id}>
                <div
                  className="notice-left"
                  style={{ backgroundColor: notice.card_color || "#ffffff" }}
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
    </section>
  );
};

export default Notice;
