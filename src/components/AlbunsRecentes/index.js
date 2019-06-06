import React, { Component } from 'react';
import styled from 'styled-components';


const Wrapper = styled.section`
  display:none;
  position:relative;
  z-index:0;

  h3 {
    color: white;
    font-size: 18px;
  }
`;
const Album = styled.div`
  text-align:center;

  img {
    display:block;
    width: 100%;
    min-height: 50px;
    background-color:#ccc;
  }

  h4 {
    color: #FAFAFA;
    font-size: 14px;
    margin:10px 0 0 0;
  }
  p {
    color: #999;
    font-size: 14px;
    margin:0;
  }
`;

export default class AlbunsRecentes extends Component {

  render(){

    let albuns = [
      {
        imagem: 'img.jpg',
        album: 'Banda 1',
        titulo: 'Título da música 1'
      },
      {
        imagem: 'img.jpg',
        album: 'Banda 2',
        titulo: 'Título da música 2'
      },
      {
        imagem: 'img.jpg',
        album: 'Banda 3',
        titulo: 'Título da música 3'
      },
      {
        imagem: 'img.jpg',
        album: 'Banda 4',
        titulo: 'Título da música 4'
      },
      {
        imagem: 'img.jpg',
        album: 'Banda 5',
        titulo: 'Título da música 5'
      },
      {
        imagem: 'img.jpg',
        album: 'Banda 6',
        titulo: 'Título da música 6'
      }
    ]

    return(
      <Wrapper className="col-12">
        <h3>Álbuns buscados recentemente</h3>
        {
          albuns.map((album, index) => {
            return <Album className="col-2 col-s-6" key={index}>
              <img src={album.imagem} />
              <h4>{album.album}</h4>
              <p>{album.titulo}</p>
            </Album>
          })
        }
        
      </Wrapper>
    )
  }
}