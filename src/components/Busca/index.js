import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import {
  SearchContainerStyled,
  LabelStyled,
  InputStyled,
  ParagraphStyled,
  ListagemStyled,
  AlbumMusical,
  ImagemAlbum
} from './style';

import {
  fetchAlbuns,
} from '../../redux/actions/albuns';


const Busca = ({ search, albuns, fetchAlbuns }) => (
  <SearchContainerStyled>
    <LabelStyled>
      Busque por artistas, albuns ou músicas
    </LabelStyled>
    <InputStyled type="text" placeholder="Comece buscando aqui..." onChange={e => fetchAlbuns(e.target.value)} value={search.query} />
    <ParagraphStyled>
      Resultados encontrados para "{search.query}"
    </ParagraphStyled>
    {albuns.loading && <ParagraphStyled>...Carregando Albuns</ParagraphStyled>}
    <ListagemStyled> {
      albuns.list.items != undefined ? (albuns.list.items.map(album => (
        <Link to={`/album/${album.id}`}>
          <AlbumMusical key={album.id}>
            <ImagemAlbum>
              <img src={album.images[1].url} />
            </ImagemAlbum>
            {album.name}
          </AlbumMusical>
        </Link>
      ))) : ''
    }{console.log(albuns.list.items)} </ListagemStyled>
  </SearchContainerStyled>
);

const mapStateToProps = state => ({
  search: state.search,
  albuns: state.albuns
});

const mapDispatchToProps = dispatch => ({
  fetchAlbuns: payload => dispatch(fetchAlbuns(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Busca);