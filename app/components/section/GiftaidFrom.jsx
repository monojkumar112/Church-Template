'use client';
import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import countries from "../../data/country";

const initialFormState = {
  prefix: "",
  fname: "",
  lname: "",
  email: "",
  house_number: "",
  address_two: "",
  city: "",
  postcode: "",
  country: "",
  telephone: "",
  parish_id: "",
  parish_email: "",
  parish_coordinator: "",
  i_wish_to_gift_aid: false,
  today_date: "",
  planned_giving_yes: false,
  already_giving_regularly: false,
  not_this_time: false,
  interested_volunteering_yes: false,
  interested_volunteering_not_this_time: false,
  interested_volunteering_already_involved: false,
  agree_privacy_policy: false,
};

const GiftaidFrom = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [parishes, setParishes] = useState([]);
  const [parishLoading, setParishLoading] = useState(false);

  const baseUrl = useMemo(
    () => process?.env?.NEXT_PUBLIC_BASE_URL || "",
    []
  );

  // Load parish details
  useEffect(() => {
    if (!baseUrl) return;
    const fetchParishes = async () => {
      setParishLoading(true);
      try {
        const res = await axios.get(`${baseUrl}/api/parishes-details`, {
          headers: { Accept: "application/json" },
        });
        const list = Array.isArray(res?.data?.data) ? res.data.data : [];
        setParishes(list);
      } catch (err) {
        // Non-blocking error; keep form usable
        // Optionally expose a small message
        // setErrorMessage("Failed to load parishes. You may continue without it.");
      } finally {
        setParishLoading(false);
      }
    };
    fetchParishes();
  }, [baseUrl]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    // Special handling: auto-fill dependent parish fields
    if (name === "parish_id") {
      const selected = parishes.find((p) => String(p.id) === String(value));
      setFormData((prev) => ({
        ...prev,
        parish_id: value,
        parish_email: selected?.parish_email || "",
        parish_coordinator: selected?.gift_aid_coordinator || "",
      }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const getFieldError = (name) => {
    const value = fieldErrors?.[name];
    if (!value) return "";
    return Array.isArray(value) ? value.join(" ") : value;
  };

  const textInputClass = (name) =>
    `form-control form-control-lg mb-2${getFieldError(name) ? " is-invalid" : ""
    }`;

  const selectInputClass = (name) =>
    `form-select form-select-lg mb-2${getFieldError(name) ? " is-invalid" : ""
    }`;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!baseUrl) {
      setErrorMessage(
        "Missing NEXT_PUBLIC_BASE_URL environment variable. Please check your configuration."
      );
      return;
    }

    // Client-side required checks for better UX
    const clientErrors = {};
    if (!formData.agree_privacy_policy) {
      clientErrors.agree_privacy_policy = "The consent field is required.";
    }
    if (event?.target?.elements?.parish_id?.required && !formData.parish_id) {
      clientErrors.parish_id = "The parish field is required.";
    }
    if (Object.keys(clientErrors).length > 0) {
      setFieldErrors(clientErrors);
      setErrorMessage("Some fields need your attention. Please review.");
      return;
    }

    setLoading(true);
    setErrorMessage("");
    setFieldErrors({});
    setSuccessMessage("");

    try {
      const { parish_email, parish_coordinator, ...rest } = formData;
      const payload = {
        ...rest,
        parish_id: rest.parish_id ? Number(rest.parish_id) : rest.parish_id,
      };

      const response = await axios.post(`${baseUrl}/api/giftaid`, payload, {
        headers: {
          Accept: "application/json",
        },
      });

      const message =
        response?.data?.message || "Gift Aid form submitted successfully.";
      setSuccessMessage(message);
      setFormData(initialFormState);
    } catch (error) {
      if (error.response) {
        const status = error.response.status;
        const responseErrors = error.response.data?.errors || {};

        if (status === 422 && Object.keys(responseErrors).length) {
          setFieldErrors(responseErrors);
          setErrorMessage("Some fields need your attention. Please review.");
        } else {
          const message =
            error.response.data?.message ||
            "Something went wrong. Please try again.";
          setErrorMessage(message);
        }
      } else {
        setErrorMessage("Network error. Please check your connection.");
      }
    } finally {
      setLoading(false);
    }
  };

  const disableSubmit = loading;
  return (
    <div className="gift-aid-form-content">
      <form onSubmit={handleSubmit} noValidate>
        <div className="gift-aid-header">
          <h3>Your Details</h3>
        </div>
        <div className="gift-aid-item">
          <h4>
            Name <span className="text-danger">*</span>
          </h4>
          <div className="row">
            <div className="col-lg-4">
              <select
                name="prefix"
                value={formData.prefix}
                onChange={handleChange}
                className={selectInputClass("prefix")}
                aria-label="Large select example"
              >
                <option value=""></option>
                <option value="Miss">Miss</option>
                <option value="Mrs">Mrs</option>
                <option value="Ms">Ms</option>
                <option value="Mr">Mr</option>
                <option value="Dr">Dr</option>
                <option value="Prof.">Prof.</option>
                <option value="Rev.">Rev.</option>
              </select>
              <label htmlFor="">Prefix</label>
              {getFieldError("prefix") ? (
                <div className="invalid-feedback d-block">
                  {getFieldError("prefix")}
                </div>
              ) : null}
            </div>
            <div className="col-lg-4">
              <input
                type="text"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
                className={textInputClass("fname")}
              />
              <label htmlFor="">First</label>
              {getFieldError("fname") ? (
                <div className="invalid-feedback d-block">
                  {getFieldError("fname")}
                </div>
              ) : null}
            </div>
            <div className="col-lg-4">
              <input
                type="text"
                name="lname"
                value={formData.lname}
                onChange={handleChange}
                className={textInputClass("lname")}
              />
              <label htmlFor="">Last</label>
              {getFieldError("lname") ? (
                <div className="invalid-feedback d-block">
                  {getFieldError("lname")}
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="gift-aid-item">
          <h4>
            Address <span className="text-danger">*</span>
          </h4>
          <div className="row">
            <div className="col-lg-6 ">
              <label htmlFor="" className="mb-2">
                House/Flat Number
              </label>
              <input
                type="text"
                name="house_number"
                value={formData.house_number}
                onChange={handleChange}
                className={textInputClass("house_number")}
              />
              {getFieldError("house_number") ? (
                <div className="invalid-feedback d-block">
                  {getFieldError("house_number")}
                </div>
              ) : null}
            </div>
            <div className="col-lg-6 ">
              <label htmlFor="" className="mb-2">
                Address Line 2
              </label>
              <input
                type="text"
                name="address_two"
                value={formData.address_two}
                onChange={handleChange}
                className={textInputClass("address_two")}
              />
              {getFieldError("address_two") ? (
                <div className="invalid-feedback d-block">
                  {getFieldError("address_two")}
                </div>
              ) : null}
            </div>
            <div className="col-lg-6 ">
              <label htmlFor="" className="mb-2">
                City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={textInputClass("city")}
              />
              {getFieldError("city") ? (
                <div className="invalid-feedback d-block">
                  {getFieldError("city")}
                </div>
              ) : null}
            </div>
            <div className="col-lg-6">
              <label htmlFor="" className="mb-2">
                Post Code
              </label>
              <input
                type="text"
                name="postcode"
                value={formData.postcode}
                onChange={handleChange}
                className={textInputClass("postcode")}
              />
              {getFieldError("postcode") ? (
                <div className="invalid-feedback d-block">
                  {getFieldError("postcode")}
                </div>
              ) : null}
            </div>
            <div className="col-lg-6">
              <label htmlFor="" className="mb-2">
                Country
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={selectInputClass("country")}
                aria-label="Large select example"
              >
                <option value="">Select Country</option>
                {countries.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.name}
                  </option>
                ))}
              </select>
              {getFieldError("country") ? (
                <div className="invalid-feedback d-block">
                  {getFieldError("country")}
                </div>
              ) : null}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h4 className="gift-aid-title mt-2">
                Email <span className="text-danger">*</span>
              </h4>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={textInputClass("email")}
              />
              <label htmlFor="">
                By giving us your email, you consent to being contacted via this
                method
              </label>
              {getFieldError("email") ? (
                <div className="invalid-feedback d-block">
                  {getFieldError("email")}
                </div>
              ) : null}
            </div>
            <div className="col-lg-6">
              <h4 className="gift-aid-title mt-2">Telephone</h4>
              <input
                type="text"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                className={textInputClass("telephone")}
              />
              <label htmlFor="">
                By giving us your email, you consent to being contacted via this
                method
              </label>
              {getFieldError("telephone") ? (
                <div className="invalid-feedback d-block">
                  {getFieldError("telephone")}
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="gift-aid-item">
          <div className="gift-aid-header">
            <h3>Your Parish</h3>
            <p>Please let us know which Parish you attend.</p>
          </div>
          <h4>
            Parish Details <span className="text-danger">*</span>
          </h4>
          <div className="row">
            <div className="col-lg-4 col-md-6 ">
              <select
                name="parish_id"
                value={formData.parish_id}
                onChange={handleChange}
                className={selectInputClass("parish_id")}
                aria-label="Large select example"
                required
              >
                <option value="">
                  {parishLoading ? "Loading parishes..." : "Parish Name"}
                </option>
                {parishes.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.parish_name}
                  </option>
                ))}
              </select>
              {getFieldError("parish_id") ? (
                <div className="invalid-feedback d-block">
                  {getFieldError("parish_id")}
                </div>
              ) : null}
            </div>
            <div className="col-lg-4 col-md-6">
              <input
                type="text"
                name="parish_email"
                value={formData.parish_email}
                onChange={handleChange}
                className={textInputClass("parish_email")}
                placeholder="Parish Email"
                readOnly
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <input
                type="text"
                name="parish_coordinator"
                value={formData.parish_coordinator}
                onChange={handleChange}
                className={textInputClass("parish_coordinator")}
                placeholder="Gift Aid Coordinator"
                readOnly
              />
            </div>
          </div>
          <p>
            Please select the name of the Parish you attend, and your Parishes
            email address from the drop-down list.
          </p>
        </div>
        <div className="gift-aid-item">
          <div className="gift-aid-header">
            <h3>Gift Aid Declaration</h3>
          </div>
          <h4>
            I wish to Gift Aid my donations
            <span className="text-danger"> *</span>
          </h4>
          <div className="row">
            <div className="col-lg-12">
              <div className="from-check-box-list">
                <input
                  type="checkbox"
                  name="i_wish_to_gift_aid"
                  id="i_wish_to_gift_aid"
                  checked={formData.i_wish_to_gift_aid}
                  onChange={handleCheckboxChange}
                  className={
                    getFieldError("i_wish_to_gift_aid") ? "is-invalid" : ""
                  }
                />
                <label htmlFor="i_wish_to_gift_aid">
                  Yes, I would like the Archdiocese of Southwark to treat all
                  qualifying donations I make today, and any donations I make in
                  the future or have made in the past 4 years, until I notify
                  you otherwise, as Gift Aid donations.
                </label>
              </div>
              {getFieldError("i_wish_to_gift_aid") ? (
                <div className="invalid-feedback d-block">
                  {getFieldError("i_wish_to_gift_aid")}
                </div>
              ) : null}
            </div>
          </div>
          <h4>
            Today&apos;s Date
            <span className="text-danger">*</span>
          </h4>
          <div className="row">
            <div className="col-lg-6">
              <input
                type="date"
                name="today_date"
                value={formData.today_date}
                onChange={handleChange}
                className={textInputClass("today_date")}
              />
              {getFieldError("today_date") ? (
                <div className="invalid-feedback d-block">
                  {getFieldError("today_date")}
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="gift-aid-item">
          <div className="gift-aid-header">
            <h3>Ways to support the work and mission of your parish</h3>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <h4>
                Planned Giving: Would you like to become a regular supporter, or
                update an existing regular gift?
                <span className="text-danger">*</span>
              </h4>
              <div className="from-check-box-list">
                <input
                  type="checkbox"
                  name="planned_giving_yes"
                  id="planned_giving_yes"
                  checked={formData.planned_giving_yes}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="planned_giving_yes">Yes</label>
              </div>
              <div className="from-check-box-list">
                <input
                  type="checkbox"
                  name="already_giving_regularly"
                  id="already_giving_regularly"
                  checked={formData.already_giving_regularly}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="already_giving_regularly">
                  I am already giving regularly
                </label>
              </div>
              <div className="from-check-box-list">
                <input
                  type="checkbox"
                  name="not_this_time"
                  id="not_this_time"
                  checked={formData.not_this_time}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="not_this_time">Not at this time</label>
              </div>
            </div>
            <div className="col-lg-12">
              <h4>
                Would you be interested in volunteering opportunities within
                your Parish?*
                <span className="text-danger">*</span>
              </h4>
              <div className="from-check-box-list">
                <input
                  type="checkbox"
                  name="interested_volunteering_yes"
                  id="interested_volunteering_yes"
                  checked={formData.interested_volunteering_yes}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="interested_volunteering_yes">Yes</label>
              </div>
              <div className="from-check-box-list">
                <input
                  type="checkbox"
                  name="interested_volunteering_not_this_time"
                  id="interested_volunteering_not_this_time"
                  checked={formData.interested_volunteering_not_this_time}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="interested_volunteering_not_this_time">
                  Not at this time
                </label>
              </div>
              <div className="from-check-box-list">
                <input
                  type="checkbox"
                  name="interested_volunteering_already_involved"
                  id="interested_volunteering_already_involved"
                  checked={formData.interested_volunteering_already_involved}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="interested_volunteering_already_involved">
                  I am already involved within my Parish as a volunteer
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="gift-aid-item">
          <div className="gift-aid-header">
            <h3>Privacy Policy</h3>
            <p>
              Your Privacy: Your personal details and donations will be stored
              securely on the Archdiocese of Southwark’s database. We comply
              with data protection regulation and the Fundraising Regulator’s
              code of practice. We will never sell your data to third parties.
              We will use your details to administer your gifts, occasionally
              send you news on the work of the Church and give you the
              opportunity to support appeals. We only share information with
              external organisations working on our behalf or when required by
              law (e.g. to claim Gift Aid). You can read the full privacy policy
              on: www.rcaos.org.uk/diocese/policies
            </p>
          </div>
        </div>
        <div className="gift-aid-item">
          <div className="gift-aid-header">
            <h4>
              Consent
              <span className="text-danger">*</span>
            </h4>
            <div className="from-check-box-list">
              <input
                type="checkbox"
                name="agree_privacy_policy"
                id="agree_privacy_policy"
                checked={formData.agree_privacy_policy}
                onChange={handleCheckboxChange}
                className={
                  getFieldError("agree_privacy_policy") ? "is-invalid" : ""
                }
                required
              />
              <label htmlFor="agree_privacy_policy">
                I agree to the privacy policy.
              </label>
            </div>
            {getFieldError("agree_privacy_policy") ? (
              <div className="invalid-feedback d-block">
                {getFieldError("agree_privacy_policy")}
              </div>
            ) : null}
          </div>
          <h5 className="gift-aid-deses">
            Roman Catholic Archdiocese of Southwark – A Charitable Incorporated
            Organisation – Registered Incorporated Charity Number 1173050
          </h5>
        </div>
        <div>
          <button
            className="custom-btn"
            type="submit"
            disabled={disableSubmit}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
        {successMessage ? (
          <div className="alert alert-success mt-2" role="alert">
            {successMessage}
          </div>
        ) : null}
        {errorMessage ? (
          <div className="alert alert-danger mt-2" role="alert">
            {errorMessage}
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default GiftaidFrom;
