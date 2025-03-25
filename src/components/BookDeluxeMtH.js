import React, { useState } from 'react'
import { collection, addDoc } from "firebase/firestore";
import { db } from './firebase-config';
import emailjs from 'emailjs-com';
import '../App.css';

const BookDeluxeMtH = () => {
  const [passenger, setPassenger] = useState();
  const [name, setName] = useState();
  const [dob, setDob] = useState();
  const [gender, setGender] = useState();

  const ticketPrice = 1;

  const paymentSuccess = async (response) => {
    console.log('Payment successful for transaction ID:', response.razorpay_payment_id);
  };

  const submit = async (event) => {
    event.preventDefault();

    const data = {
      passenger: passenger,
      name: name,
      dob: dob,
      gender: gender
    };

    try {
      const docRef = await addDoc(collection(db, 'bookings'), data);
      console.log('Document written with ID:', docRef.id);

      const emailData = {
        to_name: name,
        no_of_passengers: passenger,
        date_of_birth: dob,
        user_gender: gender,
      };

      const serviceID = 'service_ru8cnuj';
      const templateID = 'template_fv3h0ai';
      const userID = '0XRcw5MUMuocfRgmt';

      await emailjs.send(serviceID, templateID, emailData, userID);
      console.log('Email successfully sent!');
      const amountToPay = passenger * ticketPrice;
      handlePayment(amountToPay, paymentSuccess);
    } catch (e) {
      console.error('Error adding document, sending email, or initiating payment:', e);
    }
  };

  const handlePayment = (amount, onSuccess) => {
    const options = {
      key: 'rzp_live_0zsdA39bR9IgJt',
      amount: amount * 100,
      currency: 'INR',
      name: 'Ananya Tours and Travels',
      description: 'Buses from Moradabad to anywhere',
      prefill: {
        name,
        email: '',
        contact: '',
      },
      theme: {
        color: '#F37254',
      },
      handler: onSuccess,
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div className='credentials-form'>
      <form onSubmit={submit} className='form-inside'>
        <input type="number" placeholder='No of Passengers' value={passenger} onChange={(e) => setPassenger(e.target.value)} />
        <input type="text" placeholder='Full Name' value={name} onChange={(e) => setName(e.target.value)} />
        <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
        <input type="text" placeholder='Gender' value={gender} onChange={(e) => setGender(e.target.value)} />
        <button className='btn'>Pay Now</button>
      </form>
    </div>
  )
}

export default BookDeluxeMtH
