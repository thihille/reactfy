import React, { Component } from 'react';
import Autenticacao from '../../helpers/autenticacao';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { withRouter } from "react-router-dom";
import styled from 'styled-components';
import {
  fetchAlbumId,
} from '../../redux/actions/album';


const CapaAlbum = styled.section`
  display:block;
  position:relative;
  z-index:0;
`;

class Playlist extends Component {

  componentWillMount() {
    const autenticar = new Autenticacao();
    autenticar.verificar();
    const { id } = this.props.match.params;
    this.props.fetchAlbumId(id);
  }

  render() {
    return (
    <div>
      <CapaAlbum>
        <img src={this.props.data.album.data != undefined ? this.props.data.album.data.data.images[1].url : ''} />
        <h3>{this.props.data.album.data != undefined ? this.props.data.album.data.data.artists[0].name + ' - ' + this.props.data.album.album_data.data.name : ''}</h3>
      </CapaAlbum>
      <ul>
        {console.log(this.props.data.album.data)}
          {this.props.data.album.data != undefined ? (
            this.props.data.album.data.data.tracks.items.map(musica => (
              <li key={musica.id}>{musica.name}</li>
            ))
            ) : ''}
        
      </ul>
    </div>
    )
  }
}

const mapStateToProps = state => ({
  data: state
});

const mapDispatchToProps = dispatch => ({
  fetchAlbumId: payload => dispatch(fetchAlbumId(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Playlist));
