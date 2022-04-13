import React from "react";
import dayjs from "dayjs";
import MoodEmoji from "./MoodEmoji";

const MoodTracker = ({ moodHistory }) => {
  return (
    <div className="mood-tracker-container">
      {moodHistory.map(({ mood, emoji, message, date }) => (
        <div className={`mood-item ${mood}`} key={date}>
          <MoodEmoji mood={`${mood} active`} src={emoji} alt="emoji" />
          <div className="mood-details">
            <p>{message}</p>
            <p className="mood-date">
              {dayjs(date).format("DD-MM-YYYY / hh:mm")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoodTracker;
