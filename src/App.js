import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import routesConfig from './routesConfig';
import Autenticacao from './helpers/autenticacao'
import Logotipo from './components/logotipo';
import './App.css';

class App extends Component {
  
  componentDidMount(){
    const autenticar = new Autenticacao();
    autenticar.verificar();
  }
  
  render(){
    return(
      <div>
        <Logotipo />
        {routesConfig.map((value, index) =>{
          return <Route 
            key={index} 
            path={value.path} 
            component={value.component} 
            exact={value.exact}></Route>
        })}
      </div>
    );
  }
}

export default App;