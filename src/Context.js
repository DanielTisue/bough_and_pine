import React, { Component } from 'react';
import items from './data'; //used items because of context.js

const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true
  };
    
componentDidMount() {
    let rooms = this.formatData(items);
    //filter the rooms based on whether or the the featured property is labeled as true
    let featuredRooms = rooms.filter(room => room.featured === true);
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false
    });
  }


formatData(items){
  let tempItems = items.map(item => {
      let id = item.sys.id;
      //images are accesible through the fields object property within items object
      //then need to map over those images
      let images = item.fields.images.map(image => image.fields.file.url);
      //create a simple new room object
      let room = { ...item.fields, images, id };
      return room;
  });
  return tempItems;
}

render() {
  return (
        <RoomContext.Provider value={{ ...this.state }}>
          {this.props.children}
        </RoomContext.Provider>
    )
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };

// export function withRoomConsumer(Component) {
//   return function ConsumerWrapper(props) {
//     return (
//       <RoomConsumer>
//         {value => <Component {...props} context={value} />}
//       </RoomConsumer>
//     );
//   };
// }
