"use client";
import React, { useEffect, useState } from "react";
import Banner from "../../components/section/Banner";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const DynamicSection = ({ category, slug }) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch single page data
  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/page/${slug}`);
        const data = await response.json();
        if (data.success) {
          setPage(data.data);
        }
      } catch (error) {
        console.error("Error fetching page:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPage();
  }, [slug]);

  if (loading) {
    return (
      <div className="py-5">
        <Skeleton height={800} className="mb-4" />
      </div>
    );
  }

  // 🔹 Handle not found
  if (!page) return <p>Page not found</p>;

  const bannerData = {
    title: page.page_title,
    description: page.page_subtitle,
  };

  return (
    <>
      <Banner data={bannerData} />

      <section className="leader-ship">
        <div className="container">
          <div className="leader-ship-content">
            {page.use_page_builder && page.sections ? (
              // Render page builder sections
              page.sections.map((section, index) => (
                <div
                  key={section.id || index}
                  data-section-type={section.section_type}
                  dangerouslySetInnerHTML={{ __html: section.html }}
                />
              ))
            ) : (
              // Render traditional content
              <div
                className="dynamic-page-content"
                dangerouslySetInnerHTML={{ __html: page.content || "" }}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default DynamicSection;
