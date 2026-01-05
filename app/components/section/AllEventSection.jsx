"use client";
import React, { useState, useEffect, useCallback } from "react";
import { CiCalendar } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { LuMapPin } from "react-icons/lu";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AllEventSection = () => {
  const [events, setEvents] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const fetchBlogs = useCallback(async (url) => {
    const fetchUrl = url ?? `${baseUrl}/api/events`;
    try {
      setIsLoading(true);
      const response = await fetch(fetchUrl);
      if (!response.ok) throw new Error("Failed to fetch events");
      const data = await response.json();

      // Handle different API response structures
      // API returns: { events: [...] } or paginated: { data: [...], next_page_url: ... }
      const newData = data?.data || data?.events || [];
      
      console.log("API Response:", data); // Debug log
      console.log("Events Data:", newData); // Debug log
      
      setEvents((prev) => {
        const isFirstPage = fetchUrl === `${baseUrl}/api/events`;
        if (isFirstPage) {
          return newData;
        }
        const existingIds = new Set(prev.map((i) => i.id));
        const filtered = newData.filter((i) => !existingIds.has(i.id));
        return [...prev, ...filtered];
      });

      setNextPageUrl(data?.next_page_url || null);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setIsLoading(false);
    }
  }, [baseUrl]);

  useEffect(() => {
    if (!baseUrl) return;
    setEvents([]); // reset before first load
    fetchBlogs(); // load page 1
  }, [baseUrl, fetchBlogs]);

  // Debug: Log events to check if data is coming
  useEffect(() => {
    console.log("Events State:", events);
    console.log("Events Count:", events.length);
  }, [events]);

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
        {events.length === 0 && !isLoading && (
          <div className="text-center py-5">
            <p>No events found.</p>
          </div>
        )}
        <div className="row">
          {events.map((item) => (
            <div className="col-lg-4 col-md-6 mb-4" key={item.id}>
              <div className="event-card">
                <div className="event-image">
                  <img src={item.banner_image} alt={item.title} />
                </div>
                <div className="event-info">
                  <div className="mass-event-contnet-item">
                    <h4>{item.title ? item.title : "N/A"}</h4>
                    <div className="mass-event-date pb-2">
                      <CiCalendar size={24}/>
                      <p>
                        {item.start_date
                          ? new Date(item.start_date).toLocaleDateString(
                              "en-US",
                              {
                                weekday: "long",
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              }
                            )
                          : "N/A"}{" "}
                        {item.end_date &&
                          item.end_date !== item.start_date && (
                            <>
                              -{" "}
                              {new Date(item.end_date).toLocaleDateString(
                                "en-US",
                                {
                                  weekday: "long",
                                  day: "2-digit",
                                  month: "short",
                                  year: "numeric",
                                }
                              )}
                            </>
                          )}
                      </p>
                    </div>
                    <div className="mass-event-date pb-2">
                      <IoMdTime />
                      <p>
                        {item.start_date && item.end_date
                          ? `${new Date(item.start_date).toLocaleTimeString(
                              "en-US",
                              {
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: true,
                              }
                            )} - ${new Date(item.end_date).toLocaleTimeString(
                              "en-US",
                              {
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: true,
                              }
                            )}`
                          : item.start_date
                          ? new Date(item.start_date).toLocaleTimeString(
                              "en-US",
                              {
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: true,
                              }
                            )
                          : "N/A"}
                      </p>
                    </div>
                    <div className="mass-event-date">
                      <LuMapPin />
                      <p>{item.location ? item.location : "N/A"}</p>
                    </div>
                  </div>
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

export default AllEventSection;
