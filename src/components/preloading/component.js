import React, {Component} from 'react';
import preLoading from '../../assets/img/preloading.gif';
import styled from 'styled-components';

const Carregar = styled.div `
  position:fixed;
  width:100vw;
  height: 100vh;
  background:#fff;

  p {
    font-weight:100;
    font-size:1.3em;
    position:absolute;
    width:120px;
    height:30px;
    top:0;
    bottom:0;
    left:0;
    right:0;
    margin:auto;
    width:
  }

  img {
    position:absolute;
    bottom:0;
    left:0;
    right:0;
    margin:auto;
    width:
  }

`;

export default class Preloading extends Component {

  render(){
    return(  
      <Carregar>
        <p>Carregando...</p>
        <img src={preLoading} alt="" width="256" height="256" />
      </Carregar>
    )
  }
}