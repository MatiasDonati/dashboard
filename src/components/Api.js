import React, { Component } from 'react';

class Api extends Component {
    constructor(props){
        super(props);
        this.state={
            producto: ""
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
        this.apiCall('http://www.localhost:3001/dashboard/products', this.mostrarApi)
    }

    mostrarApi = (data) => {
        console.log(data);
        
        this.setState(
            {
                producto: data.length
            }
        )
    }

    componentDidUpdate(){
        console.log('Actualizado!!');

    }

    render(){

        let contenido;

        if(this.state.producto == ""){
            contenido = <p> Cargando...</p>
        }else{
            contenido = <h2>{this.state.producto}</h2>
        }

        return(
            <div>
                {contenido}
                ----------------------------------------------------------------------------------------------------------------------------------------------
            </div>
        )
    }
}

export default Api;
