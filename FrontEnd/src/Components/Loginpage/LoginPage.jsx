
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import OtpInput from '../Register/OtpInput'; // Import the OtpInput component

const LoginPage = () => {
  const [phonenumber, setPhonenumber] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleSendOtp = async (event) => {
    try {
      await axios.post('http://localhost:8000/api/user/login', { phonenumber });
      setIsOtpSent(true);
    } catch (error) {
      console.error('Error sending OTP:', error);
    }

    event.preventDefault();
    const regex = /[^0-9]/g;
    if (phone.length < 10 || regex.test(phone)) {
      setError({ status: true, msg: "Invalid phone number", type: "error" });
      return;
    }

    try {
      const actualData = { phonenumber: phone };
      const res = await loginUser(actualData);

      if (res.data.status === "success") {
        setAuthId(res.data.sid); 
        setError({ status: true, msg: res.data.message, type: 'success' });
        setShowOtpInput(true);
      } else {
        setError({ status: true, msg: res.data.message, type: 'error' });
      }
    } catch (err) {
      setError({ status: true, msg: "Error in sending OTP", type: 'error' });
    }
  };

  const handleOtpSubmit = async (otp) => {
    try {
      const response = await axios.post('http://localhost:8000/api/user/verify', { phonenumber, otp });
      if (response.data.status === 'success') {
        navigate('/bed-booking'); 
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        value={phonenumber}
        onChange={(e) => setPhonenumber(e.target.value)}
        placeholder="Enter your mobile number"
      />
      <button onClick={handleSendOtp}>Send OTP</button>

      {isOtpSent && (
        <div>
          <OtpInput length={6} onOtpSubmit={handleOtpSubmit} />
        </div>
      )}
    </div>
  );
};

export default LoginPage;
