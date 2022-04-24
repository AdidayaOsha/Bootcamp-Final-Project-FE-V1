import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Axios from "axios";
import { API_URL } from "../../constant/api";

const AddWarehouse = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [stock_ready, setStock_ready] = useState(0);
  const [productCategoryId, setProductCategoryId] = useState("");
  const [warehouseId, setWarehouseId] = useState("");
  const [warehouses, setWarehouses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [product_image, setProduct_Image] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const getWarehouses = async () => {
      try {
        await Axios.get(`${API_URL}/products/warehouses`).then((results) => {
          setWarehouses(results.data);
        });
      } catch (err) {
        console.log(err);
      }
    };
    getWarehouses();
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      try {
        await Axios.get(`${API_URL}/products/categories`).then((results) => {
          setCategories(results.data);
        });
      } catch (err) {
        console.log(err);
      }
    };
    getCategories();
  }, []);

  const onSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("product_image", product_image);
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("stock_ready", stock_ready);
      formData.append("productCategoryId", productCategoryId);
      formData.append("warehouseId", warehouseId);
      console.log(formData);

      await Axios.post(`${API_URL}/products/add`, formData).then((results) => {
        console.log(results.data);
        navigate("/products");
      });
    } catch (err) {
      console.log(err);
    }
  };

  const SelectCategories = () => {
    return categories.map((val) => {
      return <option value={val.id}>{val.name}</option>;
    });
  };

  const SelectWarehouse = () => {
    return warehouses.map((val) => {
      return <option value={val.id}>{val.name}</option>;
    });
  };

  return (
    <>
      <section className="content-main" style={{ maxWidth: "1600px" }}>
        <form>
          <div className="row mb-4">
            <div className="flex flex-row space-x-4 mb-3 items-center">
              <Link to="/warehouse" className="btn btn-accent text-white">
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
              </Link>
              <h2 className="content-title text-2xl">{location.state!==null?"Edit Warehouse":"Add New Warehouse"}</h2>
            </div>
            <div className="col-xl-12 col-lg-12">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <div className="mb-2">
                        <label htmlFor="product_title" className="form-label">
                          Warehouse Name
                        </label>
                        <input
                          type="text"
                          placeholder="Type here"
                          className="form-control"
                          name="name"
                          id="product_title"
                          value={location.state!==null?location.state.name:null}
                          required
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="mb-2">
                        <label htmlFor="product_price" className="form-label">
                          Contact Number
                        </label>
                        <input
                          type="number"
                          placeholder="Type here"
                          className="form-control"
                          name="price"
                          id="product_price"
                          value={location.state!==null?"0"+location.state.phone:null}
                          required
                          onChange={(e) => setPrice(+e.target.value)}
                        />
                      </div>
                      <div className="mb-2">
                        <label htmlFor="product_price" className="form-label">
                          Address
                        </label>
                        <input
                          type="text"
                          placeholder="Type here"
                          className="form-control"
                          name="stock"
                          id="product_stock"
                          value={location.state!==null?location.state.address:null}
                          required
                          onChange={(e) => setStock_ready(+e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="mb-2">
                        <label htmlFor="product_price" className="form-label">
                          City
                        </label>
                        <select
                          onChange={(e) => {
                            setProductCategoryId(+e.target.value);
                            e.preventDefault();
                          }}
                          className="form-select"
                          name="productCategoryId"
                          value={productCategoryId}
                        >
                          <option>Choose Category</option>
                          {SelectCategories()}
                        </select>
                      </div>
                      <div className="mb-2">
                        <label htmlFor="product_price" className="form-label">
                          Province
                        </label>
                        <select
                          onChange={(e) => {
                            e.preventDefault();
                            setWarehouseId(+e.target.value);
                          }}
                          className="form-select"
                          name="warehouseId"
                          value={warehouseId}
                        >
                          <option>Choose Warehouse</option>
                          {SelectWarehouse()}
                        </select>
                      </div>
                      <div className="mb-2">
                        <label className="form-label">Postal Code</label>
                        <select
                          onChange={(e) => {
                            e.preventDefault();
                            setWarehouseId(+e.target.value);
                          }}
                          className="form-select"
                          name="warehouseId"
                          value={warehouseId}
                        >
                          <option>Choose Warehouse</option>
                          {SelectWarehouse()}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <button
                      type="submit"
                      className="btn btn-accent inline-block"
                      onClick={(e) => onSubmit(e)}
                      encType="multipart/form-data"
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

export default AddWarehouse;
