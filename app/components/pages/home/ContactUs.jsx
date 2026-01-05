"use client";
import React, { useState } from "react";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";

const ContactUs = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
    setLoading(true);
    setMessage("");

    fetch(`${baseUrl}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(async (response) => {
        const resData = await response.json();

        if (response.ok) {
          e.target.reset();
          setMessage(
            "✅ Message sent successfully! Our team will contact you very soon."
          );
        } else if (response.status === 422) {
          // Laravel validation errors
          const errorMessages = Object.values(resData.errors).flat().join(" ");
          setMessage(`⚠️ ${errorMessages}`);
        } else {
          setMessage("❌ Failed to send message. Please try again.");
        }
      })
      .catch(() => {
        setMessage("⚠️ Something went wrong.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <section
        className="contact-us"
        id="contact"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="container">
          <div className="contact-us-header">
            <h2 className="section-title" id="contact">
              {data?.contact_title}
            </h2>

            {/* {data?.contact_description} */}
            <div dangerouslySetInnerHTML={{ __html: data?.contact_description }} />

          </div>
          <div className="contact-us-content">
            <div className="row">
              <div className="col-lg-3">
                <ul className="contact-us-list">
                  <li>
                    <div className="contact-us-social">
                      <span>
                        <IoIosCall />
                      </span>
                      <h5>Call Us</h5>
                    </div>
                    <p>
                      {data?.call_us_description}
                    </p>
                  </li>
                  <li>
                    <div className="contact-us-social">
                      <span>
                        <MdOutlineMail />
                      </span>
                      <h5>Write To US</h5>
                    </div>
                    <p>
                      {data?.write_us_address}
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-lg-9">
                <div className="contact-us-form">
                  <form action="#" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          name="fname"
                          placeholder="First Name *"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          name="lname"
                          placeholder="Last Name *"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Your Email"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="number"
                          className="form-control"
                          name="phone"
                          placeholder="Your Phone *"
                          required
                        />
                      </div>
                      <div className="col-md-12">
                        <textarea
                          id=""
                          cols="30"
                          rows="5"
                          className="form-control"
                          name="message"
                          placeholder="Your Message"
                          required
                        ></textarea>
                      </div>
                      <div className="col-md-12">
                        <button
                          className="custom-btn learn-more-btn"
                          type="submit"
                          disabled={loading}
                        >
                          {loading ? (
                            <>
                              Sending...
                              <div
                                className="spinner-border spinner-border-sm ms-2"
                                role="status"
                              >
                                <span className="visually-hidden">
                                  Loading...
                                </span>
                              </div>
                            </>
                          ) : (
                            "Send Message"
                          )}
                        </button>
                        {message && <p className="mt-3">{message}</p>}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
