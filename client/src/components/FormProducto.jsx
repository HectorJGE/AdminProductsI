import React from "react";
import axios from 'axios'
import { useState } from "react";


const FormProducto = () => {
    
    const [title,setTitle] = useState("")
    const [price,setPrice] = useState()
    const [description,setDescription] = useState("")

    const onSubmitManejador = e => {
        axios.post('http://localhost:8000/api/products/new',{
            title,
            price,
            description
        }).then(response => console.log(response))
            .catch(err => console.log(err))
    }

    return (
        <>
            <form onSubmit={onSubmitManejador}>
                <label htmlFor="Title" >Title: </label>
                <input name="Title" type="text" onChange={e=>{setTitle(e.target.value)}}></input>
                <br></br>
                <label htmlFor="Price" >Price: </label>
                <input name="Price" type="text" onChange={e=>{setPrice(e.target.value)}}></input>
                <br></br>
                <label htmlFor="Description" >Description: </label>
                <input name="Description" type="text" onChange={e=>{setDescription(e.target.value)}}></input>
                <br></br>
                <input type="submit" value="Create"></input>
            </form>
        </>
    )

}

export default FormProducto;