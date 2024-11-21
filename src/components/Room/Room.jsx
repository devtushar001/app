import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import './Room.css'
import { HostelContext } from "../../Context/HostelContext";

const Room = () => {
  
  const { hostelData } = useContext(HostelContext);
  const { id } = useParams();
  return (
    <>
     <div>
      {
        hostelData.map((item, i) => {
          if (item.id == id) {
            return (
              <>
                <div className="container" key={i}>
                  {item.name}
                  <br />
                  {item.type}
                  <br />
                  {item.price}
                  <br />
                  {item.maxOccupancy}
                  <br />
                  {item.size}
                  <br />
                  {item.amenities.map((amen, i) => {
                    return (
                      <div className="amen" key={i}>
                           <li>{amen}</li>
                      </div>
                    )
                  })}
                  <br />
                  {item.description}
                  <br />
                  {item.bathroom}
                  <br />
                  {item.view}
                  <br />
                  {item.location}
                  <br />
                  {item.photos.map((image, i)=> {
                    return (
                      <>
                        <div key={i }>
                           <li>{image}</li>
                        </div>
                      </>
                    )
                  })}
                  <br />
                  {item.review}
                  <br />
                  {item.reviewCount}
                  <br />
                  {item.bookingPolicy}
                  <br />
                  {item.checkInTime}
                  <br />
                  {item.checkOutTime}
                  <button>Book Now</button>
                </div>
              </>
            )
          }
        })
      }
     </div>
    </>
  )
}

export default Room;