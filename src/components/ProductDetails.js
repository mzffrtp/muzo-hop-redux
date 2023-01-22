import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts, removeSelectedProducts } from "../redux/actions/productActions";
import { useParams } from "react-router-dom";
import price1 from "../assets/img/price1.gif";
import car from "../assets/img/car.gif";
import logo from "../assets/img/logo.gif"



const ProductDetails = () => {
    const product = useSelector((state) => state.product);
    const { productId } = useParams();
    const dispatch = useDispatch();
    const { id, title, image, price, category, description } = product;

    const fetchDetails = async () => {
        const res = await axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch((err) => {
                console.log(err);
            });

        dispatch(selectedProducts(res.data))
    };

    useEffect(() => {
        if (productId && productId !== "") fetchDetails();
        return () => {
            dispatch(removeSelectedProducts());
        }

    }, [productId])
    return (
        <div className="container border-info-subtle m-1">
            <div className="row justify-content-center">
                {Object.keys(product).length === 0 ? (
                    <div> ... Loading </div>
                ) : (
                    <div className="card m-3" style={{ maxWidth: "800px" }}>
                        <div className="d-flex">
                            <div className="card m-3 ">
                                <img src={image} className="img-fluid p-3 h-100 card border-warning rounded" alt="..." />
                            </div>

                            <div className="col-md-8 sm-6 rounded">
                                <div className="card-body">
                                    <h5 className="card-title fs-1">{title}</h5>
                                    <div>
                                        <ul className="list-group list-group-flush my-2 rounded">
                                            <li className="list-group-item text-bg-warning text-danger my-2 rounded-end-pill fs-3"><img src={price1} className="img-fluid rounded-start" />  $ {price}</li>
                                            <li className="list-group-item text-bg-info rounded-start-pill fs-3">{category}
                                            </li>
                                        </ul>
                                        <p className="card-text border border-success p-2 my-2 rounded-3">{description}</p>
                                        <div>
                                            <button type="button" className="btn btn-outline-danger fs-5"><img src={car} className="img-fluid rounded-start" />Add to chart!</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            
        </div>
    
    );
};

export default ProductDetails