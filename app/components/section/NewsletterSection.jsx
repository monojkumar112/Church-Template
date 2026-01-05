"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";
import { IoMdClose } from "react-icons/io";

const NewsletterSection = () => {
  const [newsletter, setNewsletter] = useState([]);
  const [formData, setFormData] = useState({ email: "" });
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // <-- default true
  const [showModal, setShowModal] = useState(false);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const fetchNewsletter = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/newsletter/all`);
      const data = await response.json();
      setNewsletter(data.data);
    } catch (error) {
      console.error("Error fetching:", error);
    } finally {
      setIsLoading(false); // <-- data loaded
    }
  };

  useEffect(() => {
    if (!baseUrl) return;
    fetchNewsletter();
  }, [baseUrl]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setMessage("");

    try {
      const response = await axios.post(
        `${baseUrl}/api/subscription`,
        formData
      );

      if (response.data) {
        setMessage(response.data.message || "Subscription successful!");
        setShowModal(false);
        setFormData({ email: "" });
      }
    } catch (err) {
      if (err.response) {
        const errorData = err.response.data;

        if (err.response.status === 422 && errorData.errors) {
          const validationErrors = Object.values(errorData.errors).flat();
          setErrorMessage(validationErrors.join(" "));
        } else {
          setErrorMessage(
            errorData.message || "Something went wrong. Try again."
          );
        }
      } else if (err.request) {
        setErrorMessage("Network error. Check your connection.");
      } else {
        setErrorMessage("Unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  // -------------------------------------------
  // SKELETON LOADER SECTION
  // -------------------------------------------
  if (isLoading) {
    return (
      <section className="event-section">
        <div className="container">
          <div className="row">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div className="col-lg-4 col-md-6 mb-4" key={n}>
                <Skeleton height={350} borderRadius={12} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="event-section">
        <div className="container">
          <div className="row">
            {newsletter.map((item) => (
              <div className="col-lg-4 col-md-6 mb-4" key={item.id}>
                <div className="event-card news-event-card">
                  {/* Image */}
                  <div className="event-image">
                    <Image
                      src={item.image ? item.image : "/assets/images/news.png"}
                      width={350}
                      height={250}
                      alt={item.title}
                    />
                  </div>

                  {/* Info */}
                  <div className="event-info">
                    <Link
                      href={`/newsletter/${item.slug}`}
                      className="event-title"
                    >
                      {item.title ?? "No title"}
                    </Link>

                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.description ? item.description : "",
                      }}
                    />

                    {/* Buttons */}
                    <div className="mass-event-btn-group">
                      <a
                        target="_blank"
                        href={item.file_link ? item.file_link : "#"}
                        className="custom-btn"
                      >
                        Download
                      </a>

                      <button
                        className="custom-btn-alt subscribe-btn"
                        onClick={() => setShowModal(true)}
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              className="modal-close"
              onClick={() => {
                setShowModal(false);
                setErrorMessage("");
                setMessage("");
                setFormData({ email: "" });
              }}
            >
              <IoMdClose />
            </button>
            <h3 className="subscribe-tite-item">Subscribe to our Newsletter</h3>
            <form onSubmit={handleSubmit} className="subscribe-form">
              {errorMessage && (
                <div className="alert alert-danger" role="alert">
                  {errorMessage}
                </div>
              )}
              {message && (
                <div className="alert alert-success" role="alert">
                  {message}
                </div>
              )}

              <div className="form-group">
                <label>
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
              </div>

              <button type="submit" className="custom-btn" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Inline CSS for modal */}
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 99969;
        }
        .modal-content {
          background: #fff;
          padding: 25px;
          border-radius: 10px;
          width: 400px;
          position: relative;
        }
        .modal-close {
          position: absolute;
          right: 10px;
          top: 10px;
          border: none;
          background: transparent;
          font-size: 22px;
          cursor: pointer;
        }
        .form-group {
          margin-bottom: 15px;
        }
        input,
        textarea {
          width: 100%;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 6px;
          margin-top: 5px;
        }
        .alert {
          margin-bottom: 15px;
          padding: 10px;
          border-radius: 6px;
          font-size: 14px;
        }
        .alert-danger {
          background-color: #f8d7da;
          color: #721c24;
          border: 1px solid #f5c6cb;
        }
        .alert-success {
          background-color: #d4edda;
          color: #155724;
          border: 1px solid #c3e6cb;
        }
        button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        h3 {
          text-align: center;
          margin-bottom: 15px;
        }
      `}</style>
    </>
  );
};

export default NewsletterSection;
