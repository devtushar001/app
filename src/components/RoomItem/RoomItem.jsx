import React from "react";
import nav_icon from "../../assets/images/db"
import './RoomItem.css';
import { Link } from 'react-router-dom';


const RoomItem = (props) => {
  const { id, name, type, size, photos, price, reviews, reviewCount } = props;
  const [fphoto] = photos;

  return (
    <>
      <div className="item">
        <div className="room-item">
          <div className="left-side">
            <img src={fphoto} alt="" /><br />
          </div>
          <div className="right-side">
            <h3>{name}</h3>
            <div className="room-specification">
              <p>Room Type :- {type}  </p> 
              <p> Room Type :- {size}</p>
            </div>
            <div className="price">{price}</div>
            <div className="room-review">
              <p>Reviews : {reviews} &#9733; <br /><span> Review Count : {reviewCount}</span></p>
            </div>
            <Link to={`/room/${id}`}>
              <button className="room-check">Check Details</button>
            </Link>
          </div>
        </div>
      </div>

    </>
  )
}

export default RoomItem;