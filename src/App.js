import React, { Component } from 'react';
import Busca from './components/Busca/component';
import Album from './components/Album/component';
import Logo from './assets/img/spotify.png';
import './App.css';

class App extends Component {
  render(){
    return(
      <div>
        <img src={Logo} className="logotipo" width="60" height="60" />
        {/* <Busca /> */}
        <Album />
      </div>
    );
  }
}

export default App;