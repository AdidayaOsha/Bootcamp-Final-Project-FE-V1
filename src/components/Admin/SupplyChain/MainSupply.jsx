import React from "react";
import AddProduct from "./AddProduct";
import ProductsTable from "./ProductsTable";
import { Link } from "react-router-dom";

const MainSupply = () => {
  return (
    <section className="content-main" style={{ maxWidth: "1600px" }}>
      <form>
          <div className="row mb-4">
            <div className="flex flex-row space-x-4 mb-3 items-center">
              <h2 className="content-title text-2xl">Manage Supply Cost</h2>
            </div>
            <div className="col-xl-12 col-lg-12">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <div className="row">
                    {AddProduct()}
                    {ProductsTable()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
    </section>
  );
};

export default MainSupply;
