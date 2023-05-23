import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Nominee from '../components/Nominee';

test('calls onSelect when vote button is clicked and not disabled', () => {
  const nominee = {
    id: 1,
    name: 'Brad Pitt',
    image: 'brad-pitt.jpg',
  };
  const gender = 'male';
  const isSelected = false;
  const onSelect = jest.fn();
  const disabled = false;

  const { getByTestId } = render(
    <Nominee
      nominee={nominee}
      gender={gender}
      isSelected={isSelected}
      onSelect={onSelect}
      disabled={disabled}
    />
  );

  const voteButton = getByTestId(`vote-button-${gender}-${nominee.id}`);
  fireEvent.click(voteButton);

  expect(onSelect).toHaveBeenCalledTimes(1);
  expect(onSelect).toHaveBeenCalledWith(nominee);
});

test('does not call onSelect when vote button is clicked and disabled', () => {
  const nominee = {
    id: 2,
    name: 'Tom Cruise',
    image: 'tom-cruise.jpg',
  };
  const gender = 'male';
  const isSelected = false;
  const onSelect = jest.fn();
  const disabled = true;

  const { getByTestId } = render(
    <Nominee
      nominee={nominee}
      gender={gender}
      isSelected={isSelected}
      onSelect={onSelect}
      disabled={disabled}
    />
  );

  const voteButton = getByTestId(`vote-button-${gender}-${nominee.id}`);
  fireEvent.click(voteButton);

  expect(onSelect).not.toHaveBeenCalled();
});

test('does not call onSelect when vote button is clicked and disabled but nominee is already selected', () => {
  const nominee = {
    id: 3,
    name: 'Leonardo DiCaprio',
    image: 'leonardo-dicaprio.jpg',
  };
  const gender = 'male';
  const isSelected = true;
  const onSelect = jest.fn();
  const disabled = true;

  const { getByTestId } = render(
    <Nominee
      nominee={nominee}
      gender={gender}
      isSelected={isSelected}
      onSelect={onSelect}
      disabled={disabled}
    />
  );

  const voteButton = getByTestId(`vote-button-${gender}-${nominee.id}`);
  fireEvent.click(voteButton);

  expect(onSelect).not.toHaveBeenCalled();
});