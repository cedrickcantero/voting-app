import React from 'react';
import '../assets/scss/Category.scss'
import Nominee from './Nominee';

const Category = ({category, selectedMaleNominee, selectedFemaleNominee, setSelectedNominee, disabled}) => {

  const handleNomineeSelection = (nominee) => {
    setSelectedNominee(nominee);
  };

const checkNominee = (nominee,gender) => {
  if(gender == 'male'){
    return selectedMaleNominee  && nominee.name === selectedMaleNominee.name
  }
  
  if(gender == 'female'){
    return selectedMaleNominee  && nominee.name === selectedFemaleNominee.name
  }
}

  return (
      <div className={`category-${category.gender}`}>
        <div className='category-title-container'>
          <h3>{`Category: ${category.title}`}</h3>
        </div>
      <div className="nominees">
        {category.nominees.map((nominee, index) => (
          <Nominee
            key={nominee.id}
            nominee={nominee}
            gender={category.gender}
            isSelected={checkNominee(nominee,category.gender)}
            onSelect={handleNomineeSelection}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;

