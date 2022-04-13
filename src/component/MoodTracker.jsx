import React from "react";
import dayjs from "dayjs";

const MoodTracker = ({ moodHistory }) => {
  return (
    <>
      {moodHistory.map(({ mood, emoji, message, date }) => (
        <div className={`mood-item ${mood}`} key={date}>
          <img src={emoji} alt="emoji" />
          <p>{message}</p>
          <p>{dayjs(date).format('DD-MM-YYYY / hh:mm')}</p>
          <p>{date}</p>
        </div>
      ))}
    </>
  );
};

export default MoodTracker;
