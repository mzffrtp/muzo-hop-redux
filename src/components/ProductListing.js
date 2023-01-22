import React, { useEffect } from "react";
import axios from "axios";

import ProductComponent from "./ProductComponent";

import { setProducts } from "../redux/actions/productActions";

import { useSelector, useDispatch } from "react-redux";


const ProductListing = () => {

    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const res = await axios
            .get('https://fakestoreapi.com/products')
            .catch((err) => {
                console.log(err);
            });
        dispatch(setProducts(res.data));
    }

    useEffect(()=>{
        fetchProducts ()
    }, [])

    console.log(products);

    return (
        <div className="row row-cols-2 row-cols-md-4 g-4">
            
            <ProductComponent />
        </div>
    );
};

export default ProductListing