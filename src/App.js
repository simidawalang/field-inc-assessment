import React, { useState } from "react";

import EmptyState from "./components/EmptyState";
import MoodEmoji from "./components/MoodEmoji";
import MoodTracker from "./components/MoodTracker";

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
    date: "",
  });
  const [moodHistory, setMoodHistory] = useState([]);

  const removeActiveClass = () => {
    const activeEmojis = document.querySelectorAll(".active.mood-emoji.mood-option");
    for (const emoji of activeEmojis) {
      emoji.classList.remove("active");
    }
  };

  const selectMood = (e) => {
    const { id } = e.target;

    removeActiveClass();
    e.currentTarget.classList.add("active");
    // removes active class, then just adds it to the one clicked

    if (id === "sad") {
      setCatMood({
        emoji: sad,
        mood: "sad",
        message: "Cat was sad.",
        date: Date.now(),
      });
    }
    if (id === "indifferent") {
      setCatMood({
        emoji: indifferent,
        mood: "indifferent",
        message: "Cat was indifferent.",
        date: Date.now(),
      });
    }
    if (id === "happy") {
      setCatMood({
        emoji: happy,
        mood: "happy",
        message: "Cat was super excited!",
        date: Date.now(),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMoodHistory((prev) => [...prev, catMood]);
    setCatMood({ mood: "", message: "" });
    removeActiveClass();
  };

  return (
    <div className="home-page">
      <form onSubmit={handleSubmit}>
        <img
          id="form-logo"
          className="mood-option"
          src={catLogo}
          alt="Cat Logo"
          width={94}
          height={79}
        />
        <p className="form-question">What's your cat’s current mood?</p>
        <div className="mood-options">
          <MoodEmoji
            id="sad"
            className="mood-option"
            mood="sad"
            src={sad}
            alt="sad emoji"
            onClick={selectMood}
          />

          <MoodEmoji
            id="indifferent"
            className="mood-option"
            src={indifferent}
            mood="indifferent"
            alt="indifferent emoji"
            onClick={selectMood}
          />
          <MoodEmoji
            id="happy"
            className="mood-option"
            src={happy}
            mood="happy"
            alt="happy emoji"
            onClick={selectMood}
          />
        </div>
        <p className={`${catMood.mood} message`}>{catMood.message}</p>
        <button disabled={!catMood.mood} onClick={handleSubmit}>
          Save Mood
        </button>
      </form>
      <div className="mood-tracker">
        <div className="header">
          <img src={catLogo} width={49} height={41} alt="Cat logo" />
          <h3>Cat mood tracker™</h3>
        </div>
        <p className="mood-history">mood history</p>
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
