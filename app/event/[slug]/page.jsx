"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import Skeleton from "react-loading-skeleton"; // Import skeleton loader
import "react-loading-skeleton/dist/skeleton.css";
import EventGallery from "../../components/section/EventGallery";
const EventsPage = ({ params }) => {
  // Example event data (replace with your API later)
  const allEvents = [
    {
      id: 1,
      title: "A Celebration of the Rosary by the Filipino Community",
      date: "31st October 2025",
      image: "/assets/images/event.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic perspiciatis laudantium temporibus neque enim quia iste quam tenetur velit similique illum atque",
    },
    {
      id: 2,
      title:
        "Annual Parish Picnic and Family Gathering  and Family Gathering  and Family Gathering",
      date: "15th November 2025",
      image: "/assets/images/event.jpg",
      description:
        "Join us for a day of fun, food, and fellowship at the parish picnic! Everyone is welcome to bring family and friends.",
    },
    {
      id: 3,
      title: "Christmas Eve Mass and Carol Singing",
      date: "24th December 2025",
      image: "/assets/images/event.jpg",
      description:
        "Celebrate the joy of Christmas with a beautiful Mass followed by carols and refreshments in the parish hall.",
    },
    {
      id: 3,
      title: "Christmas Eve Mass and Carol Singing",
      date: "24th December 2025",
      image: "/assets/images/event.jpg",
      description:
        "Celebrate the joy of Christmas with a beautiful Mass followed by carols and refreshments in the parish hall.",
    },
    {
      id: 3,
      title: "Christmas Eve Mass and Carol Singing",
      date: "24th December 2025",
      image: "/assets/images/event.jpg",
      description:
        "Celebrate the joy of Christmas with a beautiful Mass followed by carols and refreshments in the parish hall.",
    },
    {
      id: 3,
      title: "Christmas Eve Mass and Carol Singing",
      date: "24th December 2025",
      image: "/assets/images/event.jpg",
      description:
        "Celebrate the joy of Christmas with a beautiful Mass followed by carols and refreshments in the parish hall.",
    },
    {
      id: 3,
      title: "Christmas Eve Mass and Carol Singing",
      date: "24th December 2025",
      image: "/assets/images/event.jpg",
      description:
        "Celebrate the joy of Christmas with a beautiful Mass followed by carols and refreshments in the parish hall.",
    },
    {
      id: 3,
      title: "Christmas Eve Mass and Carol Singing",
      date: "24th December 2025",
      image: "/assets/images/event.jpg",
      description:
        "Celebrate the joy of Christmas with a beautiful Mass followed by carols and refreshments in the parish hall.",
    },
    {
      id: 3,
      title: "Christmas Eve Mass and Carol Singing",
      date: "24th December 2025",
      image: "/assets/images/event.jpg",
      description:
        "Celebrate the joy of Christmas with a beautiful Mass followed by carols and refreshments in the parish hall.",
    },
    {
      id: 3,
      title: "Christmas Eve Mass and Carol Singing",
      date: "24th December 2025",
      image: "/assets/images/event.jpg",
      description:
        "Celebrate the joy of Christmas with a beautiful Mass followed by carols and refreshments in the parish hall.",
    },
    {
      id: 3,
      title: "Christmas Eve Mass and Carol Singing",
      date: "24th December 2025",
      image: "/assets/images/event.jpg",
      description:
        "Celebrate the joy of Christmas with a beautiful Mass followed by carols and refreshments in the parish hall.",
    },
    {
      id: 3,
      title: "Christmas Eve Mass and Carol Singing",
      date: "24th December 2025",
      image: "/assets/images/event.jpg",
      description:
        "Celebrate the joy of Christmas with a beautiful Mass followed by carols and refreshments in the parish hall.",
    },
    {
      id: 3,
      title: "Christmas Eve Mass and Carol Singing",
      date: "24th December 2025",
      image: "/assets/images/event.jpg",
      description:
        "Celebrate the joy of Christmas with a beautiful Mass followed by carols and refreshments in the parish hall.",
    },
    {
      id: 3,
      title: "Christmas Eve Mass and Carol Singing",
      date: "24th December 2025",
      image: "/assets/images/event.jpg",
      description:
        "Celebrate the joy of Christmas with a beautiful Mass followed by carols and refreshments in the parish hall.",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const eventsPerPage = 1; // Show one event per page
  const totalPages = Math.ceil(allEvents.length / eventsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const currentEvent = allEvents[currentPage];
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log("blog", blog);

  //get slug
  const { slug } = params;
  // fetch blog by slug
  useEffect(() => {
    if (slug) {
      fetchEventBySlug(slug);
    }
    fetchRecentPosts();
  }, [slug]);

  const fetchEventBySlug = async (slug) => {
    try {
      const response = await fetch(`${baseUrl}/api/blog/${slug}`);
      const data = await response.json();
      setBlog(data);
    } catch (error) {
      console.error("Error fetching event by slug:", error);
    } finally {
      setLoading(false); // ✅ stop loader after data fetched
    }
  };
  //recent post
  const [recentPosts, setRecentPosts] = useState([]);
  const fetchRecentPosts = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/recent-blog-posts`);
      const data = await response.json();
      setRecentPosts(data);
      console.log("recentPosts", data);
    } catch (error) {
      console.error("Error fetching recent posts:", error);
    }
  };

  //date formate
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
  if (loading) {
    return <Skeleton height={768} />;
  }

  return (
    <>
      <section className="event-banner">
        <div className="container">
          <div className="event-header-content">
            <h1>{blog?.title}</h1>
            <p>{formatEventDate(blog?.event_date)}</p>
          </div>
        </div>
      </section>
      <section className="event-page ">
        <div className="container">
          <div className="row event-page-content-items">
            {/* Left Section */}
            <div className="col-lg-8">
              <div className="event-wrapper">
                <h3>{blog?.title}</h3>
                <p>{formatEventDate(blog?.event_date)}</p>
                <div className="event-content-item">
                  <div className="event-img-item">
                    <img
                      src={blog?.image}
                      alt={blog?.title}
                      style={{ width: "100%", borderRadius: "8px" }}
                    />
                  </div>
                  <div
                    className="event-description pt-4"
                    dangerouslySetInnerHTML={{ __html: blog?.content }}
                  />
                </div>
                {blog?.images?.length > 0 && (
                  <EventGallery blogImage={blog.images} />
                )}
                {/* Pagination Buttons */}
                <div className="d-flex event-pagination-item justify-content-between align-items-center mt-4 d-none">
                  <button
                    className="custom-btn"
                    onClick={handlePrevious}
                    disabled={currentPage === 0}
                  >
                    <span>
                      <GoArrowLeft />
                    </span>{" "}
                    Previous
                  </button>
                  <span>
                    Page {currentPage + 1} of {totalPages}
                  </span>
                  <button
                    className="custom-btn"
                    onClick={handleNext}
                    disabled={currentPage === totalPages - 1}
                  >
                    Next{" "}
                    <span>
                      <GoArrowRight />
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="col-lg-4">
              <div className="event-right-side">
                <h4>Events Archives</h4>
                <ul>
                  {recentPosts?.map((event) => (
                    <li key={event.id}>
                      <Link href={`/event/${event?.slug}`}>
                        <div className="event-card-list">
                          <div className="event-card-img">
                            <img src={event?.image} alt={event?.title} />
                          </div>
                          <div className="event-card-title">
                            <h5>{event?.title}</h5>
                            <p className="event-card-date">
                              {formatEventDate(event?.event_date)}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventsPage;
