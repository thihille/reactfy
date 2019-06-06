import styled from 'styled-components';

export const SearchContainerStyled = styled.div`
  position: relative;
  display: block;
  width: 80vw;
  margin: 0 auto;
  z-index:99;
`;

export const LabelStyled = styled.label`
  color: white;
  font-family: 'Roboto', Arial;
  font-weight: 500;
  display:block;
  width: 100%;
`;

export const InputStyled = styled.input`
  width: 100%;
  background: transparent;
  border:none;
  padding: 10px;
  font-family: 'Roboto', Arial;
  font-size: 40px;
  color: #eee;
  border-bottom:1px solid #eee;
`;

export const ParagraphStyled = styled.p`
  color: white;
`;

export const ListagemStyled = styled.div`
  display:block;
  width:100%;
  list-style: none;
  margin: 0;
  padding: 0;
  color: white;
`;

export const AlbumMusical = styled.div`
  width:25%;
  min-width:220px;
  min-height:280px;
  float:left;
  padding: 5px;
  font-size:16px;
  cursor:pointer;
  background-color:rgba(255,255,255,.1);
`;

export const ImagemAlbum = styled.div`
  width:100%;
  display:block;

  img {
    width: 100%;
  }
`;