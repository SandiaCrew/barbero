import React, { useEffect, useRef, useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import Container from '../components/Container';

function ScanQR() {
  const qrRef = useRef(null);
  const [scanner, setScanner] = useState(null);
  const [error, setError] = useState('');
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    const html5QrCode = new Html5Qrcode("qr-reader");
    setScanner(html5QrCode);

    return () => {
      if (html5QrCode.isScanning) {
        html5QrCode.stop().then(() => {
          console.log("QR Scanning stopped.");
        }).catch(err => {
          console.error("Unable to stop QR scanner", err);
        });
      }
    };
  }, []);

  const startScanning = () => {
    if (scanner && !isScanning) {
      const config = { fps: 10, qrbox: 250 };
      scanner.start(
        { facingMode: "environment" },
        config,
        (decodedText) => {
          console.log("Decoded data:", decodedText);
          logVisit(decodedText);
          stopScanning(); // Stop scanning after a successful scan
        },
        (errorMessage) => {
          // Remove the error logging for non-detection events
          // console.error("QR Code scanning error:", errorMessage);
        }
      ).then(() => {
        setIsScanning(true);
      }).catch((err) => {
        console.error("Unable to start QR scanner", err);
        setError("Unable to start QR scanner. Make sure camera is accessible.");
      });
    }
  };

  const stopScanning = () => {
    if (scanner && isScanning) {
      scanner.stop().then(() => {
        console.log("QR Scanning stopped.");
        setIsScanning(false);
      }).catch(err => {
        console.error("Unable to stop QR scanner", err);
      });
    }
  };

  // Function to log the visit using an API call
  function logVisit(clientId) {
    fetch(`https://barbero-backend-5gj8.onrender.com/client/${clientId}/create-visit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ clientId })
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to log visit');
      }
    })
    .then(data => {
      alert(`Visit logged successfully for client ID: ${clientId}`);
      console.log('Response:', data);
    })
    .catch(error => {
      console.error('API call error:', error);
      alert(`Error logging visit: ${error.message}`);
    });
  }

  return (
    <Container className={'flex flex-col'}>
      <h1 className="text-2xl text-center font-bold">Scan QR</h1>
      <hr className="my-8" />
      <div id="qr-reader" ref={qrRef} style={{ width: '100%', height: '500px' }} />
      {error && <p className="text-red-500">{error}</p>}
      <button 
        onClick={startScanning} 
        disabled={isScanning}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Start Scanning
      </button>
      <button 
        onClick={stopScanning} 
        disabled={!isScanning}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2"
      >
        Stop Scanning
      </button>
      <hr className="my-8" />
    </Container>
  );
}

export default ScanQR;
