import React, { useEffect, useState } from 'react';

function ApiTest (){
    const url = 'http://www.localhost:3001/dashboard/products';
    const [todos, setTodos] = useState()
    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJson = await response.json()
        setTodos(responseJson)
    }

    useEffect(() => {
        fetchApi()
    }, [])
    return(
        <div>
            <ul>
            { !todos ? 'Cargando...' : 
            todos.map((todo, index) => {
                return <li key={todo+index} >{todo.name} {todos.length}</li>
            })
            }
            </ul>
        </div>
    )
}

export default ApiTest;

