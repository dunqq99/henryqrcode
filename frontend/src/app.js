import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import QrForm from './QrForm';
import Contact from './Contact';
import './app.css'; // Import file CSS

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-item"><Link to="/create-qr">Tạo mã QR</Link></li>
              <li className="nav-item"><Link to="/lien-he">Liên hệ</Link></li>
            </ul>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<QrForm />} />
            <Route path="/create-qr" element={<QrForm />} />
            <Route path="/lien-he" element={<Contact />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>Hotline: 0332 556 499 - Zalo</p>
          <p>Tele: @devcanvar</p>
          <p>Email: Coderyeuem@gmail.com</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
