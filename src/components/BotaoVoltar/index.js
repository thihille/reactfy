import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  display: block;
  color: #000;
  cursor: pointer;
  margin-bottom: 30px;

  :hover {
    color: #fff;
  }
`;

class BotaoVoltar extends Component {

  render(){
    return (
      <Wrapper>
        {this.props.children}
      </Wrapper>
    )
  }
}

export default BotaoVoltar;