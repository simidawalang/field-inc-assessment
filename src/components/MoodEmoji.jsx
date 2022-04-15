import React, { forwardRef } from "react";

const MoodEmoji = forwardRef(({ id, className, mood, src, alt, onClick }, ref) => {
  return (
    <img
      id={id}
      className={`${mood} mood-emoji ${className}`}
      src={src}
      alt={alt}
      onClick={onClick}
      ref={ref}
    />
  );
});

export default MoodEmoji;
