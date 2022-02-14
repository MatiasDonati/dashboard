import React, { Component } from 'react';
import ListaProductos from './ListaProducts';


class ContentRowTop extends Component {
	constructor(props){
		super(props)
		this.state={
			productoSeleccionado: 0
		}
		
	}

	cambiarProductoSeleccionado (index) {
		this.setState(
			{
			productoSeleccionado: index
		}
		)

	}

	render(){
		console.log(this.state.productoSeleccionado);
		let producto = this.props.productos[this.state.productoSeleccionado]
		let nombreProducto = <p> Cargando...</p>
		let descripcionProducto = <p> Cargando...</p>
		let precioProducto = <p> Cargando...</p>
		let imagenProducto = <p> Cargando...</p>

        if(producto){
			nombreProducto = <h2>{producto.name}</h2>
            descripcionProducto = <h2>{producto.description}</h2>  
			precioProducto = <h2>$ {producto.price}</h2>  
			imagenProducto = <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={"http://localhost:3001/images/products/" + producto.img_url} alt=" Imagen Seleccionada "/>
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
									<p>{nombreProducto}</p>
								</div>
								<div className="card-body">
									<div className="text-center">
										{imagenProducto}
									</div>
									<p>{descripcionProducto}</p>
									<p>{precioProducto}</p>
								</div>
							</div>
						</div>
						{/*<!-- End content row last movie in Data Base -->*/}

						{/*<!-- Genres in DB -->*/}
						<div className="col-lg-6 mb-4">						
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Lista de Productos</h5>
								</div>
								<div className="card-body">
									<div className="row">
									
									<ListaProductos 
										productos={this.props.productos}
										onProductoSeleccionado={this.cambiarProductoSeleccionado.bind(this)}
									/>

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