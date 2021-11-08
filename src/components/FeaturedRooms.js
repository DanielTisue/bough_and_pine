import { useContext } from "react";
import { RoomContext } from "../hooks/Context"


export default function FeaturedRooms() {
  const context = useContext(RoomContext)
  
    return (
      <div>
        <p> Value from contenxt: {context?.name}</p>
      </div>
    )
  }


