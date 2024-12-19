import React, { useState } from "react";
import "./App.css";

function App() {
  const [answer, setAnswer] = useState("");
  const [attempts, setAttempts] = useState(0);
  const correctAnswer = "kruti"; // Correct answer

  const handleSubmit = (e) => {
    e.preventDefault();

    // Increment attempts on every submit
    setAttempts((prev) => prev + 1);

    // Compare the answer case-insensitively
    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
      alert("Correct! 🎉 Merry Christmas!");
    } else if (attempts + 1 < 3) {
      alert(`Try Again! 🎅 You have ${2 - attempts} attempt(s) left.`);
    } else {
      alert("Sorry, no more attempts left. 🎄 Better luck next time!");
    }
  };

  const handleGiftClick = () => {
    window.open("https://www.amazon.in/g/DS4B5464OKBT5T1I?ref=gc_utyp&templateId=a_for_amazon_default_child_noto_email_in-main", "_blank"); 
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🎄 Merry Christmas! 🎁</h1>
        <p>Welcome to this festive website!</p>
        <h2>Can you guess my name? 🤔</h2>
        <p>Here's a riddle:</p>
        <blockquote>
          I chart the world, but not with pen,<br />
          Between two who mirror each other, I’ve always been.<br />
          Glasses on, I navigate the code,<br />
          Building the future from a quiet abode.<br />
          My name stays secret, my work unseen,<br />
          Can you guess who I might have been?
        </blockquote>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your guess..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            disabled={attempts >= 3} 
          />
          <button type="submit" disabled={attempts >= 3}>
            Submit
          </button>
        </form>
        {attempts >= 3 && <p className="error">No more attempts! 🎅</p>}

        {/* Always show the gift card link */}
        <div className="gift-message">
          <p>Here's your Christmas gift! 🎁</p>
          <button onClick={handleGiftClick}>Click to Redeem Your Gift Card</button>
        </div>
      </header>
    </div>
  );
}

export default App;
