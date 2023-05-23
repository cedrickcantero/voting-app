import React from 'react';
import '../assets/scss/Nominee.scss'
import VoteButton from './VoteButton';

const Nominee = ({ nominee, gender, isSelected, onSelect, disabled }) => {
  const handleVote = () => {
    if (!disabled) {
      onSelect(nominee);
    }
  };

  return (
    <div className='nominee-container'>
      <div className={`nominee-${nominee.id}`}>
        <div>
          <h3>{nominee.name}</h3>
        </div>
        <div>
          <img className="image-container" src={nominee.image} alt={nominee.name} />
        </div>
        <div>
          <VoteButton
            id={`vote-button-${gender}-${nominee.id}`}
            isSelected={isSelected}
            onClick={handleVote}
            disabled={disabled && !isSelected}
            data-testid={`vote-button-${gender}-${nominee.id}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Nominee;
