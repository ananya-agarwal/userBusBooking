import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css';

const BookingCategory = () => {
  const Navigate = useNavigate();
  return (
    <div className='booking-page'>
      <div class="container-heading">
        <h1 className='booking-heading'>Make a Booking</h1>
      </div>

      <div className="category">

        <details>
          <summary>
            Premium
            <div className='category-content'>Embark on a journey where convenience meets affordability. Our Premium Class buses offer plush seating designed for relaxation, ensuring you enjoy every mile on the road. Featuring ample legroom, personalized climate control, and on-board entertainment systems, you can unwind or engage as you see fit. Free Wi-Fi keeps you connected, and power outlets keep your devices charged. Travel smartly without breaking the bank.</div>
          </summary>
          <p className='category-content'>
            <div>Available seats: <span className='seats-value'>0</span>
            </div>
            <div>Price: <span className='price-value'>1625</span>
            </div>
          </p>
          <button className='book-btn' onClick={() => Navigate('/BookPremiumMtH')}>Book for Premium</button>
        </details>

        <details>
          <summary>
            Deluxe
            <div className='category-content'>Elevate your road experience in our Deluxe Class coaches, where attention to detail crafts your ride. Each seat is an invitation to comfort with extra cushioning and recline features. Ambient lighting sets the mood while complimentary refreshments and a dedicated attendant cater to your needs. With deluxe class, you're not just traveling—you're indulging in a mobile lounge where every turn brings you closer to your destination, steeped in serenity.</div>
          </summary>
          <p className='category-content'>
            <div>Available seats: <span className='seats-value'>10</span>
            </div>
            <div>Price: <span className='price-value'>2000</span>
            </div>
          </p>
          <button className='book-btn' onClick={() => Navigate('/BookDeluxeMtH')}>Book for Deluxe</button>
        </details>

      </div>
    </div>
  )
}

export default BookingCategory
