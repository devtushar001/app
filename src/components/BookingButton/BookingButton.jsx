import React from 'react';

const BookingButton = () => {
  const handleBooking = () => {
    alert('Proceed to Booking!');
    // Add navigation or logic for booking process here.
  };

  return (
    <button className="booking-button" onClick={handleBooking}>
      Book Now
    </button>
  );
};

export default BookingButton;
