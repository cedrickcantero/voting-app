import React from 'react';
import '../assets/scss/VoteButton.scss'

const VoteButton = ({ isSelected, onClick, disabled, id }) => {
  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  };

  return (
    <button
      className={isSelected ? 'vote-button selected' : 'vote-button'}
      data-testid={id}
      onClick={handleClick}
      disabled={disabled}
    >
      Vote
    </button>
  );
};

export default VoteButton;
