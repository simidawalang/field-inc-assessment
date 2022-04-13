import React, { useState, useEffect, useRef } from "react";
import EmptyState from "./component/EmptyState";
import MoodTracker from "./component/MoodTracker";
import catLogo from "./assets/images/cat-logo.svg";
import sad from "./assets/emojis/sad.svg";
import indifferent from "./assets/emojis/indifferent.svg";
import happy from "./assets/emojis/happy.svg";

import "./scss/styles.scss";
import MoodEmoji from "./component/MoodEmoji";

const App = () => {
  const [catMood, setCatMood] = useState({
    emoji: null,
    mood: "",
    message: "",
    date: "",
  });
  const [moodHistory, setMoodHistory] = useState([]);
  const [isMoodSelected, setIsMoodSelected] = useState(false);

  const happyRef  = useRef();
  const indifferentRef  = useRef();
  const sadRef  = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {

    } 
  }, [isMoodSelected]);

  const selectMood = (e) => {
    const { id } = e.target;
    const { target } = e;
    target.classList.add("active");
    setIsMoodSelected(true);

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
    setIsMoodSelected(false);
  };

  return (
    <div className="home-page">
      <form onSubmit={handleSubmit}>
        <img
          id="form-logo"
          src={catLogo}
          alt="Cat Logo"
          width={94}
          height={79}
        />
        <p className="form-question">What's your cat’s current mood?</p>
        <div className="mood-options">
          <MoodEmoji
            id="sad"
            mood="sad"
            src={sad}
            alt="sad emoji"
            onClick={selectMood}
            ref={sadRef}
          />

          <MoodEmoji
            id="indifferent"
            src={indifferent}
            mood="indifferent"
            alt="indifferent emoji"
            onClick={selectMood}
            ref={indifferentRef}
          />
          <MoodEmoji
            id="happy"
            src={happy}
            mood="happy"
            alt="happy emoji"
            onClick={selectMood}
            ref={happyRef}
          />
        </div>
        <p className={`${catMood.mood} message`}>{catMood.message}</p>
        <button disabled={!catMood.mood} onClick={handleSubmit}>Save Mood</button>
      </form>
      <div className="mood-tracker">
        <div className="header">
          <img src={catLogo} width={49} height={41} alt="Cat logo"/>
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
