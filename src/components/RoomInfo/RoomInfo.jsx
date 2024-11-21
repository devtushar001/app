import React from 'react';

const RoomInfo = ({ size, maxOccupancy }) => {
  return (
    <div className="room-info">
      <ul>
        <li><strong>Size:</strong> {size} sq. ft.</li>
        <li><strong>Max Occupancy:</strong> {maxOccupancy} persons</li>
      </ul>
    </div>
  );
};

export default RoomInfo;
