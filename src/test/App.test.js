import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import { VoteProvider } from '../components/ContextProvider/VoteContextProvider';

describe('App Component', () => {
  test('renders without errors', () => {
    render(<VoteProvider><App /></VoteProvider>);
  });
});