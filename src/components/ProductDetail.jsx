import React from "react";
import { useParams } from "react-router-dom";
import { ProductsData } from "../ProductsData";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, deleteItem } from "../redux/actions/index";


export const ProductDetail = () => {
  const [cartbtn, setCartbtn] = useState("Add To Cart");

  const Proid = useParams();

  const ProDetial = ProductsData.filter((x) => x.id == Proid.id);

  const product = ProDetial[0];
  console.log(product);
  const dispatch = useDispatch();
  
  const handlecart = (product) => {
  
    if (cartbtn === "Add To Cart") {
      dispatch(addItem(product));
      setCartbtn("Remove From Cart");
    } else {
      dispatch(deleteItem(product));
      setCartbtn("Add To Cart");
    }
  };
  return (
    <>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img src={product.img} alt={product.title} height="400px" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold">{product.title}</h1>
            <hr></hr>
            <h2 className="my-4">${product.Price}</h2>
            <p className="lead">{product.desc}</p>
            <button
              onClick={() => handlecart(product)}
              className="btn btn-outline-primary my-5"
            >
              {" "}
              {cartbtn}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
