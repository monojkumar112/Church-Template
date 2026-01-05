"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { CiCalendar } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { LuMapPin } from "react-icons/lu";
import Link from "next/link";

const Upcoming = () => {
  const [allEvents, setAllEvents] = useState([]);
  const [latestEvent, setLatestEvent] = useState(null);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const [loading, setLoading] = useState(true);
  const scrollContainerRef = useRef(null);

  // Fetch all events
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${baseUrl}/api/events`);
        const data = await response.json();

        const events = data?.data || data?.events || [];
        const sortedEvents = events
          .filter((event) => new Date(event.start_date) >= new Date()) // Only upcoming
          .sort((a, b) => new Date(a.start_date) - new Date(b.start_date)); // earliest first

        setAllEvents(sortedEvents);

        if (sortedEvents.length > 0) {
          setLatestEvent(sortedEvents[0]);
        }
      } catch (err) {
        console.error("Error fetching events:", err);
      } finally {
        setLoading(false);
      }
    };

    if (baseUrl) {
      fetchEvents();
    }
  }, [baseUrl]);

  // Marquee animation will be handled by CSS

  if (loading) {
    return (
      <section className="up-coming">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <Skeleton height={525} />
            </div>
            <div className="col-md-6 col-lg-6">
              <Skeleton count={5} height={100} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!latestEvent && allEvents.length === 0) {
    return null;
  }

  return (
    <section className="up-coming">
      <div className="container">
        <div className="row">
          {/* Left Side - Latest Event Banner Image */}
          <div className="col-lg-6">
            <div className="up-coming-left mass-event-left">
              <h1>Upcoming Events</h1>
              {latestEvent && (
                <div className="up-coming-img">
                  <Image
                    height={525}
                    width={657}
                    src={
                      latestEvent.banner_image || "/assets/images/event-1.png"
                    }
                    alt={latestEvent.title || "Latest Event"}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Right Side - All Events List */}
          <div className="col-md-6 col-lg-6">
            <div className="mass-event-right">
              <div className="marquee-container">
                <ul
                  ref={scrollContainerRef}
                  className={` ${allEvents.length >= 3 ? "marquee-track" : ""}`}
                >
                  {allEvents.length > 0 ? (
                    <>
                      {/* Primary set of events */}
                      {allEvents.map((event) => (
                        <li key={event.id}>
                          <div className="mass-event-item">
                            <div className="mass-event-contnet-item">
                              <h4>{event.title ? event.title : "N/A"}</h4>
                              <div className="mass-event-date">
                                <CiCalendar />
                                {/* <p>
                                  {event.start_date
                                    ? new Date(
                                        event.start_date
                                      ).toLocaleDateString("en-US", {
                                        weekday: "long",
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                      })
                                    : "N/A"}{" "}
                                  {event.end_date &&
                                    event.end_date !== event.start_date && (
                                      <>
                                        -{" "}
                                        {new Date(
                                          event.end_date
                                        ).toLocaleDateString("en-US", {
                                          weekday: "long",
                                          day: "2-digit",
                                          month: "short",
                                          year: "numeric",
                                        })}
                                      </>
                                    )}
                                </p> */}
                                <p>
                                  {event.start_date
                                    ? new Date(event.start_date).toLocaleDateString("en-US", {
                                      weekday: "long",
                                      day: "2-digit",
                                      month: "short",
                                      year: "numeric",
                                    })
                                    : "N/A"}

                                  {event.end_date &&
                                    new Date(event.end_date).toDateString() !==
                                    new Date(event.start_date).toDateString() && (
                                      <>
                                        {" - "}
                                        {new Date(event.end_date).toLocaleDateString("en-US", {
                                          weekday: "long",
                                          day: "2-digit",
                                          month: "short",
                                          year: "numeric",
                                        })}
                                      </>
                                    )}
                                </p>


                              </div>
                              <div className="mass-event-date">
                                <IoMdTime />
                                <p>
                                  {event.start_date && event.end_date
                                    ? `${new Date(
                                      event.start_date
                                    ).toLocaleTimeString("en-US", {
                                      hour: "2-digit",
                                      minute: "2-digit",
                                      hour12: true,
                                    })} - ${new Date(
                                      event.end_date
                                    ).toLocaleTimeString("en-US", {
                                      hour: "2-digit",
                                      minute: "2-digit",
                                      hour12: true,
                                    })}`
                                    : event.start_date
                                      ? new Date(
                                        event.start_date
                                      ).toLocaleTimeString("en-US", {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                        hour12: true,
                                      })
                                      : "N/A"}
                                </p>
                              </div>
                              <div className="mass-event-date">
                                <LuMapPin />
                                <p>{event.location ? event.location : "N/A"}</p>
                              </div>
                            </div>
                            <div className="mass-event-img">
                              <Image
                                src={
                                  event.banner_image
                                    ? event.banner_image
                                    : "/assets/images/event-1.png"
                                }
                                width={135}
                                height={135}
                                alt={event.title || "Event"}
                              />
                            </div>
                          </div>
                        </li>
                      ))}
                    </>
                  ) : (
                    <li style={{ padding: "40px 20px", textAlign: "center" }}>
                      <p style={{ color: "#666", fontSize: "16px" }}>
                        No upcoming events found.
                      </p>
                    </li>
                  )}
                </ul>
              </div>
              <div className="events-btn d-flex justify-content-center">
                <Link href="/event" className="custom-btn">
                  Recent Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upcoming;
