import React from "react";
import { truncateString } from "../utils";

const Product = ({ id, title, price, image, onFetchDetails }) => {
  return (
    <div className="col s4 mt-4">
      <div class="card">
        <img class="card-img-top" src={image} alt={title} />
        <div class="card-body">
          <h6 class="card-title text-center">{truncateString(title)}</h6>
          <p class="card-text text-center">${price}</p>
          <div class="d-flex justify-content-center">
            <button
              className="btn btn-outline-primary"
              onClick={() => onFetchDetails(id)}
            >
              More Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
