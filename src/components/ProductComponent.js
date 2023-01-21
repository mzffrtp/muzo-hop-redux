import React from "react";

import { useSelector } from "react-redux";



const ProductComponent = () => {

    const products = useSelector((state) => state.productState.products);

    const renderedList = products.map((product) => {
        const { id, title, image, price, category } = product;

        return (
            <div className="card-group" key={id}>
                <div className="card" >
                    <div>
                        <img src={image} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">${price}</li>
                            <li className="list-group-item">{category}</li>
                        </ul>
                        <div className="card-body">
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    });
    return (
        <>{renderedList}</>
    )

}

export default ProductComponent