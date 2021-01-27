import React from "react";
import Modal from "react-bootstrap/Modal";
import ProductDetail from "../components/ProductDetail";

const MainModel = ({ isOpen, hideModal, selectedItem }) => {
  return (
    <Modal show={isOpen} onHide={hideModal} size="lg">
      <Modal.Body>
        <ProductDetail {...selectedItem} />
      </Modal.Body>
      <Modal.Footer>
        <button
          // onClick={() => addToFavourites(this.props.movieDetails)}
          className="btn btn-primary"
        >
          Add to Cart
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default MainModel;
