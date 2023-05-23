import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Home from '../components/Home';
import { VoteProvider } from '../components/ContextProvider/VoteContextProvider';

describe('Home Component', () => {
  test('renders without errors', () => {
    render(<VoteProvider><Home /></VoteProvider>);
  });

  test('selects and sets male nominee', () => {
    const { getByTestId } = render(<VoteProvider><Home /></VoteProvider>);
    const maleNomineeButton = getByTestId('vote-button-male-1');

    fireEvent.click(maleNomineeButton);
  });

  test('selects and sets female nominee', () => {
    const { getByTestId } = render(<VoteProvider><Home /></VoteProvider>);
    const femaleNomineeButton = getByTestId('vote-button-female-1');

    fireEvent.click(femaleNomineeButton);
  });

  test('submits votes and shows popup message', () => {
    const { getByTestId, getByText } = render(<VoteProvider><Home /></VoteProvider>);
    const maleNomineeButton = getByTestId('vote-button-male-1');
    const femaleNomineeButton = getByTestId('vote-button-female-1');
    const submitButton = getByText('Submit your Votes');

    fireEvent.click(maleNomineeButton);
    fireEvent.click(femaleNomineeButton);
    fireEvent.click(submitButton);
  });
});