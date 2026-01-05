"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";

const MassOffering = () => {
  const [formData, setFormData] = useState({
    intention: "",
    mass_for_name: "",
    date: "",
    time: "",
    name: "",
    number: "",
    email: "",
    amount: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const intentions = [
    "RIP",
    "Well-Being",
    "Thanksgiving",
    "Private Intentions",
    "Birthday Thanksgiving",
    "Wedding Anniversary",
    "People of the Parish",
    "Special Intention",
    "Speedy Recovery",
    "God’s Blessings",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Later: send this to backend or email
    console.log(formData);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    axios
      .post(`${baseUrl}/api/mass-offering`, formData)
      .then((res) => {
        console.log("Response:", res.data);
        setLoading(false);
        setSuccessMessage(res.data.message);
        e.target.reset();
      })
      .catch((err) => {
        setLoading(false);

        if (err.response) {
          const msg =
            err.response.data.message ||
            "Something went wrong. Please try again.";
          setErrorMessage(msg);
          console.error("Server Error:", err.response.data);
        } else {
          // Network or unknown error
          setErrorMessage("Network error. Please check your connection.");
        }
      });
  };

  return (
    <section className="mass-offering ">
      <div className="container">
        <div className="donate-from-wrapper">
          <div className="donate-header">
            <h2 className="donate-from-title">Mass Offering </h2>
          </div>
          <form onSubmit={handleSubmit} className="donate-form">
            <div className="donate-information">
              <div className="row">
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Intention</label>
                  <select
                    name="intention"
                    className="donate-input"
                    required
                    value={formData.intention}
                    onChange={handleChange}
                  >
                    <option value="">Select Intention</option>
                    {intentions.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Mass Intention is for (Name)</label>
                  <input
                    type="text"
                    name="mass_for_name"
                    className="donate-input"
                    placeholder="Mass Intention is for (Name)"
                    required
                    value={formData.mass_for_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    Day or Date of Preferred Mass
                  </label>
                  <input
                    type="date"
                    className=" donate-input"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    className=" donate-input "
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Donor Name</label>
                  <input
                    type="text"
                    name="name"
                    className="donate-input"
                    placeholder="Enter donor name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    Telephone Number
                  </label>
                  <input
                    type="text"
                    className="donate-input"
                    name="number"
                    placeholder="Enter number number"
                    required
                    value={formData.number}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control donate-input"
                    name="email"
                    placeholder="Enter your email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Stipend (£)</label>
                  <input
                    type="number"
                    className="form-control donate-input"
                    name="amount"
                    placeholder="Enter amount"
                    required
                    value={formData.amount}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <div className="pay-online-btn-item">
                    <Link
                      href="https://donate.mydona.com/holy-innocents-orpington"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="custom-btn-alt"
                    >
                      Pay Stipend Online
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <button className="custom-btn" type="submit" disabled={loading}>
                {loading ? "Processing..." : "Submit"}
              </button>
            </div>
            {errorMessage && (
              <div className="alert alert-danger mt-2">{errorMessage}</div>
            )}
            {successMessage && (
              <div className="alert alert-success mt-2">{successMessage}</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default MassOffering;
