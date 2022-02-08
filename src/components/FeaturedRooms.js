import { Component } from 'react';
import { RoomContext } from "../Context";
import Loading from './Loading';
import Room from './Room';

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />
    })
    return (
     <div className="featured-images-section my-50">
        { loading ? <Loading /> : rooms }
      </div>
    );
  }
}



 
