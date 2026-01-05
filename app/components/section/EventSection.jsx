"use client";
import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";
import Skeleton from "react-loading-skeleton"; // ✅ Make sure this is installed
import "react-loading-skeleton/dist/skeleton.css";
const EventSection = () => {
  const [blogs, setBlogEvents] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  // selected ministry id for the modal form
  const [selectedMinistryId, setSelectedMinistryId] = useState(null);
  const [selectedMinistry, setSelectedMinistry] = useState(null);

  const fetchBlogs = async (url) => {
    const fetchUrl = url ?? `${baseUrl}/api/blogs`;
    try {
      setIsLoading(true);
      const response = await fetch(fetchUrl);
      if (!response.ok) throw new Error("Failed to fetch blogs");
      const data = await response.json();

      const newData = data?.data || [];
      setBlogEvents((prev) => {
        const isFirstPage = fetchUrl === `${baseUrl}/api/blogs`;
        if (isFirstPage) {
          return newData;
        }
        const existingIds = new Set(prev.map((i) => i.id));
        const filtered = newData.filter((i) => !existingIds.has(i.id));
        return [...prev, ...filtered];
      });

      setNextPageUrl(data?.next_page_url || null);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    if (!baseUrl) return;
    setBlogEvents([]); // reset before first load
    fetchBlogs(); // load page 1
  }, [baseUrl]);

  const getOrdinalSuffix = (day) => {
    const remainderTen = day % 10;
    const remainderHundred = day % 100;
    if (remainderHundred >= 11 && remainderHundred <= 13) return "th";
    if (remainderTen === 1) return "st";
    if (remainderTen === 2) return "nd";
    if (remainderTen === 3) return "rd";
    return "th";
  };

  const formatEventDate = (dateString) => {
    if (!dateString) return "";
    const [yearStr, monthStr, dayStr] = dateString.split("-");
    const dateObj = new Date(
      Number(yearStr),
      Number(monthStr) - 1,
      Number(dayStr)
    );

    const weekday = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
    }).format(dateObj);
    const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
      dateObj
    );
    const suffix = getOrdinalSuffix(Number(dayStr));

    return `${weekday}, ${dayStr}${suffix} of ${month} ${yearStr}`;
  };
  if (isLoading) {
    return (
      <>
        <section className="event-section">
          <div className="container">
            <div className="row">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div className="col-lg-4 col-md-6 mb-4" key={n}>
                  <Skeleton height={400} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <section className="event-section">
      <div className="container">
        <div className="row">
          {blogs.map((item) => (
            <div className="col-lg-4 col-md-6 mb-4" key={item.id}>
              <div className="event-card">
                <div className="event-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="event-info">
                  <p className="event-date">
                    {formatEventDate(item.event_date)}
                  </p>
                  <Link href={`/event/${item.slug}`} className="event-title">
                    {item.title ?? "No title"}
                  </Link>

                  {/* <div
                    className="event-description"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  /> */}

                  <Link className="read-more" href={`/event/${item.slug}`}>
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {nextPageUrl && (
          <div className="mt-3 d-flex justify-content-center w-100 ">
            {/* load more button */}
            <button
              className="custom-btn load-more-btn btn-sm"
              onClick={() => fetchBlogs(nextPageUrl)}
            >
              View More Events
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventSection;
