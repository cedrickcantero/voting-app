import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import VoteButton from '../components/VoteButton';

test('calls onClick when the button is clicked', () => {
  const onClick = jest.fn();
  const isSelected = false;
  const disabled = false;
  const id = 'vote-button-1';

  const { getByTestId } = render(
    <VoteButton isSelected={isSelected} onClick={onClick} disabled={disabled} id={id} />
  );

  const voteButton = getByTestId(id);
  fireEvent.click(voteButton);

  expect(onClick).toHaveBeenCalledTimes(1);
});

test('does not call onClick when the button is disabled', () => {
  const onClick = jest.fn();
  const isSelected = false;
  const disabled = true;
  const id = 'vote-button-1';

  const { getByTestId } = render(
    <VoteButton isSelected={isSelected} onClick={onClick} disabled={disabled} id={id} />
  );

  const voteButton = getByTestId(id);
  fireEvent.click(voteButton);

  expect(onClick).not.toHaveBeenCalled();
});

test('disables the button when disabled prop is true', () => {
  const onClick = jest.fn();
  const isSelected = false;
  const disabled = true;
  const id = 'vote-button-1';

  const { getByTestId } = render(
    <VoteButton isSelected={isSelected} onClick={onClick} disabled={disabled} id={id} />
  );

  const voteButton = getByTestId(id);
  expect(voteButton).toBeDisabled();
});

test('does not disable the button when disabled prop is false', () => {
  const onClick = jest.fn();
  const isSelected = false;
  const disabled = false;
  const id = 'vote-button-1';

  const { getByTestId } = render(
    <VoteButton isSelected={isSelected} onClick={onClick} disabled={disabled} id={id} />
  );

  const voteButton = getByTestId(id);
  expect(voteButton).not.toBeDisabled();
});

test('adds "selected" class when isSelected prop is true', () => {
  const onClick = jest.fn();
  const isSelected = true;
  const disabled = false;
  const id = 'vote-button-1';

  const { getByTestId } = render(
    <VoteButton isSelected={isSelected} onClick={onClick} disabled={disabled} id={id} />
  );

  const voteButton = getByTestId(id);
  expect(voteButton).toHaveClass('selected');
});

test('does not add "selected" class when isSelected prop is false', () => {
  const onClick = jest.fn();
  const isSelected = false;
  const disabled = false;
  const id = 'vote-button-1';

  const { getByTestId } = render(
    <VoteButton isSelected={isSelected} onClick={onClick} disabled={disabled} id={id} />
  );

  const voteButton = getByTestId(id);
  expect(voteButton).not.toHaveClass('selected');
});