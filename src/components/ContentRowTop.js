import React, { Component } from 'react';
import imagenFondo from '../assets/images/mandalorian.jpg'
import ListaProductos from './ListaProducts';


class ContentRowTop extends Component {

	constructor(props){
        super(props);
        this.state={

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
                producto: data[0].name,
				imagen: data[0].img_url,
				detalle: data[0].description,
				todos: data
            }
        )
    }

    componentDidUpdate(){
        console.log('Actualizado!!');

    }
	render(){
		let contenido;
		let img = this.state.imagen
		let  descripcion = this.state.detalle
		let arrayProds = this.state.todos
		console.log("IMAGEN!! "+img);
		console.log("DESCRIPCION!! "+descripcion)
		console.log(arrayProds)


        if(this.state.producto == ""){
            contenido = <p> Cargando...</p>
        }else{
            contenido = <h2>{this.state.producto}</h2>
        }

			
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800"></h1>
					</div>
		
					{/*<!-- Content Row Last Movie in Data Base -->*/}

					<div className="row">
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Producto Seleccionado</h5>
									<p>{contenido}</p>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Imagen Seleccionada "/>
									</div>
									<p>{descripcion}</p>
									<a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
								</div>
							</div>
						</div>
						{/*<!-- End content row last movie in Data Base -->*/}

						{/*<!-- Genres in DB -->*/}
						<div className="col-lg-6 mb-4">						
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Lista de Productos (HACER UN MAP DE PRODS POR TARJETA)</h5>
								</div>
								<div className="card-body">
									<div className="row">
									
									<ListaProductos />

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
        </React.Fragment>
    )
	}
}
export default ContentRowTop;