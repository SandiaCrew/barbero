import React from 'react';

function QRCodeDisplay({ qrCode }) {
  if (!qrCode) {
    return null; // Don't render anything if there's no QR code
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        // Convert data URL to blob
        const response = await fetch(qrCode);
        const blob = await response.blob();
        const file = new File([blob], "qr_code.png", { type: 'image/png' });

        await navigator.share({
          files: [file],
          title: 'Client QR Code',
          text: 'Here is a QR Code for our client. Please check it out!'
        });

        console.log('QR Code shared successfully!');
      } catch (error) {
        console.error('Error sharing QR Code:', error);
      }
    } else {
      // Alert the user if sharing is not supported.
      alert('Sharing not supported. Please manually download and share the QR Code.');
    }
  };

  return (
    <>
      <h2 className="text-xl font-bold">Client QR Code:</h2>
      <img src={qrCode} alt="Client QR Code" style={{ width: '100%', objectFit: 'contain' }} />
      <button onClick={handleShare} className="mt-4 mb-4 p-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700">
        Share QR Code
      </button>
      <hr className='my-4'></hr>
    </>
  );
}

export default QRCodeDisplay;
