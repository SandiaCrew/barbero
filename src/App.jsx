import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"

// Pages
import Home from "./pages/Home";
import ScanQR from "./pages/ScanQR";
import CreateClient from "./pages/CreateClient";
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
        <Route path="/create-client" element={<CreateClient />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
