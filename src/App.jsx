import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"

// Pages
import Home from "./pages/Home";
import ScanQR from "./pages/ScanQR";
import AddNewClient from "./pages/AddNewClient";
import Clients from "./pages/Clients";

//Components
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scan-qr" element={<ScanQR />} />
        <Route path="/add-new-client" element={<AddNewClient />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
