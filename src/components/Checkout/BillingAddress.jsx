import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { API_URL } from "../../constant/api";
import Axios from "axios";

const BillingAddress = () => {
  const [data, setData] = useState({});
  const [addressData, setAddressData] = useState([]);
  const [address_line, setAddress_Line] = useState("");
  const [address_type, setAddress_Type] = useState("");
  const [cityId, setCityId] = useState(0);
  const [provinceId, setProvinceId] = useState(0);
  const [districtId, setDistrictId] = useState(0);
  const [postal_code, setPostal_Code] = useState("");
  const [userId, setUserId] = useState(0);
  const [isDefault, setIsDefault] = useState(false);
  console.log(`provinceId: ${provinceId}`);
  console.log(`CityId: ${cityId}`);
  console.log(`districtId: ${districtId}`);

  useEffect(() => {
    const getAddress = async () => {
      try {
        const results = await Axios.get(`${API_URL}/users/address`);
        setAddressData(results.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAddress();
  }, []);

  const addressHandler = async () => {
    try {
      const res = await Axios.post(`${API_URL}/users/newaddress`, {
        address_line,
        address_type,
        cityId,
        provinceId,
        postal_code,
        userId,
        isDefault,
      });
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const selectProvince = () => {
    return addressData?.map((val) => {
      return <option value={val.id}>{val.name}</option>;
    });
  };

  const selectCities = () => {
    return addressData[provinceId - 1]?.cities.map((val) => {
      return <option value={val.id}>{val.name}</option>;
    });
  };

  const selectDistrict = () => {
    return addressData[provinceId - 1]?.cities[
      (provinceId === 2 ? cityId - 5 : null,
      provinceId === 3 ? cityId - 10 : null,
      provinceId === 4 ? cityId - 19 : null,
      provinceId === 5 ? cityId - 25 : null)
    ]?.districts.map((val) => {
      return <option value={val.id}>{val.name}</option>;
    });
  };

  const userGlobal = useSelector((state) => state.user);

  const TableAdress = () => {
    return userGlobal.user_addresses?.map((val) => {
      return (
        <>
          {/* TABLE ADDRESS HERE */}
          <div className="w-full items-end">
            <div className=" w-full rounded-xl shadow-sm">
              <div className="p-3 rounded-t-xl">
                <div className="space-y-3">
                  <div className="flex space-x-2">
                    <h2 className="font-bold">{userGlobal.full_name}</h2>
                    <p className="text-gray-400 text-sm">
                      ({val.address_type})
                    </p>
                    {val.isDefault ? (
                      <p className="text-xs border-1 bg-info text-white border-accent px-1 rounded-sm">
                        Default
                      </p>
                    ) : null}
                  </div>
                  <h2 className="">
                    {val.address_line}, <span>{val.city}</span>
                  </h2>
                  <h2 className="">Postal Code: {val.postal_code}</h2>
                  <div className="flex justify-between items-center">
                    <h2 className="text-gray-400">Phone: {val.phone}</h2>
                    <div className="flex space-x-2">
                      {val.isDefault ? null : (
                        <>
                          <td>
                            <i className="hover:cursor-pointer fas fa-trash-alt align-middle mr-2"></i>
                          </td>
                          <button className="flex btn btn-outline btn-accent btn-sm font-bold normal-case">
                            Deliver To This Address
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    });
  };

  const Footer = () => {
    return (
      <>
        <div className="flex justify-between items-center mb-4">
          <div className="items-start">
            <Link to="/checkout">
              <div className="text-gray-600 hover:text-gray-500 text-sm space-x-2 my-3 flex group">
                <i className="fas fa-arrow-left transition-all group-hover:mr-1"></i>
                <h2 className="font-bold">Back</h2>
              </div>
            </Link>
          </div>
          <div>
            <label
              for="my-modal-3"
              className="btn modal-button text-accent btn-ghost btn-sm hover:bg-gray-200 normal-case"
              onClick={() => addressHandler()}
            >
              + Add New Address
            </label>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  for="my-modal-3"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-lg font-bold text-center mb-2">
                  Please Input Your New Address for
                  <br />
                  {userGlobal.full_name}
                </h3>
                <div class="form-control border-transparent hover:border-transparent w-full max-w-xs m-auto">
                  <label class="label">
                    <div className="flex ">
                      <span className="label-text">
                        Address{" "}
                        <span className="text-gray-400 text-sm">
                          Ex: Jl. Kenangan Blok V2 No.9
                        </span>
                      </span>
                    </div>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => setAddress_Line(e.target.value)}
                  />
                  <div>
                    <label className="label">
                      <div className="flex ">
                        <span className="label-text">Building Type</span>
                      </div>
                    </label>
                    <select
                      className="select select-bordered w-full max-w-xs"
                      onChange={(e) => setAddress_Type(e.target.value)}
                    >
                      <option>Home</option>
                      <option>Apartment</option>
                      <option>Office</option>
                      <option>Boarding House</option>
                      <option>Dormitory</option>
                      <option>School</option>
                      <option>Hospital</option>
                    </select>
                  </div>
                  <div>
                    <label className="label">
                      <div className="flex ">
                        <span className="label-text">Province</span>
                      </div>
                    </label>
                    <select
                      className="select select-bordered w-full max-w-xs"
                      onChange={(e) => setProvinceId(+e.target.value)}
                    >
                      {selectProvince()}
                    </select>
                  </div>
                  <div>
                    <div>
                      <label className="label">
                        <div className="flex ">
                          <span className="label-text">City</span>
                        </div>
                      </label>
                      <select
                        className="select select-bordered w-full max-w-xs"
                        onChange={(e) => setCityId(+e.target.value)}
                      >
                        {selectCities()}
                      </select>
                    </div>
                    <div>
                      <label className="label">
                        <div className="flex ">
                          <span className="label-text">District</span>
                        </div>
                      </label>
                      <select className="select select-bordered w-full max-w-xs">
                        {selectDistrict()}
                      </select>
                    </div>
                    <label class="label">
                      <div className="flex ">
                        <span className="label-text">Postal Code</span>
                      </div>
                    </label>
                    <input
                      type="text"
                      placeholder="ex: 15220"
                      className="input input-bordered w-full max-w-xs"
                    />
                    <div class="">
                      <label class="label cursor-pointer">
                        <span class="label-text">
                          Choose as Default Address
                        </span>
                        <input type="checkbox" class="checkbox" />
                      </label>
                    </div>
                    <button className="w-full btn btn-accent mt-4 text-white">
                      Submit My New Address
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {/* DIV PRODUCT CARD */}
      <div className="w-1/2 flex flex-col space-y-4">
        {TableAdress()}
        {Footer()}
      </div>
    </>
  );
};

export default BillingAddress;
