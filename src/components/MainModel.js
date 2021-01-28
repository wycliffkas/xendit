import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import ProductDetail from "../components/ProductDetail";
import { CartContext } from "../contexts/CartContext";

const MainModel = ({ isOpen, hideModal, selectedItem }) => {
  const { addProduct, cartItems, increase } = useContext(CartContext);

  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };

  return (
    <Modal show={isOpen} onHide={hideModal} size="lg">
      <Modal.Body>
        <ProductDetail {...selectedItem} />
      </Modal.Body>
      <Modal.Footer>
        {isInCart(selectedItem) ? (
          <button
            onClick={() => increase(selectedItem)}
            className="btn btn-outline-info btn-sm"
          >
            Add more to cart
          </button>
        ) : (
          <button
            onClick={() => addProduct(selectedItem)}
            className="btn btn-info btn-sm"
          >
            Add to cart
          </button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default MainModel;
