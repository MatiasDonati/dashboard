import React, { useEffect, useState } from 'react';


function ListaProductos(){

    const url = 'http://www.localhost:3001/dashboard/products';
    const [todos, setTodos] = useState()
    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJson = await response.json()
        setTodos(responseJson)
    }
    console.log(todos)

    useEffect(() => {
        fetchApi()
    }, [])


    return (
        <React.Fragment>
            { !todos ? 'Cargando...' : 
            todos.map((todo, index) => {

                return <div className="col-lg-6 mb-4">
                            <div className="card bg-dark text-white shadow">
                                <div className="card-body">
                                  {todo.name}
                                </div>
                            </div>
                        </div>
            })
            }
        </React.Fragment>
    )
}
export default ListaProductos;