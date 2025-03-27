import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import BookingCategory from './components/BookingCategory';
import BookPremiumMtH from './components/BookPremiumMtH';
import BookDeluxeMtH from './components/BookDeluxeMtH';
import Nav from './components/Nav';
import Admin from './components/Admin';
import Contact from './components/Contact';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './components/firebase-config';
import './App.css';

function App() {
  const [logoUrl, setLogoUrl] = useState('');

  useEffect(() => {
    async function fetchLogoUrl() {
      try {
        const logosCollection = collection(db, "logos");
        const logoSnapshot = await getDocs(logosCollection);
        const logosList = logoSnapshot.docs.map(doc => doc.data());
        const logo = logosList[0];
        setLogoUrl(logo.url);
      } catch (error) {
        console.error("Error fetching logo:", error);
      }
    }

    fetchLogoUrl();
  }, []);

  return (
    <>
      <div className='header'>
        {logoUrl && <img src={logoUrl} alt='bus-logo' className='logo' />}
        <marquee direction='right'><h1>Routes</h1></marquee>
      </div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/userBusBooking" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/BookingCategory" element={<BookingCategory /> } />
          <Route path="/BookPremiumMtH" element={<BookPremiumMtH /> } />
          <Route path="/BookDeluxeMtH" element={<BookDeluxeMtH /> } />
          <Route path="/Admin" element={<Admin /> } />
        </Routes>
      </BrowserRouter>
      <footer>
        <div>
          &copy; 2023 BusBookingCo. All rights reserved.
          <ul>
            <li>Admin Panel for dynamically changing the text on the route button above and top left logo</li>
            <li>Get notified via email when customer fills credentials</li>
            <li>All customer data stored in firebase DB</li>
            <li>Payment via RazorPay</li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;
