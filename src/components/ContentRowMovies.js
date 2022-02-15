import React, { Component } from 'react';

class ContentRowMovies extends Component{

    render(){
        let cantidadProductos;

        if(this.props.cantidadDeProductos == ""){
            cantidadProductos = <p> Cargando...</p>
        }else{
            cantidadProductos = <h2>{this.props.cantidadDeProductos}</h2>
        }
        let cantidadDeUsuarios;

        if(this.props.cantidadDeUsuarios == ""){
            cantidadDeUsuarios = <p> Cargando...</p>
        }else{
            cantidadDeUsuarios = <h2>{this.props.cantidadDeUsuarios}</h2>
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
                            <h3>
                            <div className="text-s font-weight-bold text-primary mb-1">Woodstack</div>
                            </h3>
                            <div className="h5 mb-0 font-weight-bold text-gray-800"></div>
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
                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Total Productos</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{cantidadProductos}</div>
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
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{cantidadDeUsuarios}</div>
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

