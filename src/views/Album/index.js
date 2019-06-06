import React, { Component } from 'react';
import styled from "styled-components";
import BotaoVoltar from '../../components/BotaoVoltar';
import Playlist from '../../components/Playlist';


// const imgNaoEncontrada = resolvePath('../assets/img/spotify.png');

const Wrapper = styled.div `
  display:flex;
`;

const AlbumWrapper = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
`;

const AlbumInfo = styled.div`
  display: inline-flex;
  flex-flow: column;
  align-items: center;

  img {
    
    background-position-x: -94px;
    text-indent: -9999px;
    max-width: 400px;
  }
`;

class Album extends Component {
  render(){
    return (
      <Wrapper className="album">
        <BotaoVoltar className="btn-back">Voltar</BotaoVoltar>
        <AlbumWrapper>
          <AlbumInfo>
            <img />
            <h3>Titulo</h3>
            <h4>Album</h4>
          </AlbumInfo>
          <Playlist></Playlist>
        </AlbumWrapper>
      </Wrapper>
    )
  }

  
}

export default Album;
