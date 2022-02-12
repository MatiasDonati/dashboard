import React, { Component } from 'react';

class ContentRowMovies extends Component{
    constructor(props){
        super(props);
        this.state={
            producto: ""        }
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
        this.apiCall('http://www.localhost:3001/dashboard/users', this.verApi)
    }

    verApi = (data) => {
        console.log(data);
        
        this.setState(
            {
                users: data.length,
            }
        )
    }
    mostrarApi = (data) => {
        console.log(data);
        
        this.setState(
            {
                producto: data.length,
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
        let usuarios;

        if(this.state.users == ""){
            usuarios = <p> Cargando...</p>
        }else{
            usuarios = <h2>{this.state.users}</h2>
        }

    return(
        <>
        					<div className="row">

{/*<!-- Movies in Dta Base -->*/}
<div className="col-md-4 mb-4">
    <div className="card border-left-primary shadow h-100 py-2">
        <div className="card-body">
            <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Total Productos</div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">{contenido}</div>
                </div>
                <div className="col-auto">
                    <i className="fas fa-film fa-2x text-gray-300"></i>
                </div>
            </div>
        </div>
    </div>
</div>

{/*<!-- Total awards -->*/}
<div className="col-md-4 mb-4">
    <div className="card border-left-success shadow h-100 py-2">
        <div className="card-body">
            <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Total Categorias</div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">2</div>
                </div>
                <div className="col-auto">
                    <i className="fas fa-award fa-2x text-gray-300"></i>
                </div>
            </div>
        </div>
    </div>
</div>

{/*<!-- Actors quantity -->*/}
<div className="col-md-4 mb-4">
    <div className="card border-left-warning shadow h-100 py-2">
        <div className="card-body">
            <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Total Usuarios
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">{usuarios}</div>
                </div>
                <div className="col-auto">
                    <i className="fas fa-user fa-2x text-gray-300"></i>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

        </>
    )
}
}

export default ContentRowMovies;

