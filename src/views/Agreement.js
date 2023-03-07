import React, { useState } from "react";

function SubmitButton() {
  const [accepted, setAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleAcceptance() {
    setAccepted(true);
  }

  function handleSubmit() {
    if (accepted) {
      setSubmitted(true);
    } else {
      alert("Please accept the terms and conditions.");
    }
  }

  return (
    <div>
      <form>
        <label htmlFor="acceptance">
          <input
            type="checkbox"
            id="acceptance"
            onChange={handleAcceptance}
          />
          I have read the guidelines and I accept the terms and conditions.
        </label>
        <br />
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      {submitted && <p>Thank you for submitting!</p>}
    </div>
  );
}

export default SubmitButton;
