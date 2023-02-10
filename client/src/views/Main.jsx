
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

    const actualizar = (objeto) => {
        let aux=[...productos]
        aux.push(objeto)
        setProductos(aux)
    }

    const borrar = (id) => {
        setProductos(productos.filter(producto => producto._id != id))
    }
    return (
        <div>
            <FormProducto onNewProduct={actualizar}/>
            <hr/>
            {loaded && <ProductList removeFromDom={borrar} productos={productos}/> }
        </div>
    );
}

export default Main;