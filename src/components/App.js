import React, { Component } from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import ContentRowMovies from './ContentRowMovies'
import ApiTest from './ApiTest';
import Api from './Api'



class App extends Component {

        constructor(props){
          super(props);
          this.state={
            productos: [],
            users: []
          }
      }

      apiCall(url, consecuencia){
          fetch(url)
          .then( response => response.json())
          .then( data => consecuencia(data))
          .catch( error => console.log(error))
      }

      componentDidMount(){
          console.log('Montado!!');
          this.apiCall('http://localhost:3001/dashboard/products', this.setearProdcutos)
          this.apiCall('http://localhost:3001/dashboard/users', this.setearUsuarios)
      }

      setearUsuarios = (data) => {
          console.log(data);
          
          this.setState(
              {
                  users: data,
              }
          )
      }
      setearProdcutos = (data) => {
          console.log(data);
          
          this.setState(
              {
                  productos: data
              }
          )
      }

  render(){
    return (
      <React.Fragment>
            {/* <Api />
            <h1>ApiTest</h1> */}
            {/* <ApiTest /> */}
            <ContentRowMovies 
              cantidadDeUsuarios={this.state.users.length}
              cantidadDeProductos={this.state.productos.length}
            />
          <div id="wrapper">
            <ContentWrapper 
              productos={this.state.productos}
            />
          </div>
      </React.Fragment>
    );
  }
}

export default App;
