"use client";
import Image from "next/image";
import React, { useState, useCallback } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
            {teamContent?.description && (
              <div dangerouslySetInnerHTML={{ __html: teamContent.description }} />
            )}
          </div>
          <div className="team-wrapper">
            {loading ? (
              <div className="row">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <div className="col-md-6 col-lg-4 mb-4" key={n}>
                    <div className="team-item-modern">
                      <div className="team-img-modern">
                        <div className="team-img-wrapper">
                          <Skeleton circle height={200} width={200} />
                        </div>
                      </div>
                      <div className="team-content-modern">
                        <Skeleton height={24} width="70%" style={{ margin: "0 auto 8px" }} />
                        <Skeleton height={20} width="50%" style={{ margin: "0 auto 20px" }} />
                        <div className="team-contact-modern">
                          <Skeleton height={40} borderRadius={8} style={{ marginBottom: "12px" }} />
                          <Skeleton height={40} borderRadius={8} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="row">
                {team.map((item) => (
                  <div className="col-md-6 col-lg-4 mb-4" key={item.id}>
                    <div className="team-item-modern">
                      <div className="team-img-modern">
                        <div className="team-img-wrapper">
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
                            width={300}
                            height={300}
                            alt={item.name || "Team Member"}
                            className="team-profile-img"
                          />
                        </div>
                      </div>
                      <div className="team-content-modern">
                        <h3 className="team-name-modern">{item.name ? item.name : "N/A"}</h3>
                        <p className="team-role-modern">{item.role ? item.role : "N/A"}</p>
                        <div className="team-contact-modern">
                          {item.email && (
                            <a
                              href={`mailto:${item.email}`}
                              className="team-contact-item"
                              target="_blank"
                              rel="noopener noreferrer"
                              title={item.email}
                            >
                              <FaRegEnvelope />
                              <span>{item.email}</span>
                            </a>
                          )}
                          {item.phone && (
                            <a
                              href={`tel:${item.phone}`}
                              className="team-contact-item"
                              target="_blank"
                              rel="noopener noreferrer"
                              title={item.phone}
                            >
                              <FaPhoneAlt />
                              <span>{item.phone}</span>
                            </a>
                          )}
                          {!item.email && !item.phone && (
                            <span className="team-contact-item">Contact information not available</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {nextPageUrl && (
              <div className="d-flex see-more-btn justify-content-center mt-5">
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
