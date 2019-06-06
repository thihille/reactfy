import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { withRouter } from "react-router-dom";

import Autenticacao from '../../helpers/autenticacao';
import {
  fetchAlbum,
} from '../../redux/actions/album';

class Playlist extends Component {
  constructor(props, album, fetchAlbum) {
    super(props);

    this.state = {
      id: ""
    };
  }

  componentWillMount() {
    const autenticar = new Autenticacao();
    autenticar.verificar();

    const { id } = this.props.match.params;
    fetchAlbum(id);
  }

  render(){
    return(
      <ul>
        <li>{ this.album }</li>
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  album: state.id
});

const mapDispatchToProps = dispatch => ({
  fetchAlbum: payload => dispatch(fetchAlbum(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Playlist));
