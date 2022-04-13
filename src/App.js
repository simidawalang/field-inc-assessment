import React, { useState } from "react";
import EmptyState from "./component/EmptyState";
import MoodTracker from "./component/MoodTracker";
import catLogo from "./assets/images/cat-logo.svg";
import sad from "./assets/emojis/sad.svg";
import indifferent from "./assets/emojis/indifferent.svg";
import happy from "./assets/emojis/happy.svg";

import "./scss/styles.scss";

const App = () => {
  const [catMood, setCatMood] = useState({
    emoji: null,
    mood: "",
    message: "",
    date: ""
  });
  const [moodHistory, setMoodHistory] = useState([]);

  const selectMood = (e) => {
    const { id } = e.target;

    if (id === "sad") {
      setCatMood({
        emoji: sad,
        mood: "sad",
        message: "Cat was sad.",
        date: Date.now()
      });
    }
    if (id === "indifferent") {
      setCatMood({
        emoji: indifferent,
        mood: "indifferent",
        message: "Cat was indifferent.",
        date: Date.now()
      });
    }
    if (id === "happy") {
      setCatMood({
        emoji: happy,
        mood: "happy",
        message: "Cat was super excited!",
        date: Date.now()
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMoodHistory((prev) => [...prev, catMood]);
    setCatMood({ mood: "", message: "" });
  };

  return (
    <div className="home-page">
      <form onSubmit={handleSubmit}>
        <img src={catLogo} alt="Cat Logo" width={94} height={79} />
        <p>What is your cat’s current mood?</p>
        <div className="mood-options">
          <img id="sad" src={sad} alt="sad emoji" onClick={selectMood} />
          <img
            id="indifferent"
            src={indifferent}
            alt="indifferent emoji"
            onClick={selectMood}
          />
          <img id="happy" src={happy} alt="happy emoji" onClick={selectMood} />
        </div>
        <p>{catMood.message}</p>
        <button onClick={handleSubmit}>Save Mood</button>
      </form>
      <div className="mood-tracker">
        <h3>Cat mood tracker</h3>
        <p>Mood Tracker</p>
        <div>
          {moodHistory.length === 0 ? (
            <EmptyState />
          ) : (
            <MoodTracker moodHistory={moodHistory} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
