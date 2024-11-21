import React from 'react';

const AdditionalInfo = ({ bathroom, view, location, checkInTime, checkOutTime, bookingPolicy }) => {
  return (
    <div className="additional-info">
      <ul>
        <li><strong>Bathroom:</strong> {bathroom}</li>
        <li><strong>View:</strong> {view}</li>
        <li><strong>Location:</strong> {location}</li>
        <li><strong>Check-In Time:</strong> {checkInTime}</li>
        <li><strong>Check-Out Time:</strong> {checkOutTime}</li>
        <li><strong>Booking Policy:</strong> {bookingPolicy}</li>
      </ul>
    </div>
  );
};

export default AdditionalInfo;
