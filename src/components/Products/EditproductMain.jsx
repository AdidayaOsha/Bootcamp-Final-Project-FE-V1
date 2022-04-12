import React from "react";
import { Link } from "react-router-dom";

const EditProductMain = (props) => {
  const { editData } = props;
  console.log(editData);

  return (
    <>
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form>
          <div className="flex flex-row space-x-3">
            <h2 className="text-2xl mt-1">Update Product</h2>
            <Link to="/products" className="btn btn-accent mb-2 text-white">
              Go to products
            </Link>
          </div>

          <div className="row mb-4">
            <div className="col-xl-8 col-lg-8">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  {/* PRODUCT IMAGE */}
                  <div className="mb-2">
                    <div></div>
                    <label className="form-label">Images</label>
                    <input className="form-control mt-1" type="file" />
                  </div>

                  {/* PRODUCT NAME */}
                  <div className="mb-2">
                    <label htmlFor="product_title" className="form-label">
                      Product Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="product_title"
                      required
                      // value={editData.name}
                    />
                  </div>

                  {/* PRODUCT DESCRIPTION */}
                  <div className="mb-2">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      rows="5"
                      required
                      // value={editData.description}
                    ></textarea>
                  </div>

                  {/* PRODUCT PRICE */}
                  <div className="mb-2">
                    <label htmlFor="product_price" className="form-label">
                      Price
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="product_price"
                      required
                      // value={editData.price}
                    />
                  </div>

                  {/* PRODUCT STOCK READY*/}
                  <div className="mb-2">
                    <label htmlFor="product_price" className="form-label">
                      Stock Ready
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="product_stock"
                      required
                      // value={editData.warehouse_product.stock_ready}
                    />
                  </div>

                  {/* PRODUCT STOCK RESERVED*/}
                  <div className="mb-2">
                    <label htmlFor="product_price" className="form-label">
                      Stock Reserved
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="product_stock_reserved"
                      required
                      // value={editData.warehouse_product.stock_reserved}
                    />
                  </div>

                  {/* PRODUCT WAREHOUSE*/}
                  <div className="mb-2">
                    <label className="form-label">Warehouse</label>
                    <textarea
                      className="form-control"
                      required
                      // defaultValue={editData.warehouse.name}
                    ></textarea>
                  </div>
                  <div>
                    <button type="submit" className="btn btn-primary">
                      Edit Product
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </form>
      </section>
    </>
  );
};

export default EditProductMain;
