import React, { useState } from 'react';
import "./Contact.css"                                  // Ensure you have a CSS file for styling

const ContactPage = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    // Simple client-side validation
    if (!name || !email || !message) {
      setResult("Please fill in all fields.");
      return;
    }

    setResult("Sending....");
    const formData = new FormData(event.target);

    // Append Web3Forms access key for authentication
    formData.append("access_key", "21fa5f9b-ffa7-43a0-8f9c-c4b02f767446");

    try {
      // Make the POST request to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      // Check if the form was submitted successfully
      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset();
      } else {
        setResult(data.message); // Error message from Web3Forms
      }
    } catch (error) {
      setResult("Error submitting the form. Please try again later.");
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="contactPage">
        <div className="contactPageContainer">
          <div className="gara"></div>
          <div className="contactInfo">
            <div className="infoBox1">
              <p>
                "Success isn’t about being the best, it’s about always getting
                better. Embrace challenges as opportunities to grow. Stay curious,
                stay humble, and let your passion lead the way."
              </p>
            </div>
            <div className="infoBox2">
              <div className="address">
                <h2>Address</h2>
                <p>Kandhukur, Andhra Pradesh</p>
                <p>Landmark: Near Kandhur</p>
                <p>Postal Code: 523116</p>
                <p>
                  <a
                    href="https://maps.google.com/?q=Kandhukur, Andhra Pradesh"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on Google Maps
                  </a>
                </p>
              </div>

              <div className="contact">
                <form onSubmit={onSubmit}>
                  <input
                    type="hidden"
                    name="access_key"
                    value="21fa5f9b-ffa7-43a0-8f9c-c4b02f767446"
                  />
                  <h2>Contact</h2>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                  ></textarea>
                  <button className="submit" type="submit">
                    Submit
                  </button>
                </form>
              </div>
              <span>{result}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
