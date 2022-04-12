import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {allProducts} from '../../data/HomePage';
import { API_URL } from "../../constant/api";
import Axios from "axios";

const Recommend = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  // GET PRODUCTS
  const getProducts = async () => {
    await Axios.get(`${API_URL}/products`)
      .then((results) => {
        setData(results.data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
              <div className="shopcontainer row">
                  <>
                    {data.slice(0,6).map((product) => (
                      <div
                        className="shop col-lg-2 col-md-6 col-sm-6"
                        key={product._id}
                      >
                        <div className="border-product">
                          <Link to={`/detail/${product.id}`}>
                            <div className="shopBack">
                              <img src={product.product_image} alt={product.name} 
                              />
                              <i className="icon fas fa-search box-icon-catalog"><p>See details</p></i>
                            </div>
                          </Link>

                          <div className="shoptext">
                            <p className="shopname">
                              <Link to={`/details/${product.id}`}>
                              {product.name}
                              </Link>
                            </p>

                            <h3>Rp {product.price},00</h3>
                            {0==0 ? (
                                <p className="shopoutofstock">Out of stock</p>
                            ):(
                                <p className="shopoutstock">Available Stock : {product.stock}</p>
                            )}
                            <button className="shopbutton">Buy now</button>
                          </div>
                        </div>
                      </div>
                      
                    ))}
                  </>
                {/* )} */}

                {/* Pagination */}
                {/* <Pagination
                  pages={pages}
                  page={page}
                  keyword={keyword ? keyword : ""}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recommend;
