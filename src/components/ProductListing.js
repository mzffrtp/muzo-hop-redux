import React from "react";

import ProductComponent from "./ProductComponent"

import { useSelector } from "react-redux";

const ProductListing = () => {

const products = useSelector((state) => state);
console.log(products);

    return (
        <div className="col-4 col-sm 6 ">
            <ProductComponent />
        </div>
    );
};

export default ProductListing