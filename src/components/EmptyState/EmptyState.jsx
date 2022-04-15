import React from "react";
import grayCatLogo from "../../assets/images/gray-cat-logo.svg";

const EmptyState = () => {
  return (
    <div className="empty-state">
      <div className="empty-state-container">
        <img src={grayCatLogo} alt="gray cat logo" />
        <p>No mood history to show yet.</p>
      </div>
    </div>
  );
};

export default EmptyState;
