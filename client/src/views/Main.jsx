
import FormProducto from '../components/FormProducto';
import ProductList from '../components/ProductList';
import axios from 'axios' 
import React, { useEffect,useState } from "react";

function Main() {

    const [productos,setProductos] = useState([])
    const [loaded,setLoaded] = useState(false)

    useEffect(() =>{
        axios.get("http://localhost:8000/api/products")
        .then(productos => {
            setProductos(productos.data.productos);
            setLoaded(true);
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <FormProducto/>
            <hr/>
            {loaded && <ProductList productos={productos}/> }
        </div>
    );
}

export default Main;