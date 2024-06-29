import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import Container from '../components/Container';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal'; // Assume you have a Modal component

const baseURL = import.meta.env.VITE_API_BASE_URL;

function ScanQR() {
  const qrRef = useRef(null);
  const [scanner, setScanner] = useState(null);
  const [error, setError] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [clientName, setClientName] = useState('');
  const [clientId, setClientId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!scanner) {
      const html5QrCode = new Html5Qrcode("qr-reader");
      setScanner(html5QrCode);

      const config = { fps: 10, qrbox: 250 };
      html5QrCode.start(
        { facingMode: "environment" },
        config,
        (decodedText) => {
          logVisit(decodedText);
        },
        (errorMessage) => {
          console.error("QR Code scan error:", errorMessage);
        }
      ).then(() => {
        console.log("QR Scanning started.");
      }).catch((err) => {
        console.error("Unable to start QR scanner", err);
        setError("Unable to start QR scanner. Make sure camera is accessible.");
      });
    }

    return () => {
      if (scanner && scanner.isScanning) {
        scanner.stop().then(() => {
          console.log("QR Scanning stopped.");
        }).catch(err => {
          console.error("Unable to stop QR scanner", err);
        });
      }
    };
  }, [scanner]);

  const logVisit = useCallback((clientId) => {
    fetch(`${baseURL}/client/${clientId}/create-visit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ clientId })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to log visit: ${response.statusText} (${response.status})`);
        }
        return response.json();
      })
      .then(data => {
        setClientName(data.clientName);
        setClientId(clientId);
        setModalVisible(true);
        if (scanner) {
          scanner.stop().then(() => {
            console.log("QR Scanning stopped.");
          }).catch(err => {
            console.error("Unable to stop QR scanner", err);
          });
        }
      })
      .catch(error => {
        console.error('API call error:', error);
        setError(`Error logging visit: ${error.message}`);
      });
  }, [scanner]);

  const handleModalConfirm = useCallback(() => {
    navigate(`/client/${clientId}`);
  }, [clientId, navigate]);

  return (
    <Container className="flex flex-col">
      <h1 className="text-2xl text-center font-bold">Scan QR</h1>
      <hr className="my-8" />
      <div id="qr-reader" ref={qrRef} style={{ width: '100%', height: '100%' }} />
      {error && <p className="text-red-500">{error}</p>}
      <hr className="my-8" />
      {modalVisible && (
        <Modal onClose={() => setModalVisible(false)}>
          <p>Visit successfully logged for {clientName}</p>
          <button
            onClick={handleModalConfirm}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            View Client
          </button>
        </Modal>
      )}
    </Container>
  );
}

export default ScanQR;
