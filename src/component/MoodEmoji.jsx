import React from "react";

const MoodEmoji = ({ id, mood, src, alt, onClick }) => {
  return <img id={id} className={mood} src={src} alt={alt} onClick={onClick} />;
};

export default MoodEmoji;
