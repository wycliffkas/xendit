import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../common/Loader";
import MainModel from "../components/MainModel";
import Product from "../components/Product";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    const result = await axios("https://fakestoreapi.com/products");
    setData(result.data);
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
    <div className="container col s12">
      <div className="row no-gutters justify-content-center">
        {loading && (
          <div className="mt-4">
            <Loader />
          </div>
        )}

        {data.map((pdt) => (
          <Product key={pdt.id} {...pdt} onFetchDetails={fetchDetails} />
        ))}

        <MainModel
          isOpen={modal}
          hideModal={hideModal}
          selectedItem={selectedItem}
        />
      </div>
    </div>
  );
};

export default Home;
