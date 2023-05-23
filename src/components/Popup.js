import React, {useState} from 'react';
import '../assets/scss/Popup.scss'

const Popup = ({ message, handlePopupClose, popup }) => {
  const [showPopup, setShowPopup] = useState(popup);

  const handleClose = (popup) => {
    handlePopupClose(popup)
  }

  return (
    <div className="popup">
      <div className="popup-content">
        <p>{message}</p>
        <button className='popup-close-button' onClick={()=>handleClose(popup)}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
