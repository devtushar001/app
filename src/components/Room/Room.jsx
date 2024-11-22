import React, { useContext } from "react";
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
          const { photos } = room;
          const [fphoto, sphoto] = photos;
          return (
            <>
              {<ImageCarousel fphoto={fphoto} sphoto={sphoto} />}
            </>
          )
        }
      })}
    </>
  )
}
export default Room;