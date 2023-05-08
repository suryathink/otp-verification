
<a href="https://otp-verification-umber.vercel.app/" target="_blank">Deployed Link</a>
## Code Documentation

### Instructions to run the code locally
1. Clone the repository from the git remote or download the ZIP file.
2. Install the dependencies by running `npm install`.
3. Start the application by running `npm start`.
4. Navigate to http://localhost:3000/ to see the application running.

### What the code does
This code creates a React component called `PhoneVerificationButton` which renders a button with text "Verify OTP". When the button is clicked, a popup appears asking the user to enter a 6 digit One-Time Password (OTP) to verify their phone number. The popup contains six input fields, each accepting one digit of the OTP, and a "Close" button to dismiss the popup.

The OTP input fields have the following behavior:
- The focus is set to the first input field when the popup is displayed.
- The user can only enter digits from 0 to 9.
- The input cursor automatically moves to the next field after a digit is entered.
- The input cursor moves to the previous field when the "Backspace" key is pressed.
- The user can paste a 6-digit OTP in the input fields.
- If the user pastes the OTP from the clipboard, it is auto-filling the input boxes


