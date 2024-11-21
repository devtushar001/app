import React from 'react';

const Amenities = ({ amenities }) => {
  return (
    <div className="amenities">
      <ul>
        {amenities.map((amenity, index) => (
          <li key={index} className="amenity-item">
            {amenity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Amenities;
