import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { API_URL } from "../../constant/api";
import Axios from "axios";
import { toast } from "react-toastify";
import { currencyFormatter } from '../../helpers/currencyFormatter';
import { topProduct } from "../../data/AdminMaster";

const Warehouses = () => {
  const [data, setData] = useState([]);
  const [sortValue, setSortValue] = useState([]);
  const [warehouses, setWarehouses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      try {
        const results = await Axios.get(`${API_URL}/products/warehouses`);
        setData(results.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
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

  useEffect(() => {
    const getWarehouses = async () => {
      try {
        await Axios.get(`${API_URL}/warehouses`).then((results) => {
          setWarehouses(results.data);
        });
      } catch (err) {
        console.log(err);
      }
    };
    getWarehouses();
  }, []);

  const onDelete = async (id) => {
    try {
      await Axios.delete(`${API_URL}/products/delete/${id}`).then((results) => {
        toast("Product Has Been Deleted");
        Navigate("/products");
      });
    } catch (err) {
      console.log(err);
    }
  };

  // SORTING PRODUCTS
  useEffect(() => {
    const getBySort = async () => {
      try {
        let results;
        if (sortValue === "az") {
          results = await Axios.get(`${API_URL}/products/sort/az`);
        } else if (sortValue === "za") {
          results = await Axios.get(`${API_URL}/products/sort/za`);
        } else if (sortValue === "lowprice") {
          results = await Axios.get(`${API_URL}/products/sort/lowprice`);
        } else if (sortValue === "highprice") {
          results = await Axios.get(`${API_URL}/products/sort/highprice`);
        } else if (sortValue === "sort") {
          results = await Axios.get(`${API_URL}/products`);
        }
        setData(results.data);
        console.log(results.data);
      } catch (err) {
        console.log(err);
      }
    };
    getBySort();
  }, [sortValue]);

  const onSearch = async () => {
    await Axios.post(`${API_URL}/products/search`, { name: search })
      .then((results) => {
        setData(results.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const SelectCategories = () => {
    return categories.map((val, idx) => {
      return <option key={idx}>{val.name}</option>;
    });
  };

  const SelectWarehouse = () => {
    return warehouses.map((val, idx) => {
      return <option key={idx}>{val.name}</option>;
    });
  };

  const TableHead = () => {
    return (
      <thead>
        <tr className="">
          <th>No. </th>
          <th>Username</th>
          <th>Warehouse</th>
          <th>Actual Order Time</th>
          <th>Actual End Time</th>
          <th>Fixed Cost</th>
          <th>Operational Cost</th>
          <th>Total Cost</th>
          <th>Revenue</th>
          <th>Profit</th>
        </tr>
      </thead>
    );
  };

  const TableBody = () => {
    return data.map((val, idx) => {
      return (
        <tr key={idx}>
          <td>{idx+1}</td>
          <td>{val.name}</td>
          <td>{val.address}</td>
          <td>{val.city}</td>
          <td>{val.province}</td>
          <td>{val.phone}</td>
        </tr>
      );
    });
  };

  const TableHead2 = () => {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Total</th>
        </tr>
      </thead>
    );
  };

  const TableBodyProduct = () => {
    return topProduct.map((val, id) => {
      return (
        <tr key={val.id}>
          <td>{val.name}</td>
          <td>{val.total}</td>
        </tr>
      );
    });
  };

  return (
    <section className="content-main-full">

      {/* Search and Filter Section */}
      <div className="card mb-4 shadow-sm">
        <header className="card-header bg-white ">
          <div className="row gx-3 py-3 space-x-2">
            <div className="col-lg-5 col-md-6 me-auto flex flex-row">
              <div className="space-y-2 flex flex-row items-center space-x-3">
                <h2 className="text-2xl">Sales Report</h2>
              </div>
            </div>

            <div className="col-lg-2 col-6 col-md-3">
              <select 
                style={{backgroundColor:"white",borderColor:"teal"}}
                className="select w-full max-w-xs input-bordered text-gray-500 bg-light">
                <option>Filter Date</option>
              </select>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select
                style={{backgroundColor:"white",borderColor:"teal"}}
                className="select w-full max-w-xs input-bordered text-gray-500 bg-light"
                onChange={(e) => setSortValue(e.target.value)}
                name="sort"
              >
                <option name="sort" value="sort">
                  Filter By
                </option>
                <option name="lowprice" value="lowprice">
                  Lowest Transaction
                </option>
                <option name="highprice" value="highprice">
                  Highest Transaction
                </option>
              </select>
            </div>
            <div className="col-lg-1 col-6 col-md-3">
              <button className="btn w-full btn-accent">EXPORT</button>
            </div>
          </div>
        </header>
      </div>

      <div className="row col-lg-12">
          <div className="col-lg-4">
              <div className="card card-body mb-6 shadow-sm">
              <article className="icontext">
                  <span className="icon icon-sm rounded-circle alert-primary">
                  <i className="text-primary fas fa-usd-circle"></i>
                  </span>
                  <div className="text">
                  <h6 className="mb-1">Revenue</h6>{" "}
                  <span>{currencyFormatter(50000000)}</span>
                  </div>
              </article>
              </div>
              <div className="card card-body mb-6 shadow-sm">
              <article className="icontext">
                  <span className="icon icon-sm rounded-circle alert-warning">
                  <i className="fas fa-bags-shopping"></i>
                  </span>
                  <div className="text">
                  <h6 className="mb-1">Number Of Sales</h6>
                  <span>1200 transactions</span>
                  </div>
              </article>
              </div>
          </div>
          <div className="col-lg-4">
              <div className="card card-body mb-6 shadow-sm">
              <article className="icontext">
                  <span className="icon icon-sm rounded-circle alert-success">
                  <i className="text-success fas fa-money-bill"></i>
                  </span>
                  <div className="text">
                  <h6 className="mb-1">Profit</h6>
                  <span>{currencyFormatter(22000000)}</span>
                  </div>
              </article>
              </div>
              <div className="card card-body mb-6 shadow-sm">
              <article className="icontext">
                  <span className="icon icon-sm rounded-circle alert-error">
                  <i className="fas fa-file-invoice"></i>
                  </span>
                  <div className="text">
                  <h6 className="mb-1">Total Cost</h6>
                  <span>{currencyFormatter(25000000)}</span>
                  </div>
              </article>
              </div>
          </div>
          <div className="col-lg-4">
              <div className="card mb-4 shadow-sm">
                  <article className="card-body">
                  <p className="card-title">Top 3 Products</p>
                  <table className="table">
                      {TableHead2()}
                      {TableBodyProduct()}
                  </table>
                  </article>
              </div>
              
          </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-compact w-full text-center">
          {TableHead()}
          <tbody>{TableBody()}</tbody>
        </table>
      </div>
    </section>
  );
};

export default Warehouses;

