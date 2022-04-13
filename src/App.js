import React, { useState, useRef } from "react";
import catLogo from "./assets/images/cat-logo.svg";
import sad from "./assets/emojis/sad.svg";
import indifferent from "./assets/emojis/indifferent.svg";
import happy from "./assets/emojis/happy.svg";
import "./scss/styles.scss";

const App = () => {
  const [catMood, setCatMood] = useState("");
  const [moodText, setMoodText] = useState("");
  const [moodHistory, setMoodHistory] = useState([]);

  const selectMood = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="home-page">
      <form onSubmit={handleSubmit}>
        <img src={catLogo} alt="Cat Logo" />
        <p>What is your cat’s current mood?</p>
        <div className="mood-options">
          <img id="happy" src={sad} alt="sad emoji" />
          <img id="indifferent" src={indifferent} alt="indifferent emoji" />
          <img id="happy" src={happy} alt="happe emoji" />
        </div>
        {moodText}
        <button onClick={handleSubmit}>Save Mood</button>
      </form>
    </div>
  );
};

export default App;
