import React, { useState, useRef, useEffect } from 'react';

function PhoneVerificationButton() {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputsRef = useRef([]);
    const [showPopup, setShowPopup] = useState(false);
  
  useEffect(() => {
    if (showPopup) {
      inputsRef.current[0].focus();
    }
  }, [showPopup]);

  function handleButtonClick() {
    setShowPopup(true);
  }

  function handleInputKeyPress(event, index) {
    const key = event.key;
    if (/^\d$/.test(key)) {
      event.preventDefault();
      const newOtp = [...otp];
      newOtp[index] = key;
      setOtp(newOtp);
      if (index < 5) {
        inputsRef.current[index + 1].focus();
      }
    } else if (key === 'Backspace' && index > 0) {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
      inputsRef.current[index - 1].focus();
    }
  }

  function handleInputPaste(event) {
    event.preventDefault();
    const pasteData = event.clipboardData.getData('text/plain');
    if (/^\d{6}$/.test(pasteData)) {
      setOtp(pasteData.split(''));
    }
  }

  function handleInputKeyDown(event, index) {
    if (event.key === 'ArrowLeft' && index > 0) {
      inputsRef.current[index - 1].focus();
    } else if (event.key === 'ArrowRight' && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  }

  function handlePopupClose() {
    setShowPopup(false);
    setOtp(['', '', '', '', '', '']);
  }

  return (
    <>
      <button onClick={handleButtonClick}>Verify OTP</button>
      {showPopup && (
        <div className="phone-verification-popup">
          <h3>Enter OTP</h3>
          <div className="otp-inputs">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="tel"
                value={digit}
                maxLength="1"
                pattern="[0-9]*"
                onKeyPress={(event) => handleInputKeyPress(event, index)}
                onKeyDown={(event) => handleInputKeyDown(event, index)}
                onPaste={handleInputPaste}
                ref={(input) => inputsRef.current[index] = input}
              />
            ))}
          </div>
          <button onClick={handlePopupClose}>Verify</button>
        </div>
      )}
    </>
  );
}

export default PhoneVerificationButton;
