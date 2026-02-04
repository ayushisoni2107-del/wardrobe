import React from "react";

function Compare() {
  return (
    <>
      <div className="pt-5 pl-5 flex flex-row gap-2">
        <h1 className="text-orange-400 text-4xl font-bold">Compare</h1>
        <h1 className="text-4xl font-bold">Products</h1>
      </div>
      <div className="pl-5 pt-3">
        <p className="text-gray-600 font-semibold">Side-by-side comparison of 2 products</p>
      </div>
      {/* Table */}
      <div className="p-5 overflow-x-auto">

        <table className="w-full border border-gray-300 border-collapse min-w-200">


          <thead>
            <tr className=" ">
              <th className="border-2 border-gray-300">Products</th>
              <th className="border-2 border-gray-300 px-2 py-2"><img src="/C1.png" /></th>
              <th className="border-2 border-gray-300 "><img src="/C1.png" /></th>
              <th className="border-2 border-gray-300"><img src="/C1.png" /></th>
              <th className="border-2 border-gray-300"><img src="/C1.png" /></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-2 border-gray-300  font-medium">Price</td>
              <td className="border-2 border-gray-300 ">RS 2000</td>
              <td className="border-2 border-gray-300 "></td>
              <td className="border-2 border-gray-300 "></td>
              <td className="border-2 border-gray-300 "></td>
            </tr>

            <tr className="bg-gray-50">
              <td className="border-2 border-gray-300  font-medium"></td>
              <td className="border-2 border-gray-300 "></td>
              <td className="border-2 border-gray-300 "></td>
              <td className="border-2 border-gray-300 "></td>
              <td className="border-2 border-gray-300 "></td>
            </tr>

            <tr>
              <td className="border-2 border-gray-300  font-medium"></td>
              <td className="border-2 border-gray-300 "></td>
              <td className="border-2 border-gray-300 "></td>
              <td className="border-2 border-gray-300 "></td>
              <td className="border-2 border-gray-300 "></td>
            </tr>

            <tr className="bg-gray-50">
              <td className="border-2 border-gray-300  font-medium"></td>
              <td className="border-2 border-gray-300 "></td>
              <td className="border-2 border-gray-300"></td>
              <td className="border-2 border-gray-300 "></td>
              <td className="border-2 border-gray-300 "></td>
            </tr>

            <tr>
              <td className="border-2 border-gray-300  font-medium"></td>
              <td className="border-2 border-gray-300 "></td>
              <td className="border-2 border-gray-300 "></td>
              <td className="border-2 border-gray-300 "></td>
              <td className="border-2 border-gray-300 "></td>
            </tr>

          </tbody>

        </table>

      </div>
    </>
  );
} export default Compare