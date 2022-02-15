import React from 'react';

function ListaProductos(props){

    return (
        <React.Fragment>
            { !props.productos ? <p> Cargando... </p> : 
            props.productos.map((producto, index) => {

                return <div onClick={()=>{props.onProductoSeleccionado(index)}} className="col-lg-6 mb-4">
                            <div className="card bg-dark text-white shadow">
                                <div className="card-body">
                                        <span>{producto.name}</span>
                                        <p>$ {producto.price}</p>
                                </div>
                            </div>
                        </div>
            })
            }
        </React.Fragment>
    )
}
export default ListaProductos;