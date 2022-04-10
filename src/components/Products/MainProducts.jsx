import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Products from "../../data/Products";
import { API_URL } from "../../constant/api";
import Axios from "axios";

const MainProducts = () => {
  const [data, setData] = useState([]);
  const [sortValue, setSortValue] = useState("");

  useEffect(() => {
    getProducts();
  }, []);

  // GET PRODUCTS
  const getProducts = () => {
    Axios.get(`${API_URL}/products`)
      .then((results) => {
        setData(results.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // SORTING PRODUCTS
  useEffect(() => {
    const getBySort = async () => {
      try {
        let results;
        if (sortValue === "az") {
          results = await Axios.get(`${API_URL}/sort/az`);
        } else if (sortValue === "za") {
          results = await Axios.get(`${API_URL}/sort/za`);
        } else if (sortValue === "lowprice") {
          results = await Axios.get(`${API_URL}/sort/lowprice`);
        } else if (sortValue === "highprice") {
          results = await Axios.get(`${API_URL}/sort/highprice`);
        } else if (sortValue === "sort") {
          results = await Axios.get(`${API_URL}/products`);
        }
        // setData(results.data);
      } catch (err) {
        console.log(err);
      }
    };
    getBySort();
  }, [sortValue]);

  const TableHead = () => {
    return (
      <thead>
        <tr>
          <th></th>
          <th>Image</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Stock Ready</th>
          <th>Stock Reserved</th>
          <th>Warehouse</th>
          <th>Action</th>
        </tr>
      </thead>
    );
  };

  const TableBody = () => {
    return Products.map((val) => {
      return (
        <tr key={val.id}>
          <th>{val.id}</th>
          <td>
            <img
              className="mask mask-squircle w-12"
              src="https://api.lorem.space/image/shoes?w=160&h=160"
            />
          </td>
          <td>{val.name}</td>
          <td>{val.description.slice(0, 12)}...</td>
          <td>{val.price}</td>
          <td>{val.stockReady}</td>
          <td>{val.stockReserved}</td>
          <td>{val.warehouse}</td>
          <td>
            <div className="my-2 space-x-1">
              <Link
                to={`/product/edit/${val.id}`}
                className="btn btn-sm btn-accent p-2 pb-3"
              >
                <i className="fas fa-pen"></i>
              </Link>
              <Link to="#" className="btn btn-sm btn-error p-2 pb-3">
                <i className="fas fa-trash-alt"></i>
              </Link>
            </div>
          </td>
        </tr>
      );
    });
  };

  const TableFoot = () => {
    return (
      <tfoot>
        <tr className="">
          <th></th>
          <th>Image</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Stock Ready</th>
          <th>Stock Reserved</th>
          <th>Warehouse</th>
          <th>Action</th>
        </tr>
      </tfoot>
    );
  };

  const SearchAndFilter = () => {
    return (
      <div className="card my-4 shadow-sm">
        <header className="card-header bg-white ">
          <div className="row gx-3 py-3">
            <div className="col-lg-4 col-md-6 me-auto ">
              <input
                type="search"
                placeholder="Search Product"
                className="form-control p-2"
              />
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Choose Warehouse</option>
                <option>BSD</option>
                <option>Jakarta</option>
                <option>Bekasi</option>
              </select>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>All category</option>
                <option>Electronics</option>
                <option>Clothings</option>
                <option>Food and Drinks</option>
                <option>Music</option>
                <option>Food and Drinks</option>
                <option>Food and Drinks</option>
                <option>Food and Drinks</option>
              </select>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>A-Z</option>
                <option>Z-A</option>
                <option>Lowest Price</option>
                <option>Highest Price Price</option>
                <option>Most Bought</option>
              </select>
            </div>
          </div>
        </header>
      </div>
    );
  };

  const Pagination = () => {
    return (
      <div className="btn-group flex justify-center">
        <div className="btn-group space-x-2 mt-2">
          <button className="btn btn-primary">«</button>
          <button className="btn text-black bg-base-200">Page 1</button>
          <button className="btn btn-primary">»</button>
        </div>
      </div>
    );
  };

  return (
    <section className="content-main">
      <div className="space-y-2 flex flex-row items-center space-x-3">
        <h2 className="text-2xl">Manage Products</h2>
        <div>
          <Link to="/addproduct" className="btn btn-primary">
            Add New Product
          </Link>
        </div>
      </div>

      {/* Search and Filter Section */}
      <SearchAndFilter />

      <div className="overflow-x-auto">
        <table className="table table-compact w-full text-center">
          <TableHead />
          <tbody>
            <TableBody />
          </tbody>
          <TableFoot />
        </table>
        <Pagination />
      </div>
    </section>
  );
};

export default MainProducts;
