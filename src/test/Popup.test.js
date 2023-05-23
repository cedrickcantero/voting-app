import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Popup from '../components/Popup';

test('calls handlePopupClose when close button is clicked', () => {
  const message = 'This is a popup message.';
  const handlePopupClose = jest.fn();
  const popup = true;

  const { getByText } = render(
    <Popup message={message} handlePopupClose={handlePopupClose} popup={popup} />
  );

  const closeButton = getByText('Close');
  fireEvent.click(closeButton);

  expect(handlePopupClose).toHaveBeenCalledTimes(1);
  expect(handlePopupClose).toHaveBeenCalledWith(popup);
});
