import { useState } from "react";
import axios from "axios";

const EmailOctopusForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await axios.post("/.netlify/functions/subscribe", {
        email,
      });
      if (response.status === 200) {
        setStatus("Subscription successful!");
        setEmail(""); // Reset the email field after successful submission
      } else {
        setStatus("Failed to subscribe. Please try again.");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setStatus("Failed to subscribe. Please try again.");
    }
  };

  return (
    <div>
      <h2>Subscribe to Our Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default EmailOctopusForm;
