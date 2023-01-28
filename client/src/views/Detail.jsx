import axios from 'axios' 
import React, { useEffect,useState } from "react";
import '../App.css';


const Detail = (props) => {

    const [product,setProducto] = useState({})
    
    console.log(props.match.params._id)
    useEffect(()=>{
        axios.get("http://localhost:8000/api/product/" + props.match.params._id)
        .then(productos => {
            setProducto(productos.data.producto)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1>{product.title}</h1>
            <b>Price: </b>${product.price}<br></br>
            <b>Description: </b>{product.description}
        </div>
    )
}

export default Detail;