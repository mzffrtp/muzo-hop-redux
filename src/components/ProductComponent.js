import React from "react";

import { useSelector } from "react-redux";



const ProductComponent = () => {

    const products = useSelector((state) => state.productState.products);
    console.log(products);
    const {name, id, category} = products;

 

    return (
        <div>
            <div className="col-4 col-sm-6">
                <div>
                    <img src="" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{id}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{category}</li>
                        <li className="list-group-item">A second item</li>
                        <li className="list-group-item">A third item</li>
                    </ul>
                    <div className="card-body">
                        <p></p>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ProductComponent