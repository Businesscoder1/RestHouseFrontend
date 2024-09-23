import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Page2.css";
import Dropdown from "react-bootstrap/Dropdown";
import OtpInput from "./OtpInput";
import { useLoginUserMutation, useVerifyOTPMutation } from "../../Services/OTPAuthApi";
import BedBooking from "../BedSelect/BedBooking";

const Page2 = () => {
  const [authId, setAuthId] = useState(null);
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("Select Category");
  const [gender, setGender] = useState("Select Gender");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState({ status: false, msg: "" });
  const [fieldErrors, setFieldErrors] = useState({
    phone: "",
    firstName: "",
    lastName: "",
    gender: "",
    esmNumber: "",
    days: "",
    file: "",
  });
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [esmNumber, setEsmNumber] = useState("");
  const [days, setDays] = useState("");
  const [file, setFile] = useState(null);
  const [loginUser] = useLoginUserMutation();
  const [verifyOTP] = useVerifyOTPMutation();
  const [timeLeft, setTimeLeft] = useState(30); // Timer for resend button
  const [resendDisabled, setResendDisabled] = useState(true); // Disable resend button initially
  const [loading, setLoading] = useState(false); // Add loading state

  // const navigate = useNavigate(); // Initialize navigation hook

  useEffect(() => {
    if (showOtpInput && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer); // Clean up the timer
    } else if (timeLeft === 0) {
      setResendDisabled(false); // Enable the resend button when timer reaches 0
    }
  }, [showOtpInput, timeLeft]);

  useEffect(() => {
    if (error.status) {
      const timer = setTimeout(() => {
        setError({ status: false, msg: "" });
      }, 3000); // Hide message after 3 seconds
      return () => clearTimeout(timer); // Clear timeout on unmount
    }
  }, [error]);

  const handleResendOtp = async () => {
    try {
      const actualData = { phonenumber: phone };
      const res = await loginUser(actualData); // Resend OTP API call

      if (res.data.status === "success") {
        setAuthId(res.data.sid);
        setError({ status: true, msg: "OTP resent successfully!" });
        setTimeLeft(30); // Reset the timer
        setResendDisabled(true); // Disable the resend button
      } else {
        setError({ status: true, msg: res.data.message });
      }
    } catch (err) {
      setError({ status: true, msg: "Error in resending OTP" });
    }
  };

  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
    if (
      selectedCategory !== "ESM" &&
      selectedCategory !== "ESW" &&
      selectedCategory !== "Serving"
    ) {
      setFile(null); // Reset file if category changes to something other than ESM, ESW, or Serving
    }
  };

  const handleGenderSelect = (selectedGender) => {
    setGender(selectedGender);
  };

  const handlePhoneNo = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation for required fields
    const errors = {
      category: category === "Select Category" ? "Category is required" : "",
      phone: phone.length !== 10 ? "Phone number must be 10 digits" : "",
      firstName: !firstName ? "First Name is required" : "",
      lastName: !lastName ? "Last Name is required" : "",
      gender: gender === "Select Gender" ? "Gender is required" : "",
      esmNumber:
        (category === "ESM" || category === "ESW" || category === "Serving") &&
        (!esmNumber || esmNumber <= 0)
          ? "Serving Number of ESM is required and must be greater than 0"
          : "",
      days:
        !days || days <= 0
          ? "Number of days to stay is required and must be greater than 0"
          : "",
      file:
        (category === "ESM" || category === "ESW" || category === "Serving") &&
        !file
          ? "ID card is required for ESM, ESW, or Serving"
          : "",
    };

    // Check if any field has an error
    if (Object.values(errors).some((errorMsg) => errorMsg)) {
      setFieldErrors(errors);
      setError({
        status: true,
        msg: "Please fill in all the required fields correctly.",
      });
      return;
    }

    // Clear errors if validation passes and show OTP input
    setFieldErrors({});
    setError({ status: false, msg: "" });
    setShowOtpInput(true); // Show OTP input field
  };

  const onOtpSubmit = async (otp) => {
    setLoading(true); // Show loading spinner
    try {
      const otpRes = await verifyOTP({ otp, phonenumber: phone });
      if (otpRes.data.status === "success") {
        setIsVerified(true);
        setError({ status: true, msg: "OTP verification successful!" });
        navigate('/nextPage'); // Redirect to the next page
      } else {
        setError({
          status: true,
          msg: otpRes.data.message || "OTP verification failed",
        });
      }
    } catch (err) {
      setError({ status: true, msg: "Error in OTP verification" });
    } finally {
      setLoading(false); // Hide loading spinner
    }
  };

  if (isVerified) {
    return (
      <div className="verification-success">
        <BedBooking />
      </div>
    );
  }

  return (
    <div className="information">
      <h1>Get Started with Your Rest House Booking</h1>
      <section className="section1">
        <div className="field">
          <label htmlFor="who">
            Who are you? <span className="required">*</span>
          </label>
          <Dropdown id="category">
            <Dropdown.Toggle variant="" id="drop2" size="sm">
              {category}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleCategorySelect("ESM")}>
                ESM
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleCategorySelect("ESW")}>
                ESW
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleCategorySelect("Serving")}>
                Serving
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleCategorySelect("Other")}>
                Other
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {fieldErrors.category && (
            <div className="field-error">{fieldErrors.category}</div>
          )}
        </div>
        <div className="field">
          <label htmlFor="fname">
            First Name: <span className="required">*</span>
          </label>
          <input
            type="text"
            id="fname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          {fieldErrors.firstName && (
            <div className="field-error">{fieldErrors.firstName}</div>
          )}
        </div>
        <div className="field">
          <label htmlFor="Mname">Middle Name:</label>
          <input
            type="text"
            id="Mname"
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="Lname">
            Last Name: <span className="required">*</span>
          </label>
          <input
            type="text"
            id="Lname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          {fieldErrors.lastName && (
            <div className="field-error">{fieldErrors.lastName}</div>
          )}
        </div>
      </section>

      <section className="section2">
        <div className="field">
          <label htmlFor="gender">
            Gender: <span className="required">*</span>
          </label>
          <Dropdown id="gender">
            <Dropdown.Toggle variant="" id="drop2" size="sm">
              {gender}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleGenderSelect("Male")}>
                Male
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleGenderSelect("Female")}>
                Female
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleGenderSelect("Other")}>
                Other
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {fieldErrors.gender && (
            <div className="field-error">{fieldErrors.gender}</div>
          )}
        </div>
        <div className="field">
          <label htmlFor="ESMnumber">
            Serving Number of ESM: <span className="required">*</span>
          </label>
          <input
            type="number"
            id="ESMnumber"
            value={esmNumber}
            onChange={(e) => setEsmNumber(e.target.value)}
            min="1"
            
          />
          {fieldErrors.esmNumber && (
            <div className="field-error">{fieldErrors.esmNumber}</div>
          )}
        </div>
        <div className="field">
          <label htmlFor="days">
            Number of days to stay: <span className="required">*</span>
          </label>
          <input
            type="number"
            id="days"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            min="1"
            required
          />
          {fieldErrors.days && (
            <div className="field-error">{fieldErrors.days}</div>
          )}
        </div>
      </section>

      <section className="section3">
        <div className="field">
          <label htmlFor="ESMid">Ex-Serviceman ID card:</label>
          <input
            type="file"
            name="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          {fieldErrors.file && (
            <div className="field-error">{fieldErrors.file}</div>
          )}
        </div>
        {!showOtpInput ? (
          <form className="field" onSubmit={handleSubmit} id="verify-form">
            <label htmlFor="phone">
              Phone Number: <span className="required">*</span>
            </label>
            <input
              type="text"
              id="phone"
              placeholder="Enter phone number"
              value={phone}
              onChange={handlePhoneNo}
              required
            />
            <button type="submit" id="verify">
              Verify
            </button>
            {error.status ? (
              <div className={`alert ${error.type}`}>{error.msg}</div>
            ) : (
              ""
            )}
          </form>
        ) : (
          <div>
            <p>Enter OTP sent to {phone}</p>
            <OtpInput length={6} onOtpSubmit={onOtpSubmit} />
            {error.status && (
              <div className={`alert ${error.status ? "error" : "success"}`}>
                {error.msg}
              </div>
            )}
            {loading && <div className="loading-spinner"></div>} {/* Loading Spinner */}
            <a
              onClick={handleResendOtp}
              disabled={resendDisabled}
              id="resend"
              style={{ cursor: resendDisabled ? "not-allowed" : "pointer" }}
            >
              Resend OTP {resendDisabled && `in ${timeLeft}s`}{" "}
            </a>
          </div>
        )}
      </section>
    </div>
  );
};

export default Page2;
