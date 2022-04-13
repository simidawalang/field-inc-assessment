import React from 'react';
import grayCatLogo from "../assets/images/gray-cat-logo.svg";

const EmptyState = () => {
    return (
        <div className='empty-state'>
            <img src={grayCatLogo} alt="gray cat logo" />
            <p>No mood hisory to show yet.</p>
        </div>
    );
};

export default EmptyState;