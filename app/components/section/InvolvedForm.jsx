"use client";
import React, { useState } from "react";
import Image from "next/image";

function InvolvedForm({ selectedMinistryId, selectedMinistry }) {
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);
    // include selectedMinistryId (hidden input already present) and other fields
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
      // optionally close modal via bootstrap JS if desired
    } catch (err) {
      console.error("Involvement POST error:", err);
      setStatus("error");
    }
  }

  // console.log('ministryId:', selectedMinistryId)
  console.log("ministry", selectedMinistry);
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
        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="ministryModalLabel">
                Involved Ministries
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="my-2 mb-2 ministry-model-content">
                <h2 className="ministry-name-title">
                  {selectedMinistry?.name}
                </h2>

                <img
                  src={
                    selectedMinistry?.photo ||
                    "/assets/images/ministry_banner_image.jpeg"
                  }
                  alt=""
                  className="mb-3 ministry_banner-img"
                  style={{ width: "100%", objectFit: "cover" }}
                />

                <p>Email: {selectedMinistry?.email}</p>
                <p>Phone: {selectedMinistry?.phone}</p>
                <p>{selectedMinistry?.description}</p>
              </div>

              <form onSubmit={handleSubmit} className="row">
                <input
                  type="hidden"
                  name="ministry_id"
                  value={selectedMinistryId}
                />
                <div className="mb-md-3 col-md-6">
                  <label htmlFor="name" className="form-label">
                    Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-md-3 col-md-6">
                  <label htmlFor="email" className="form-label">
                    Email <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-md-3 col-md-6">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="mb-md-3 col-md-6">
                  <label htmlFor="social_links" className="form-label">
                    Social Links{" "}
                    <span className="text-success">(Optional)</span>
                  </label>
                  <input
                    type="url"
                    className="form-control"
                    id="social_links"
                    name="social_links"
                    placeholder="Give your social profile link"
                  />
                </div>
                <div className="mb-md-3 col-md-6">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <textarea
                    className="form-control"
                    id="address"
                    name="address"
                    rows="3"
                    required
                    placeholder="Enter your address"
                  ></textarea>
                </div>
                <div className="mb-md-3 col-md-6">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="3"
                    placeholder="Write your message"
                  ></textarea>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="custom-btn-alt"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="custom-btn"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Sending..." : "Send"}
                  </button>
                </div>
                {status === "success" && (
                  <div className="mt-2 text-success">Message sent.</div>
                )}
                {status === "error" && (
                  <div className="mt-2 text-danger">
                    Failed to send. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InvolvedForm;
