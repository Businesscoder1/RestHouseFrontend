import React, { useEffect, useRef, useState } from 'react';
import './OtpInput.css';

const OtpInput = ({ length = 6, onOtpSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(''));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    // Allow only one input
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Move to the next input after the current one
    if (value && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }

    // Submit trigger
    const combinedOtp = newOtp.join('');
    if (combinedOtp.length === length) {
      onOtpSubmit(combinedOtp);
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);
  };

  return (
    <div className='styleotp'>
      {otp.map((value, index) => (
        <input
          key={index}
          type='number'
          value={value}
          ref={(input) => (inputRefs.current[index] = input)}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onClick={() => handleClick(index)}
          className='otpInput'
          maxLength={1}
        />
      ))}
    </div>
  );
};

export default OtpInput;
