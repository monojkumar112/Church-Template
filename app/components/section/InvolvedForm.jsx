"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";

function InvolvedForm({ selectedMinistryId, selectedMinistry }) {
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});

  // Reset status when modal opens/closes or ministry changes
  useEffect(() => {
    setStatus(null);
    setErrors({});
  }, [selectedMinistryId]);

  const validateForm = (formData) => {
    const newErrors = {};
    
    if (!formData.get("name")?.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.get("email")?.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.get("email"))) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.get("address")?.trim()) {
      newErrors.address = "Address is required";
    }
    
    if (formData.get("social_links") && !/^https?:\/\/.+/.test(formData.get("social_links"))) {
      newErrors.social_links = "Please enter a valid URL (starting with http:// or https://)";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);
    setErrors({});

    const formData = new FormData(e.target);
    
    // Validate form
    if (!validateForm(formData)) {
      setStatus("validation-error");
      return;
    }

    setStatus("sending");

    const payload = Object.fromEntries(formData.entries());

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const endpoint = `${baseUrl}/api/involvement`;

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || res.statusText);
      }

      setStatus("success");
      e.target.reset();
      
      // Auto-close modal after 2 seconds on success
      setTimeout(() => {
        const modalElement = document.getElementById("exampleModal");
        if (modalElement) {
          const modal = window.bootstrap?.Modal?.getInstance(modalElement);
          if (modal) {
            modal.hide();
          }
        }
      }, 2000);
    } catch (err) {
      console.error("Involvement POST error:", err);
      setStatus("error");
    }
  }

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="ministryModalLabel"
        aria-hidden="true"
        style={{ zIndex: 9999 }}
      >
        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg modal-dialog-responsive">
          <div className="modal-content modal-content-modern">
            <div className="modal-header modal-header-modern">
              <div className="modal-header-content">
                <h1 className="modal-title-modern" id="ministryModalLabel">
                  Get Involved
                </h1>
                {selectedMinistry?.name && (
                  <p className="modal-subtitle-modern">
                    <span className="modal-subtitle-icon">📋</span>
                    {selectedMinistry.name}
                  </p>
                )}
              </div>
              <button
                type="button"
                className="btn-close btn-close-header-modern"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <IoMdClose/>
              </button>
            </div>
            <div className="modal-body modal-body-modern">
              <div className="ministry-model-content-modern">
                {selectedMinistry?.photo && (
                  <div className="ministry-banner-wrapper-modern">
                    <Image
                      src={selectedMinistry.photo}
                      alt={selectedMinistry?.name || "Ministry"}
                      width={800}
                      height={300}
                      className="ministry-banner-img-modern"
                      priority
                    />
                  </div>
                )}

                {selectedMinistry?.description && (
                  <div className="ministry-description-modern">
                    <div className="ministry-description-icon">📖</div>
                    <p>{selectedMinistry.description}</p>
                  </div>
                )}

                {(selectedMinistry?.email || selectedMinistry?.phone) && (
                  <div className="ministry-contact-modern">
                    <div className="ministry-contact-title">
                      Contact Information
                    </div>
                    {selectedMinistry?.email && (
                      <div className="contact-item-modern">
                        <span className="contact-icon">✉️</span>
                        <div className="contact-content">
                          <strong>Email:</strong>
                          <a href={`mailto:${selectedMinistry.email}`}>
                            {selectedMinistry.email}
                          </a>
                        </div>
                      </div>
                    )}
                    {selectedMinistry?.phone && (
                      <div className="contact-item-modern">
                        <span className="contact-icon">📞</span>
                        <div className="contact-content">
                          <strong>Phone:</strong>
                          <a href={`tel:${selectedMinistry.phone}`}>
                            {selectedMinistry.phone}
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="form-divider-modern">
                <span className="form-divider-text">
                  Fill out the form below
                </span>
              </div>

              <form
                onSubmit={handleSubmit}
                className="involvement-form-modern"
                noValidate
              >
                <input
                  type="hidden"
                  name="ministry_id"
                  value={selectedMinistryId || ""}
                />
                <div className="row g-3 g-md-4">
                  <div className="col-12 col-md-6">
                    <label htmlFor="name" className="form-label-modern">
                      Full Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control-modern ${
                        errors.name ? "is-invalid" : ""
                      }`}
                      id="name"
                      name="name"
                      required
                      placeholder="Enter your full name"
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <div className="form-error-message" id="name-error">
                        {errors.name}
                      </div>
                    )}
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="email" className="form-label-modern">
                      Email Address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className={`form-control-modern ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      id="email"
                      name="email"
                      required
                      placeholder="Enter your email address"
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                    />
                    {errors.email && (
                      <div className="form-error-message" id="email-error">
                        {errors.email}
                      </div>
                    )}
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="phone" className="form-label-modern">
                      Phone Number
                      <span className="text-muted small ms-1">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      className="form-control-modern"
                      id="phone"
                      name="phone"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="social_links" className="form-label-modern">
                      Social Media Profile
                      <span className="text-muted small ms-1">(Optional)</span>
                    </label>
                    <input
                      type="url"
                      className={`form-control-modern ${
                        errors.social_links ? "is-invalid" : ""
                      }`}
                      id="social_links"
                      name="social_links"
                      placeholder="https://your-social-profile-link.com"
                      aria-describedby={
                        errors.social_links ? "social_links-error" : undefined
                      }
                    />
                    {errors.social_links && (
                      <div
                        className="form-error-message"
                        id="social_links-error"
                      >
                        {errors.social_links}
                      </div>
                    )}
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="address" className="form-label-modern">
                      Address <span className="text-danger">*</span>
                    </label>
                    <textarea
                      className={`form-control-modern ${
                        errors.address ? "is-invalid" : ""
                      }`}
                      id="address"
                      name="address"
                      rows="3"
                      required
                      placeholder="Enter your complete address"
                      aria-describedby={
                        errors.address ? "address-error" : undefined
                      }
                    ></textarea>
                    {errors.address && (
                      <div className="form-error-message" id="address-error">
                        {errors.address}
                      </div>
                    )}
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="message" className="form-label-modern">
                      Message
                      <span className="text-muted small ms-1">(Optional)</span>
                    </label>
                    <textarea
                      className="form-control-modern"
                      id="message"
                      name="message"
                      rows="3"
                      placeholder="Tell us why you're interested in joining..."
                    ></textarea>
                  </div>
                </div>

                {status === "success" && (
                  <div
                    className="alert-modern alert-success-modern"
                    role="alert"
                  >
                    <div className="alert-icon">✓</div>
                    <div className="alert-content">
                      <strong>Success!</strong> Your message has been sent
                      successfully. We'll get back to you soon!
                    </div>
                  </div>
                )}
                {status === "error" && (
                  <div className="alert-modern alert-error-modern" role="alert">
                    <div className="alert-icon">✕</div>
                    <div className="alert-content">
                      <strong>Error!</strong> Failed to send your message.
                      Please try again or contact us directly.
                    </div>
                  </div>
                )}
                {status === "validation-error" && (
                  <div
                    className="alert-modern alert-warning-modern"
                    role="alert"
                  >
                    <div className="alert-icon">⚠</div>
                    <div className="alert-content">
                      <strong>Please check the form!</strong> Some fields have
                      errors. Please correct them and try again.
                    </div>
                  </div>
                )}

                <div className="modal-footer modal-footer-modern">
                  <button
                    type="button"
                    className="custom-btn-alt btn-close-footer-modern"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="custom-btn btn-submit-modern"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <span className="btn-icon">📤</span>
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InvolvedForm;
