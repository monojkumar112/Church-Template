"use client";
import Image from "next/image";
import React, { useState } from "react";

const DonateFrom = () => {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    amount: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAmountClick = (value) => {
    setForm({ ...form, amount: value.toString() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.amount) return alert("Please enter or select an amount");
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/donate/checkout`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: form.first_name,
            email: form.email,
            phone: form.phone,
            address: form.address,
            amount: form.amount,
          }),
        }
      );

      const data = await res.json();

      if (data?.url) {
        window.location.href = data.url; // redirect to Stripe Checkout
      } else {
        alert("Something went wrong!");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="donate-from cpb-6"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="container">
        <div className="donate-from-wrapper">
          <div className="donate-header">
            <h2 className="donate-from-title">
              Donation is under construction
            </h2>
            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> */}
          </div>
          <form onSubmit={handleSubmit} className="donate-form">
            <div className="donate-information">
              <h4>Your Details Information:</h4>
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First Name *"
                    className="donate-input"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name *"
                    className="donate-input"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    className="donate-input"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Your Phone *"
                    className="donate-input"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="text"
                    name="address"
                    placeholder="Your Address (optional)"
                    className="donate-input"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="donate-information">
              <h4>Your Donation:</h4>
              <div className="row">
                <div className="col-md-12">
                  <input
                    type="text"
                    name="amount"
                    value={form.amount}
                    placeholder="Enter Custom Amount (£)"
                    className="donate-input"
                    onChange={handleChange}
                  />
                </div>
                <div className="choose-donation-wrap">
                  {[20, 50, 100, 200].map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => handleAmountClick(amt)}
                      className={`select-amount-btn ${
                        form.amount == amt ? "active" : ""
                      }`}
                    >
                      £{amt}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button className="custom-btn" type="submit" disabled={loading}>
              {loading ? "Processing..." : "Donate Now"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DonateFrom;
