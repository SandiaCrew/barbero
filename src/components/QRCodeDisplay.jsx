// QRCodeDisplay.jsx

import React from 'react';

function QRCodeDisplay({ qrCode }) {
  if (!qrCode) {
    return null; // Don't render anything if there's no QR code
  }

  return (
    <>
      <h2 className="text-xl font-bold">Client QR Code:</h2>
      <img src={qrCode} alt="Client QR Code" style={{ width: '100%', object: 'contain' }} />
      <hr className='my-4'></hr>
    </>
  );
}

export default QRCodeDisplay;
