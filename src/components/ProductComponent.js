import React from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const ProductComponent = () => {

    const products = useSelector((state) => state.productState.products);

    const renderedList = products.map((product) => {
        const { id, title, image, price, category } = product;

        return (
            <div className="card-group" key={id}>
                <Link to = {`/product/${id}`} style = {{textDecoration:"none", color:"black"}} >
                    <div className="card border-warning m-2 p-2 h-100 text-center" >
                        <img src={image} className="card-img-top h-100 p-3 m-3" />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item text-bg-warning text-danger">$ {price}</li>
                            <li className="list-group-item text-bg-info">{category}
                            </li>
                        </ul>
                    </div>
                </Link>
            </div>
        )
    });
    return (
        <>{renderedList}</>
    )

}

export default ProductComponent