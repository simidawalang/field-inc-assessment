import React, { forwardRef } from "react";

const MoodEmoji = forwardRef(({ id, mood, src, alt, onClick }, ref) => {
  return (
    <img
      id={id}
      className={`mood-emoji ${mood}`}
      src={src}
      alt={alt}
      onClick={onClick}
      ref={ref}
    />
  );
});

export default MoodEmoji;
