import React from "react";
import { useSelector } from "react-redux";

const TableAddress = () => {
  const userGlobal = useSelector((state) => state.user);
  console.log(userGlobal);
  return (
    <div className="w-full items-end">
      <div className=" w-full rounded-xl shadow-sm">
        <div className="p-3 rounded-t-xl">
          <div className="space-y-3">
            <div className="flex space-x-2">
              <h2 className="font-bold">{userGlobal.full_name}</h2>
              <p className="text-gray-400 text-sm">(Home)</p>
              <p className="text-xs border-1 bg-info text-white border-accent px-1 rounded-sm">
                Default
              </p>
            </div>
            <h2 className="text-sm">
              Villa Bintaro Regency, Jl.Lombok II Blok G2 No.9 Pondok Aren,
              Tangerang Selatan. 15220
            </h2>
            <div className="flex justify-between items-center">
              <h2 className="text-gray-400">021-7587535</h2>
              <button className="flex btn btn-ghost text-accent hover:text-green-500 hover:bg-white btn-xs font-bold normal-case">
                Choose Another Address
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableAddress;
