import React, { Component } from 'react';
import './style.css';

class Busca extends Component {
  render(){
    return (
      <div className='form-group'>  
        <label>Busque por artistas, albuns ou músicas</label>
        <input type='text' placeholder='Comece buscando aqui...'></input>
      </div>
    )
  }
}

export default Busca;