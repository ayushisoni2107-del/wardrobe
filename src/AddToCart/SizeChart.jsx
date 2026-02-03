import React from "react";

function SizeChart({ open, onClose }) {
  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-40"
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-216.75 w-166.25 sm:w-113.75 md:w-138.75 lg:w-166.25 bg-white shadow-xl z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-5 py-4 border-b">
          <h2 className="text-xl font-semibold">Size Chart</h2>

          <button
            onClick={onClose}
            className="text-2xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Toggle */}
        <div className="px-5 py-4">
          <div className="flex bg-gray-100 rounded-lg overflow-hidden">

            <button className="flex-1 py-2 bg-orange-500 text-white font-medium">
              Inches
            </button>

            <button className="flex-1 py-2 text-gray-700">
              CM
            </button>

          </div>
        </div>

        {/* Table */}
        <div className="px-5 overflow-auto">

          <table className="w-full text-sm border">

            <thead className="bg-gray-600 text-white">
              <tr>
                <th className="p-2">Size</th>
                <th>Brand</th>
                <th>Bust</th>
                <th>Waist</th>
                <th>Hips</th>
                <th>Length</th>
              </tr>
            </thead>

            <tbody className="text-center">

              {[
                ["XS", "XS", 32, 26, 35, 42],
                ["S", "S", 34, 28, 37, 42],
                ["M", "M", 36, 30, 39, 42],
                ["L", "L", 38, 32, 41, 42],
                ["XL", "XL", 40, 34, 43, 42],
                ["XXL", "XXL", 42, 36, 45, 42],
                ["3XL", "3XL", 44, 38, 47, 42],
              ].map((row, i) => (
                <tr key={i} className="border-b">

                  <td className="p-2">
                    <input type="radio" name="size" />
                  </td>

                  {row.map((item, idx) => (
                    <td key={idx} className="p-2">
                      {item}
                    </td>
                  ))}

                </tr>
              ))}

            </tbody>

          </table>

        </div>
      </div>
    </>
  );
} export default SizeChart
