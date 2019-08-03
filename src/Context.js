import React, { Component } from "react";

const RoomContext = React.createContext();

export default class RoomProvider extends Component {
  state = {};

  render() {
    return (
      <RoomContext.Provider value="hello">
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomCustomer = RoomContext.Consumer;

export { RoomProvider, RoomCustomer, RoomContext };
