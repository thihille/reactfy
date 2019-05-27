import React, { Component } from 'react';
import './style.css';

class Busca extends Component {

  constructor(props){
    super(props);
    this.state = {
      palavraChave: ''
    }
    this.buscaPalavraChave = this.buscaPalavraChave.bind(this);
  }

  buscaPalavraChave(evento){
    let valor = evento.target.value;
    this.setState({
      palavraChave: valor
    });
    console.log(this.state.palavraChave);
  }

  render(){
    return (
      <form>
        <div className="form-group">
          <label>Busque por artistas, albuns ou músicas</label>
          <input type="text" placeholder="Comece buscando aqui..." onChange={this.buscaPalavraChave} value={this.state.palavraChave}></input>
          <p>{this.state.palavraChave}</p>
        </div>
      </form>
    )
  }
}

export default Busca;