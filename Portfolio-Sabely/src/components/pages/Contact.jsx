import { useState } from "react";
import '../../styles/style.css';
import { validateEmail } from "../../utils/help";

function Contact () {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [message, setMessage] =useState('');
    const [errorMessage, setErrorMessage] = useState ('');
    const [successMessage, setsuccessMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } =e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email'){
            setEmail(inputValue);
            if(!validateEmail(inputValue)){
                setErrorMessage('Sorry This Email Is Invalid');
            } else {
                setErrorMessage('');
            }
        } else if (inputType === 'userName') {
            setUserName(inputValue);
            if (inputValue.length === 0) {
                setErrorMessage('Sorry Your User Is Empty');
            } else {
                setErrorMessage('');
            }
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email) || userName.length === 0 || message.length === 0) {
            setErrorMessage('Please Fill In All Fields Correctly');
            return;
          }
      
          setSuccessMessage(`Your Message Has Been Sent! Thank You ${userName}!`);
          setUserName('');
          setMessage('');
          setEmail('');
          setErrorMessage(''); 
        };
        return (
            <div className="container text-center contact-page">
              <form className="form wrapper" onSubmit={handleFormSubmit}>
                <h1 className="form-header">If You Want To Get In Touch With Me!</h1>
                <div className="input-field">
                  <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="email"
                    required
                  />
                </div>
                <div className="input-field">
                  <input
                    value={userName}
                    name="userName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="username"
                  />
                </div>
                <div className="input-field">
                  <textarea
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    placeholder="Message"
                    rows="10"
                    required
                  />
                </div>
                <button type="submit">Submit</button>
                {errorMessage && (
                  <div className="error-container">
                    <p className="error-text">{errorMessage}</p>
                  </div>
                )}
                {successMessage && (
                  <div className="success-container">
                    <p className="success-text">{successMessage}</p>
                  </div>
                )}
              </form>
            </div>
          );
        }
        
        export default Contact;