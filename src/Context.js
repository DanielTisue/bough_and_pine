import React, { Component } from 'react';


const RoomContext = React.creatContext();

class RoomProvider extends Component {

state = {

}

  render() {
    return (
      <div>
        <RoomContext.RoomProvider value="hello">
          {this.props.children}
        </RoomContext.RoomProvider>
      </div>
    )
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };


