import { useState } from "react";
import axios from "axios";

import styles from "./EmailOctopusForm.module.css";

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
        setStatus("Success! We'll be in touch.");
        setEmail("");
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      <h2>Become a member</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email address"
          required
        />
        <button type="submit">Submit</button>
      </form>
      {status && <p className={styles.status}>{status}</p>}
    </div>
  );
};

export default EmailOctopusForm;
