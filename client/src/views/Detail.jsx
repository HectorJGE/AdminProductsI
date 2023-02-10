import axios from 'axios' 
import React, { useEffect,useState } from "react";
import '../App.css';
import { Link } from 'react-router-dom';

const Detail = (props) => {

    const [product,setProducto] = useState({}) 
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/product/" + props.match.params._id)
        .then(productos => {
            setProducto(productos.data)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1>Producto: </h1>
            <h1>{product.title}</h1>
            <b>Price: </b>${product.price}<br></br>
            <b>Description: </b>{product.description}<br></br>
            <button><Link to="/">Volver</Link></button>
        </div>
    )
}

export default Detail;