"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Link from "next/link";
const NewsLetter = () => {
  const [newsletter, setNewsletter] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(true);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const fetchNewsletter = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/newsletter`);
      const data = await response.json();
      setNewsletter(data.data);
    } catch (error) {
      console.error("Fetch Error:", error);
    } finally {
      setLoadingData(false);
    }
  };

  useEffect(() => {
    if (!baseUrl) return;
    fetchNewsletter();
  }, [baseUrl]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error message when user starts typing
    if (errorMessage) {
      setErrorMessage("");
    }
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
        // Server responded with error status
        const errorData = err.response.data;

        // Handle validation errors (Laravel format)
        if (err.response.status === 422 && errorData.errors) {
          const validationErrors = Object.values(errorData.errors).flat();
          setErrorMessage(validationErrors.join(" "));
        } else {
          // Other server errors
          setErrorMessage(
            errorData.message || "Something went wrong. Please try again."
          );
        }
      } else if (err.request) {
        // Request made but no response received
        setErrorMessage("Network error. Please check your connection.");
      } else {
        // Something else happened
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section
        className="newsletter cpb-6"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="container">
          <div className="newsletter-wrapper">
            <div className="newsletter-left">
              {/* Title */}
              <h2 className="section-title">
                {loadingData ? (
                  <Skeleton width={250} height={30} />
                ) : (
                  newsletter?.title || "Current Newsletter"
                )}
              </h2>

              {/* Description */}
              {loadingData ? (
                <div>
                  <Skeleton count={5} />
                </div>
              ) : (
                <div
                  dangerouslySetInnerHTML={{
                    __html: newsletter?.description || "",
                  }}
                />
              )}

              {/* Buttons */}
              <div className="mass-event-btn-group">
                {loadingData ? (
                  <Skeleton width={120} height={40} />
                ) : (
                  <a
                    target="_blank"
                    href={newsletter?.file_link || "#"}
                    className="custom-btn download-btn"
                  >
                    Download
                  </a>
                )}

                {loadingData ? (
                  <Skeleton width={120} height={40} />
                ) : (
                  <button
                    className="custom-btn-alt subscribe-btn"
                    onClick={() => setShowModal(true)}
                  >
                    Subscribe
                  </button>
                )}

                {loadingData ? (
                  <Skeleton width={120} height={40} />
                ) : (
                  <Link
                    href={"/all-newsletter"}
                    className="custom-btn download-btn"
                  >
                    Archived
                  </Link>
                )}
              </div>
            </div>

            {/* Right Side Image */}
            <div className="newsletter-right">
              {loadingData ? (
                <Skeleton width={290} height={270} />
              ) : (
                <Image
                  src={
                    newsletter?.image
                      ? newsletter.image
                      : "/assets/images/news.png"
                  }
                  width={290}
                  height={270}
                  alt="Newsletter"
                />
              )}
            </div>
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

export default NewsLetter;
