"use client";
import Image from "next/image";
import React, { useState, useCallback } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Team = () => {
  const [team, setTeam] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const fetchTeam = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${baseUrl}/api/leadership-teams`);
      const data = await response.json();
      setTeam(data.data.data);
      setNextPageUrl(data.data.next_page_url);
    } catch (error) {
      console.error("Error fetching team:", error);
    } finally {
      setLoading(false);
    }
  }, [baseUrl]);

  const loadMore = useCallback(async () => {
    if (!nextPageUrl || loadingMore) return;

    setLoadingMore(true);
    try {
      const response = await fetch(nextPageUrl);
      const data = await response.json();
      setTeam((prevTeam) => [...prevTeam, ...data.data.data]);
      setNextPageUrl(data.data.next_page_url);
    } catch (error) {
      console.error("Error loading more team members:", error);
    } finally {
      setLoadingMore(false);
    }
  }, [nextPageUrl, loadingMore]);
  React.useEffect(() => {
    if (!baseUrl) return;
    fetchTeam();
  }, [baseUrl, fetchTeam]);

  //call Our Clergy Team
  const [teamContent, setTeamContent] = useState({
    title: "Our Clergy Team",
    description:
      "Our leadership team is dedicated to serving our community and fostering a welcoming environment for all.",
  });

  const fetchTeamContent = useCallback(async () => {
    if (!baseUrl) return;
    try {
      const res = await fetch(`${baseUrl}/api/team-content`);
      const json = await res.json();

      // Support both { data: { title, description } } and direct { title, description }
      const payload = json?.data ?? json;
      setTeamContent({
        title: payload?.title ?? teamContent.title,
        description: payload?.description ?? teamContent.description,
      });
    } catch (err) {
      console.error("Error fetching team content:", err);
    }
  }, [baseUrl, teamContent.title, teamContent.description]);

  React.useEffect(() => {
    if (!baseUrl) return;
    fetchTeamContent();
  }, [baseUrl, fetchTeamContent]);



  console.log("Team", team);
  console.log("team content", teamContent);
  return (
    <>
      {/* <!-- ================== Our Team ================ --> */}
      <section
        className="team cpy-6"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="container">
          <div className="team-section-title">
            <h2 className="section-title">{teamContent?.title}</h2>
            <p>
              {teamContent?.description}
            </p>
          </div>
          <div className="team-wrapper">
            {loading ? (
              <div className="d-flex justify-content-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <div className="row">
                {team.map((item) => (
                  <div className="col-md-6 col-lg-4 mb-3" key={item.id}>
                    <div className="team-item">
                      <div className="team-img">
                        <Image
                          src={
                            item.profile_image &&
                              item.profile_image !== "members/" &&
                              item.profile_image !== ""
                              ? item.profile_image.startsWith("http")
                                ? item.profile_image
                                : `${baseUrl}/${item.profile_image.replace(
                                  /^\/+/,
                                  ""
                                )}`
                              : "/assets/blank-profile.png"
                          }
                          width={416}
                          height={416}
                          alt={item.name || "Team Member"}
                        />
                      </div>
                      <div className="team-content">
                        <h3>{item.name ? item.name : "N/A"}</h3>
                        <p>{item.role ? item.role : "N/A"}</p>
                        <ul className="team-social-list">
                          <li>
                            {item.email ? (
                              <a
                                href={`mailto:${item.email}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FaRegEnvelope />
                                <span style={{ marginLeft: "6px" }}>{item.email}</span>
                              </a>
                            ) : (
                              <span>N/A</span>
                            )}

                          </li>
                          <li>
                            <a
                              href={item.phone ? item.phone : "#"}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaPhoneAlt />
                              {/* <span>{item.phone ? item.phone : "N/A"}</span> */}
                              {item.phone ? (
                                <a href={`tel:${item.phone}`} style={{ marginRight: "10px" }}>{item.phone}</a>
                              ) : (
                                <span>N/A</span>
                              )}


                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {nextPageUrl && (
              <div className="d-flex see-more-btn justify-content-center">
                <button
                  onClick={loadMore}
                  disabled={loadingMore}
                  className="custom-btn load-more-btn btn-sm"
                  style={{
                    cursor: loadingMore ? "not-allowed" : "pointer",
                    opacity: loadingMore ? 0.6 : 1,
                  }}
                >
                  {loadingMore ? "Loading..." : "See More"}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
