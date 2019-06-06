import React, { Component } from 'react';
import styled from 'styled-components';
import Busca from '../../components/Busca';
import AlbunsRecentes from '../../components/AlbunsRecentes';

const Wrapper = styled.section `
  display:block;
`;

export default class PaginaPrincipal extends Component {
  render(){
    return (
      <Wrapper className="row">
        <Busca className="col-3" />
        <AlbunsRecentes className="col-9" />
      </Wrapper>
    )
  }
}