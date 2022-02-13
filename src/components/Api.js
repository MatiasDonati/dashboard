import React, { Component } from 'react';
import imagenFondo from '../assets/images/stormtrooper.jpg'
import imagenOtra from '../assets/images/jordan-walke.png'


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
                producto: data.length,
                img: data[0].img_url
            }
        )
    }

    componentDidUpdate(){
        console.log('Actualizado!!');

    }

    render(){

        let contenido;
        let imagen = this.state.img

        if(this.state.producto == ""){
            contenido = <p> Cargando...</p>
        }else{
            contenido = <h2>{this.state.producto}</h2>
        }

        return(
            <div>
                {contenido}
                <img src={imagenFondo} />
                <img src={imagenOtra} />
            </div>
        )
    }
}

export default Api;
