import React, {Component} from 'react';

export default class Playlist extends Component {
  state = {
    album: 'teste'
  }
  render(){
    return(
      <ul>
        <li>{ this.state.album }</li>
      </ul>
    )
  }
}