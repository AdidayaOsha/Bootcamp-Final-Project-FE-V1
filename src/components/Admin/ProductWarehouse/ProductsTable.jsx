import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { API_URL } from "../../../constant/api";
import { toast } from "react-toastify";

const ProductsTable = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const {id}= useParams();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      await Axios.get(`${API_URL}/warehouses/product/${id}`).then((results) => {
        setProducts(results.data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const onDelete = async (id) => {
    try {
      await Axios.delete(`${API_URL}/products/delete/categories/${id}`).then(
        () => {
          toast("A Category Has Been Deleted");
          navigate("/category");
          getProducts();
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const TableHead = () => {
    return (
      <thead>
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th>Stock Ready</th>
          <th className="text-end">Action</th>
        </tr>
      </thead>
    );
  };

  const TableBody = () => {
    return products.map((val, id) => {
      return (
        <tr key={val.id}>
          <td>{val.id}</td>
          <td>
            <b>{val.product.name}</b>
          </td>
          <td>{val.stock_ready} pcs</td>
          <td className="text-end">
            <div className="dropdown">
              <Link to="#" data-bs-toggle="dropdown" className="btn btn-light">
                <i className="fas fa-ellipsis-h"></i>
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="#">
                  Edit info
                </Link>
                <Link
                  className="dropdown-item text-danger"
                  onClick={() => onDelete(val.id)}
                  to="#"
                >
                  Delete
                </Link>
              </div>
            </div>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="col-md-12 col-lg-7">
      <table className="table">
        {TableHead()}
        <tbody>{TableBody()}</tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
