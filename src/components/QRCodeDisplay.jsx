// QRCodeDisplay.jsx

import React from 'react';

function QRCodeDisplay({ qrCode }) {
  if (!qrCode) {
    return null; // Don't render anything if there's no QR code
  }

  return (
    <>
      <h2 className="text-xl font-bold">Client QR Code:</h2>
      <img src={qrCode} alt="Client QR Code" style={{ width: '200px', height: '200px' }} />
      <hr className='my-8'></hr>
    </>
  );
}

export default QRCodeDisplay;
