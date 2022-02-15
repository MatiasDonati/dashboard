import React from 'react';

function ListaUsuarios(props){

    return (
        <React.Fragment>
            { !props.users ? <p> Cargando... </p> : 
            props.users.map((usuario, i) => {

                return <div key={i+1} className="col-lg-6 mb-4">
                            <div className="card bg-dark text-white shadow">
                                <div className="card-body">
                                        <span>{usuario.first_name} {usuario.last_name}</span>
                                        <span></span>
                                </div>
                            </div>
                        </div>
            })
            }
        </React.Fragment>
    )
}
export default ListaUsuarios;