import React, { useContext } from "react";
import './Room.css'
import { useParams } from "react-router-dom";
import { HostelContext } from "../../Context/HostelContext";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

const Room = () => {
  const { id } = useParams();
  const { hostelData } = useContext(HostelContext);

  return (
    <>
      {hostelData.map((room, index) => {
        if (room.id == id) {
          const { photos, name, type, price, maxOccupancy, size, amenities, description, bathroom, view, location } = room;
          const [fphoto, sphoto] = photos;
          return (
            <>
              <div className="room">
                <div className="room-images">{<ImageCarousel fphoto={fphoto} sphoto={sphoto} />}</div>
                <div className="room-details">
                  <h1>{name}</h1>
                  {/* type
                  price
                  maxOccupancy
                  size */}
                  <div className="room-full-details">
                    <p>Type : {type}</p>
                    <p>Price : {price}</p>
                    <p>Maxoccupancy : {maxOccupancy}</p>
                    <p>Size : {size}</p>
                  </div>
                  <div className="other-details">
                    <ul>
                    <h3>Amenities</h3>
                      {amenities.map((amenity, index) => {
                        return (
                          <li>{amenity}</li>
                        )
                      })}
                    </ul>
                    <div className="room-description">
                      <h3>Description</h3>
                      <p>{description}</p>
                    </div>
                  </div>
                </div>
              </div>

            </>
          )
        }
      })}
    </>
  )
}
export default Room;