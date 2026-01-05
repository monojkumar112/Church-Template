"use client";
import React, { useState, useEffect, useRef } from "react";
import countries from "../../data/country";
import { IoMdClose } from "react-icons/io";
import { FaCamera } from "react-icons/fa";
import axios from 'axios';

const RegisterFrom = () => {
  const currentYear = new Date().getFullYear();
  const days = Array.from({ length: 31 }, (_, i) =>
    String(i + 1).padStart(2, "0")
  );
  const months = [
    ["01", "January"],
    ["02", "February"],
    ["03", "March"],
    ["04", "April"],
    ["05", "May"],
    ["06", "June"],
    ["07", "July"],
    ["08", "August"],
    ["09", "September"],
    ["10", "October"],
    ["11", "November"],
    ["12", "December"],
  ];
  const years = Array.from({ length: currentYear - 1900 + 1 }, (_, i) =>
    String(currentYear - i)
  );

  const ministries = [
    { label: "Reading", value: "1" },
    { label: "Alter Servers", value: "2" },
    { label: "Choir", value: "3" },
    { label: "Music Ministry", value: "4" },
    {
      label: "Welcoming People at Mass",
      value: "5",
    },
    {
      label: "Collectors at Mass",
      value: "6",
    },
    {
      label: "Extraordinary Minister of the Eucharist",
      value: "7",
    },
    {
      label: "Baptism Preparation",
      value: "8",
    },
    {
      label: "First Holy Communion journey",
      value: "9",
    },
    { label: "RCIA", value: "1" },
    {
      label: "Confirmation journey",
      value: "10",
    },
    {
      label: "Childrens Liturgy",
      value: "11",
    },
    { label: "Youth Ministry", value: "1" },
    {
      label: "Good Neightbours to All (GNTA)",
      value: "12",
    },
    {
      label: "Saint Vincent de Paul (SVP)",
      value: "13",
    },
    {
      label: "Bereavement Group",
      value: "14",
    },
    {
      label: "Welcoming Newcomers",
      value: "15",
    },
    {
      label: "Teas and Coffees after Mass",
      value: "16",
    },
    { label: "Warm Spaces", value: "17" },
    {
      label: "Church care - Alter Linen",
      value: "18",
    },
    {
      label: "IT and Communications",
      value: "19",
    },
    {
      label: "Counting/Banking Money",
      value: "20",
    },
    {
      label: "Social and Fundraising Group",
      value: "21",
    },
    {
      label: "Holy Innocents' Fellowship Group",
      value: "22",
    },
    {
      label: "Churches together in Orpington",
      value: "23",
    },
    {
      label: "Flower Arranging",
      value: "24",
    },
    {
      label: "Gardening and Ground Maintenance",
      value: "25",
    },
    {
      label: "Building Maintenance",
      value: "26",
    },
    { label: "Walkers Group", value: "27" },
    { label: "200 Club", value: "28" },
    { label: "PECS", value: "29" },
    { label: "Safeguarding", value: "30" },
  ];

  // Privacy modal state and handlers
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  // Photo upload state
  const [photoFile, setPhotoFile] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [photoError, setPhotoError] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const photoInputRef = useRef(null);

  const MAX_PHOTO_BYTES = 5 * 1024 * 1024; // 5MB

  const handlePhotoChange = (e) => {
    const file = e.target.files && e.target.files[0];
    setPhotoError("");
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setPhotoError("Please upload an image (jpg, png, gif).");
      return;
    }
    if (file.size > MAX_PHOTO_BYTES) {
      setPhotoError("File too large. Maximum 5MB allowed.");
      return;
    }
    // revoke previous
    if (photoPreview) URL.revokeObjectURL(photoPreview);
    const url = URL.createObjectURL(file);
    setPhotoFile(file);
    setPhotoPreview(url);
  };

  const removePhoto = (e) => {
    e && e.stopPropagation();
    if (photoPreview) URL.revokeObjectURL(photoPreview);
    setPhotoFile(null);
    setPhotoPreview(null);
    setPhotoError("");
    if (photoInputRef.current) photoInputRef.current.value = null;
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const file =
      e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
    if (file) {
      // create a fake event-like object
      handlePhotoChange({ target: { files: [file] } });
    }
  };

  const openPrivacyModal = () => setShowPrivacyModal(true);
  const closePrivacyModal = () => setShowPrivacyModal(false);

  // prevent background scroll when modal is open and close on Escape
  useEffect(() => {
    if (showPrivacyModal) {
      const onKey = (e) => {
        if (e.key === "Escape") closePrivacyModal();
      };
      document.addEventListener("keydown", onKey);
      const orig = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("keydown", onKey);
        document.body.style.overflow = orig;
      };
    }
    return undefined;
  }, [showPrivacyModal]);

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(""); // clear old error

    const formData = new FormData(e.target);
    const selectedMinistries = formData.getAll("custom_fields[field_15][]");
    formData.delete("custom_fields[field_15][]");
    selectedMinistries.forEach((m) => formData.append("ministries[]", m));

    const dob = `${formData.get("dob_year")}-${formData.get("dob_month")}-${formData.get("dob_day")}`;
    formData.append("date_of_birth", dob);
    formData.delete("dob_day");
    formData.delete("dob_month");
    formData.delete("dob_year");

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    axios
      .post(`${baseUrl}/api/registration`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log("Response:", res.data);
        setLoading(false);
        setSuccessMessage("🎉 Registration successful!");
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
    <>
      <div className="churchsuite-form">
        <form onSubmit={handleSubmit}>
          <h4>My Details</h4>
          <div className="churchsuite-item">
            <div className="row">
              <div className=" col-md-6 mb-2">
                <label htmlFor="first_name">
                  First Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control mt-2"
                  name="first_name"
                  placeholder="First Name"
                />
              </div>
              <div className=" col-md-6 mb-2">
                <label htmlFor="last_name">
                  Last Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="last_name"
                  className="form-control mt-2"
                  placeholder="Last Name"
                />
              </div>
              <div className=" col-md-6 mb-2">
                <label htmlFor="sex">Sex</label>
                <select className="form-control mt-2" name="sex" id="sex">
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="others">Others</option>
                </select>
              </div>
              <div className=" col-md-6 mb-2">
                <label htmlFor="dob">Date of Birth</label>

                <div
                  className="dob-selects"
                  style={{ display: "flex", gap: 8 }}
                >
                  <select
                    id="dob_day"
                    name="dob_day"
                    className="form-control mt-2"
                  >
                    <option value="">-</option>
                    {days.map((d) => (
                      <option key={d} value={d}>
                        {parseInt(d, 10)}
                      </option>
                    ))}
                  </select>

                  <select
                    id="dob_month"
                    name="dob_month"
                    className="form-control mt-2"
                  >
                    <option value="">-</option>
                    {months.map(([val, label]) => (
                      <option key={val} value={val}>
                        {label}
                      </option>
                    ))}
                  </select>

                  <select
                    id="dob_year"
                    name="dob_year"
                    className="form-control mt-2"
                  >
                    <option value="">-</option>
                    {years.map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-lg-6">
                <label htmlFor="marital">Marital Status</label>
                <select
                  id="marital"
                  name="marital"
                  data-label=""
                  className="form-control mt-2"
                >
                  <option value="" selected="selected">
                    -
                  </option>
                  <option value="single">Single</option>
                  <option value="engaged">Engaged</option>
                  <option value="married">Married</option>
                  <option value="cohabit">Partnered</option>
                  <option value="separated">Separated</option>
                  <option value="divorced">Divorced</option>
                  <option value="widowed">Widowed</option>
                </select>
              </div>
            </div>
          </div>

          <div className="churchsuite-item">
            <div className="row">
              <div className=" col-md-6 mb-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control mt-2"
                  name="email"
                  placeholder="Your Email"
                />
              </div>
              <div className=" col-md-6 mb-2">
                <label htmlFor="mobile">Mobile </label>
                <input
                  type="number"
                  className="form-control mt-2"
                  name="mobile"
                  placeholder="Mobile Number"
                />
              </div>
              <div className=" col-md-6 mb-2">
                <label htmlFor="telephone">Telephone </label>
                <input
                  type="number"
                  className="form-control mt-2"
                  name="telephone"
                  placeholder="Telephone Number"
                />
              </div>
            </div>
          </div>
          <div className="churchsuite-item">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <label htmlFor="photo">Photo</label>
                <div
                  className={`churchsuite-upload ${
                    isDragging ? "dragging" : ""
                  }`}
                >
                  <input
                    id="photo"
                    ref={photoInputRef}
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    style={{ display: "none" }}
                  />

                  <div
                    className="upload-area"
                    role="button"
                    tabIndex={0}
                    onClick={() =>
                      photoInputRef.current && photoInputRef.current.click()
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        photoInputRef.current && photoInputRef.current.click();
                      }
                    }}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                  >
                    {photoPreview ? (
                      <div className="preview-wrapper">
                        <img
                          src={photoPreview}
                          alt="Photo preview"
                          className="preview-img"
                        />
                        <button
                          type="button"
                          className="remove-btn"
                          onClick={removePhoto}
                          aria-label="Remove photo"
                        >
                          <IoMdClose />
                        </button>
                      </div>
                    ) : (
                      <div className="upload-placeholder">
                        <div className="upload-icon">
                          <FaCamera />
                        </div>
                        <div className="upload-text">
                          Click or drop an image here
                        </div>
                        <div className="upload-sub">JPG, PNG — max 5MB</div>
                      </div>
                    )}
                  </div>

                  {photoError && (
                    <div className="photo-error">{photoError}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="churchsuite-item">
            <div className="row">
              <div className=" col-md-6 mb-2">
                <label htmlFor="address">
                  Address <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control mt-2"
                  type="text"
                  name="address"
                  placeholder="Your Address   "
                />
              </div>
              <div className=" col-md-6 mb-2">
                <label htmlFor="address2">Address 2</label>
                <input
                  className="form-control mt-2"
                  type="text"
                  name="address_two"
                  placeholder="Your Address 2"
                />
              </div>
              <div className=" col-md-6 mb-2">
                <label htmlFor="address_three">Address 3 </label>
                <input
                  className="form-control mt-2"
                  type="text"
                  name="address_three"
                  placeholder="Your Address 3"
                />
              </div>
              <div className=" col-md-6 mb-2">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  className="form-control mt-2"
                  name="city"
                  placeholder="City "
                />
              </div>
              <div className=" col-md-6 mb-2">
                <label htmlFor="county">County</label>
                <input
                  type="text"
                  className="form-control mt-2"
                  name="county"
                  placeholder="county "
                />
              </div>
              <div className=" col-md-6 mb-2">
                <label htmlFor="postcode">
                  Postcode <span className="text-danger">*</span>
                </label>
                <input
                  type="number"
                  className="form-control mt-2"
                  name="postcode"
                  placeholder="Post code "
                />
              </div>
              <div className=" col-md-6 mb-2">
                <label htmlFor="country">Country</label>
                <select
                  id="country"
                  name="country"
                  data-label=""
                  className="form-control mt-2"
                  defaultValue=""
                >
                  <option value="">-</option>
                  {countries.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className=" col-md-6 mb-2">
                <label htmlFor="occupation">Occupation</label>
                <input
                  type="text"
                  name="occupation"
                  className="form-control mt-2"
                  placeholder=" Your Occupation"
                />
              </div>
              <div className=" col-md-6 mb-2">
                <label htmlFor="skill">Skills</label>
                <input
                  type="text"
                  name="skill"
                  className="form-control mt-2"
                  placeholder=" Your skill"
                />
              </div>
              <div className=" col-md-6 mb-2">
                <label htmlFor="interests">Interests</label>
                <input
                  type="text"
                  className="form-control mt-2"
                  name="interests"
                  placeholder=" Your Interests"
                />
              </div>
              <div className=" col-md-6 mb-2">
                <label htmlFor="religion">
                  Religion <span className="text-danger">*</span>
                </label>

                <select
                  name="religion"
                  id="religion"
                  className="form-control mt-2"
                >
                  <option value="" selected="selected">
                    -- Please Select --
                  </option>
                  <option value="catholic">Catholic</option>
                  <option value="christian">Christian</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className=" col-md-6 mb-2">
                <label htmlFor="year">Year Joined Parish</label>
                <input
                  type="text"
                  name="year_joined_parish"
                  className="form-control mt-2"
                  placeholder=" Year Joined Parish"
                />
              </div>
            </div>
          </div>
          <div className="churchuite-checkbox">
            <div className="checkbox-item">
              <label>Newsletter</label>
              <div className="checkbox-inner">
                <input type="checkbox" name="newsletter" />
                <span>Yes</span>
              </div>
            </div>
            <div className="checkbox-item">
              <label>Gift Aid Scheme</label>
              <div className="checkbox-inner">
                <input type="checkbox" name="gift_aid" />
                <span>Yes</span>
              </div>
            </div>
            <div className="checkbox-item">
              <label>200 Club Member</label>
              <div className="checkbox-inner">
                <input type="checkbox" name="200_club_member" />
                <span>Yes</span>
              </div>
            </div>
            <div className="checkbox-item">
              <label>Housebound</label>
              <div className="checkbox-inner">
                <input type="checkbox" name="housebound" />
                <span>Yes</span>
              </div>
            </div>
            <div className="checkbox-item">
              <label>Ministry</label>

              {/* replaced long inline HTML with mapped, accessible markup */}
              <div className="checkboxes">
                {ministries.map((m, i) => {
                  const id = `ministry_${i}`;
                  return (
                    <label className="checkbox" key={m.value} htmlFor={id}>
                      <input
                        type="checkbox"
                        id={id}
                        name="custom_fields[field_15][]"
                        value={m.label}
                      />
                      <span className="checkbox-label">{m.label}</span>
                    </label>
                  );
                })}
                <div
                  className="errors-container"
                  data-for="custom_fields[field_15]"
                ></div>
              </div>
            </div>
          </div>
          <div className="communication">
            <h4>Communication</h4>
            <p>
              We take your privacy very seriously, these settings determine how
              the parish office and clergy can contact you. We do our best to
              ensure any communication you receive from us is relevant and
              helpful. At any time you&apos;re able to choose which means we
              will contact you - just opt-in to receive communication using the
              options below.
            </p>
            <div className="checkbox-item">
              <div className="checkbox-inner">
                <input type="checkbox" name="receive_general_email" />
                <span>Receive general emails</span>
              </div>
            </div>
            <div className="checkbox-item">
              <div className="checkbox-inner">
                <input type="checkbox" name="receive_general_sms" />
                <span>Receive general SMS</span>
              </div>
            </div>
            <div className="checkbox-item">
              <div className="checkbox-inner">
                <input type="checkbox" name="receive_general_calls" />
                <span>Receive phone calls</span>
              </div>
            </div>
            <div className="checkbox-item">
              <div className="checkbox-inner">
                <input type="checkbox" name="receive_general_post" />
                <span>Receive post</span>
              </div>
            </div>
            <div className="checkbox-inner">
              <input
                type="checkbox"
                name="accept_privacy"
                id="accept_privacy"
                required
              />
              <p className="checkbox-label">
                I accept your{" "}
                <span onClick={openPrivacyModal}>Privacy Notice</span>
              </p>
            </div>
          </div>
          <div className="submit-btn-item">
            <button className="custom-btn" disabled={loading}> {loading ? "Submitting..." : "Submit Details"} </button>
          </div>
          {errorMessage && (
            <div className="alert alert-danger mt-2">{errorMessage}</div>
          )}
          {successMessage && (
            <div className="alert alert-success mt-2">{successMessage}</div>
          )}

        </form>

        {showPrivacyModal && (
          <div
            className="privacy-modal-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Privacy Notice"
            onClick={(e) => {
              if (
                e.target.className &&
                String(e.target.className).includes("privacy-modal-overlay")
              ) {
                closePrivacyModal();
              }
            }}
          >
            <div className="privacy-modal">
              <div className="privacy-content-item">
                <h3 style={{ margin: 0 }}>Privacy Notice</h3>
                <button
                  aria-label="Close privacy notice"
                  onClick={closePrivacyModal}
                  style={{
                    fontSize: 20,
                    lineHeight: 1,
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                >
                  <IoMdClose />
                </button>
              </div>

              <div style={{ color: "#222", lineHeight: 1.6 }}>
                <p>
                  Please confirm that you have read and agreee to the terms of
                  our privacy policy.
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: 8,
                  marginTop: 16,
                }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default RegisterFrom;
