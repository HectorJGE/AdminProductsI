import React, { useEffect } from "react";
import axios from 'axios'
import { useState } from "react";
import { Link } from "react-router-dom";

const EditForm = (props) => {
    
    const [title,setTitle] = useState("")
    const [price,setPrice] = useState("")
    const [description,setDescription] = useState("")

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/'+props.match.params._id)
        .then(producto => {
            setTitle(producto.data.title)
            setPrice(producto.data.price)
            setDescription(producto.data.description)
        }).catch(err => console.log(err))
    }, [])

    const onSubmitManejador = e => {
        axios.put('http://localhost:8000/api/update/'+props.match.params._id,{
            title,
            price,
            description
        }).then(response => console.log(response))
            .catch(err => console.log(err))
    }

    return (
        <>  
            <form onSubmit={onSubmitManejador}>
                <h3>Editar<button><Link to="/">Volver</Link></button></h3>
                <label htmlFor="Title" >Title: </label>
                <input name="Title" type="text" onChange={e=>{setTitle(e.target.value)}} value={title}></input>
                <br></br>
                <label htmlFor="Price" >Price: </label>
                <input name="Price" type="text" onChange={e=>{setPrice(e.target.value)}} value={price}></input>
                <br></br>
                <label htmlFor="Description" >Description: </label>
                <input name="Description" type="text" onChange={e=>{setDescription(e.target.value)}} value={description}></input>
                <br></br>
                <input type="submit"></input>
            </form>
        </>
    )

}

export default EditForm;