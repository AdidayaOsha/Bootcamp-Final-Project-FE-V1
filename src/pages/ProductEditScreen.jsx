import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "./../components/Header";
import EditProductMain from "../components/Products/EditproductMain";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { API_URL } from "../constant/api";
import Products from "../data/Products";

const ProductEditScreen = () => {
  const [products, setProducts] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      try {
        await Axios.get(`${API_URL}/products/search/${id}`).then((results) => {
          setProducts(results.data);
          console.log(results.data);
        });
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, []);

  // const productData = products.find((val) => val.id === Number(id));

  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <EditProductMain editData={products} />
      </main>
    </>
  );
};
export default ProductEditScreen;
