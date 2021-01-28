import React from "react";
import { formatNumber, truncateString } from "../../helpers/utils";

const ProductItem = ({ product, onFetchDetails }) => {
  return (
    <div className="card card-body">
      <img
        style={{
          display: "block",
          margin: "0 auto 10px",
          height: "200px",
          maxWidth: "150px",
        }}
        className="img-fluid"
        src={product.image}
        alt={product.title}
      />
      <p>{truncateString(product.title, 35)}</p>
      <h3 className="text-left">{formatNumber(product.price)}</h3>
      <div className="text-right">
        <button
          className="btn btn-outline-info btn-sm"
          onClick={() => onFetchDetails(product.id)}
        >
          More Details
        </button>

        {/* {isInCart(product) && (
          <button
            onClick={() => increase(product)}
            className="btn btn-outline-info btn-sm"
          >
            Add more
          </button>
        )}

        {!isInCart(product) && (
          <button
            onClick={() => addProduct(product)}
            className="btn btn-info btn-sm"
          >
            Add to cart
          </button>
        )} */}
      </div>
    </div>
  );
};

export default ProductItem;
