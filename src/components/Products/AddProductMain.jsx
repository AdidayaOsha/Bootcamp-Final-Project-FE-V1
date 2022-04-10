import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { API_URL } from "../../constant/api";

const AddProductMain = () => {
  const [newData, setNewData] = useState({});

  const inputHandler = (e) => {
    const name = e.target.name;
    const value =
      name === "price" || name === "stock" ? +e.target.value : e.target.value;
    setNewData({
      ...newData,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    alert(newData);
    // Axios.post(`${API_URL}/products/add`, newData)
    //   .then((results) => {
    //     console.log(results.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    console.log(newData);
  };

  return (
    <>
      <section className="content-main" style={{ maxWidth: "1600px" }}>
        <form>
          <div className="flex flex-row space-x-4 mb-3 items-center">
            <h2 className="content-title text-2xl">Add New Product</h2>
            <Link to="/products" className="btn btn-accent text-white">
              Go to products
            </Link>
          </div>

          <div className="row mb-4">
            <div className="col-xl-8 col-lg-8">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <div className="mb-2">
                    <label htmlFor="product_title" className="form-label">
                      Product Name
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="form-control"
                      name="name"
                      id="product_title"
                      required
                      onChange={(e) => inputHandler(e)}
                    />
                    <div className="mb-2">
                      <label className="form-label">Description</label>
                      <textarea
                        placeholder="Type here"
                        className="form-control"
                        name="description"
                        rows="7"
                        required
                        onChange={(e) => inputHandler(e)}
                      ></textarea>
                    </div>
                  </div>
                  <div className="mb-2">
                    <label htmlFor="product_price" className="form-label">
                      Price
                    </label>
                    <input
                      type="number"
                      placeholder="Type here"
                      className="form-control"
                      name="price"
                      id="product_price"
                      required
                      onChange={(e) => inputHandler(e)}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="product_price" className="form-label">
                      Stock Ready
                    </label>
                    <input
                      type="number"
                      placeholder="Type here"
                      className="form-control"
                      name="stock"
                      id="product_stock"
                      required
                      onChange={(e) => inputHandler(e)}
                    />
                  </div>

                  <div className="mb-2">
                    <select className="form-select">
                      <option>Choose Category</option>
                      <option>Men Fashion</option>
                      <option>Jakarta</option>
                      <option>Bekasi</option>
                    </select>
                  </div>

                  <div className="mb-2">
                    <label className="form-label">Images</label>
                    <input className="form-control mt-1" type="file" />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={(e) => onSubmit(e)}
                    >
                      Publish now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddProductMain;
