import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import ProductItem from "./ProductItem";
import Loader from "../../components/shared/loader";
import MainModel from "../../components/MainModel"
import styles from "./ProductsGrid.module.scss";


const ProductsGrid = () => {
  const { products, setProducts } = useContext(ProductsContext);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    const result = await axios("https://fakestoreapi.com/products");
    setProducts(result.data);
    setLoading(false);
  };

  const hideModal = () => {
    setModal(false);
    setSelectedItem({});
  };

  const fetchDetails = async (id) => {
    const result = await axios(`https://fakestoreapi.com/products/${id}`);
    setSelectedItem(result.data);
    setModal(true);
  };

  return (
    <div className={styles.p__container}>
      <div className="row">
        <div className="col-sm-8">
          <div className="py-3">{products.length} Products</div>
        </div>
      </div>

      {loading && (
          <Loader />
      )}
      
      <div className={styles.p__grid}>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} onFetchDetails={fetchDetails}/>
        ))}
      </div>

      <MainModel
          isOpen={modal}
          hideModal={hideModal}
          selectedItem={selectedItem}
        />
      <div className={styles.p__footer}></div>
    </div>
  );
};

export default ProductsGrid;
