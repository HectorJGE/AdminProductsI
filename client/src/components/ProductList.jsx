import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductList = ({productos,removeFromDom}) => {
    
    const borrar = id => {
        axios.delete('http://localhost:8000/api/delete/'+id,)
        .then(removeFromDom(id))
        .catch(err => console.log(err))
    }
    return (
        <ul>
            {
                productos.map((producto,i) =>{
                    return <li key={i}>
                        <a href={`/${producto._id}`}>{producto.title}</a> 
                        <button><Link to={`/${producto._id}/edit`}>Update</Link></button>
                        <button onClick={()=>borrar(producto._id)}>Delete</button>
                        </li>
                })
            }
        </ul>
    )

}

export default ProductList;