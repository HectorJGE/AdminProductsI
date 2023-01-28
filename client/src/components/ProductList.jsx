import React from "react";


const ProductList = ({productos}) => {
    

    return (
        <ul>
            {
                productos.map((producto,i) =>{
                    return <li key={i}><a href={`/${producto._id}`}>{producto.title}</a></li>
                })
            }
        </ul>
    )

}

export default ProductList;