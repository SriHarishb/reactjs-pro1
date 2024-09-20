import React, { useState } from 'react';



const OTPPage = () => {
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Focus on the next input box if a number is entered
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Entered OTP is:", otp.join(''));
  };

  return (
    <div className="otp-container">
      <div className="otp-left">
        <img src="public/images/Logo.png" alt="Logo" className="logo" />
        <h2>Package GPS Tracking</h2>
      </div>
      <div className="otp-right">
        <h3>Enter Confirmation Code</h3>
        <p>We have sent a code to Your Mail</p>
        <form onSubmit={handleSubmit}>
          <div className="otp-inputs">
            {otp.map((data, index) => {
              return (
                <input
                  type="text"
                  name="otp"
                  maxLength="1"
                  key={index}
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onFocus={(e) => e.target.select()}
                />
              );
            })}
          </div>
          <button type="submit" className="btn-continue">                                   Continue</button>
        </form>
        <p>
          Didn’t receive the email? <a href="#">Click to Resend</a>
        </p>
      </div>
    </div>
  );
};

export default OTPPage;
