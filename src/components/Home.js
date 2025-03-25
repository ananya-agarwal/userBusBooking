import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase-config';
import '../App.css';

const Home = () => {
  const Navigate = useNavigate();
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'routes'));
        const routeData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRoutes(routeData);
      } catch (error) {
        console.error("Error fetching routes:", error);
      }
    };

    fetchRoutes();
  }, []);

  return (
    <>
      <div className='routes'>
        {routes.map((route, index) => (
          <button
            key={index}
            className='route-btn'
            onClick={() => Navigate(`/BookingCategory`)}
          >
            {route.fromm} to {route.too}
          </button>
        ))}
      </div>
    </>
  )
}

export default Home
