import React, { useState, useRef } from 'react';
import './App.css';

const DRIVE_LINK = 'https://drive.google.com/drive/folders/1N8xtmD_NZQXi8L5qyEnAgI0QEyaWvztp';

// ---- İllüstrasyon: Davetiyedeki yüzük + çiçek ----



export default function App() {
  const [dragging, setDragging] = useState(false);
  const dropRef = useRef(null);

  const handleDragOver = (e) => { e.preventDefault(); setDragging(true); };
  const handleDragLeave = () => setDragging(false);
  const handleDrop = (e) => { e.preventDefault(); setDragging(false); };

  const handleUploadClick = () => {
    window.open(DRIVE_LINK, '_blank');
  };

  return (
    <div className="page">
      <div className="container">
        <img src="/cicek.png" alt="çiçek" className="top-flower" />



        <div className="divider">
          <div className="divider-dot" />
        </div>

        <p className="subtitle">
          Bu güzel günün anılarını bizimle paylaşın.<br />
          Fotoğraflarınız bizim albümümüze eklenecek.
        </p>

        {/* Fotoğraf yükleme butonu */}
        <div
          ref={dropRef}
          className={`upload-area ${dragging ? 'drag-over' : ''}`}
          onClick={handleUploadClick}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {/* Buraya fotoğraf ekleyeceksin */}
          <div className="upload-photo-placeholder">
            {/* <img src="/photo.jpg" alt="nişan" className="couple-photo" /> */}
          </div>

          <svg className="upload-icon" viewBox="0 0 40 40" fill="none">
            <path d="M20 26V14M20 14L15 19M20 14L25 19" stroke="#8a8278" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 28C7 28 5 26 5 23C5 20 7 18 10 18C10 14 13 11 17 11C18 11 19 11.3 20 12C21 10 23 9 25 9C29 9 32 12 32 16C35 16 37 18 37 21C37 24 35 26 32 26" stroke="#8a8278" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          <p className="upload-text">Fotoğraflarınızı Yükleyin</p>
          <p className="upload-hint">Drive klasörüne gitmek için tıklayın</p>
        </div>

        <div className="footer">Elzem Ezgi & Sait Mert · 18.04.2026</div>
      </div>
    </div>
  );
}
