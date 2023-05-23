import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Category from '../components/Category';

describe('Category component', () => {
  const category = {
    title: 'Gentlemen of the Year',
    gender: 'male',
    nominees: [
      { id: 1, name: 'Brad Pitt' },
      { id: 2, name: 'Tom Cruise' },
    ],
  };

  test('renders category title and nominees', () => {
    const { getByText } = render(<Category category={category} />);

    const categoryTitle = getByText(`Category: ${category.title}`);
    expect(categoryTitle).toBeInTheDocument();

    category.nominees.forEach((nominee) => {
      const nomineeName = getByText(nominee.name);
      expect(nomineeName).toBeInTheDocument();
    });
  });

  test('calls handleNomineeSelection when a nominee is selected', () => {
    const category = {
      title: 'Gentlemen of the Year',
      gender: 'male',
      nominees: [
        { id: 1, name: 'Brad Pitt' },
        { id: 2, name: 'Tom Cruise' },
      ],
    };
    const setSelectedNominee = jest.fn();
    const { getByTestId } = render(
      <Category
        category={category}
        selectedMaleNominee={null}
        selectedFemaleNominee={null}
        setSelectedNominee={setSelectedNominee}
        disabled={false}
      />
    );
  
    const nomineeButton = getByTestId('vote-button-male-1');
    fireEvent.click(nomineeButton);
  
    expect(setSelectedNominee).toHaveBeenCalledWith(category.nominees[0]);
  });

  test('disables the nominees when disabled prop is true', () => {
    const category = {
      title: 'Gentlemen of the Year',
      gender: 'male',
      nominees: [
        { id: 1, name: 'Brad Pitt' },
        { id: 2, name: 'Tom Cruise' },
      ],
    };
    const setSelectedNominee = jest.fn();
    const { getByTestId } = render(
      <Category
        category={category}
        selectedMaleNominee={null}
        selectedFemaleNominee={null}
        setSelectedNominee={setSelectedNominee}
        disabled={true} // Set disabled to true for testing
      />
    );
  
    category.nominees.forEach((nominee) => {
      const nomineeButton = getByTestId(`vote-button-male-${nominee.id}`);
      expect(nomineeButton).toBeDisabled();
    });
  });
});