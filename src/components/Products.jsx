import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import "react-loading-skeleton/dist/skeleton.css";


const Products = () => {
  const staticData = [
    {
      id: 1,
      image: "/images/painting 1.jpg",
      title: "Product 1",
      description: "This is the description for product 1.",
      price: 29.99,
      category: "Category1"
    },
    {
      id: 2,
      image: "/images/painting 2.jpg",
      title: "Product 2",
      description: "This is the description for product 2.",
      price: 39.99,
      category: "Category2"
    },
    {
      id: 3,
      image: "/images/painting 3.jpg",
      title: "Product 3",
      description: "This is the description for product 3.",
      price: 19.99,
      category: "Category1"
    },
    {
      id: 4,
      image: "/images/painting 4.jpg",
      title: "Product 4",
      description: "This is the description for product 4.",
      price: 49.99,
      category: "Category2"
    },
    {
      id: 5,
      image: "/images/painting 5.jpg",
      title: "Product 5",
      description: "This is the description for product 4.",
      price: 49.99,
      category: "Category2"
    },
    {
      id: 6,
      image: "/images/painting 6.jpg",
      title: "Product 6",
      description: "This is the description for product 4.",
      price: 49.99,
      category: "Category2"
    }
  ];

  const [filter] = useState(staticData);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  }


  const ShowProducts = () => {
    return (
      <>
        {filter.map((product) => {
          return (
            <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
              <div className="card text-center h-100" key={product.id}>
                <img
                  className="card-img-top p-3"
                  src={product.image}
                  alt="Card"
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text">
                    {product.description.substring(0, 90)}...
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">$ {product.price}</li>
                </ul>
                <div className="card-body">
                  <button className="btn btn-dark m-1" onClick={() => addProduct(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Latest Products</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          <ShowProducts />
        </div>
      </div>
    </>
  );
};

export default Products;
