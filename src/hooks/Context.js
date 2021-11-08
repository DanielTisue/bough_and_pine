import React, {useState} from 'react';

const RoomObject = {
  greeting: "Hello",
  name: "Jon"
}

const RoomContext = React.createContext(RoomObject);

function RoomProvider ({ children }) {
  const [context] = useState({ ...RoomObject })
    return (
        <RoomContext.Provider value={context}>
          {children}
        </RoomContext.Provider>
    )
}

export { RoomProvider, RoomContext };


