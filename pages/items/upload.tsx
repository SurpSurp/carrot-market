import type { NextPage } from "next";

const Upload: NextPage = () => {
  return (
    <div className="px-4 py-10">
      <div>
        <label className="w-full h-48 flex items-center justify-center text-gray-500 border-2 border-dashed border-gray-300 rounded-md hover:text-orange-400 group hover:border-orange-400 cursor-pointer ">
          <svg
            className="h-12 w-12 group-hover:h-16 group-hover:w-16"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <input className="hidden" type="file" />
        </label>
      </div>

      <div className="pt-10 pb-5">
        <label htmlFor="price" className="text-gray-700">
          Price
        </label>
        <div className="relative flex items-center mt-1">
          <div className="absolute left-0 pl-3 flex items-center justify-center">
            <span className="text-sm text-gray-500 select-none">$</span>
          </div>
          <input
            id="price"
            type="text"
            placeholder="0.00"
            className="appearance-none w-full px-7 py-1.5 rounded-md shadow-inner border border-gray-300 focus:outline-none focus:ring-orange-400 focus:border-orange-400 transition-colors delay-75"
          />
          <div className="absolute right-0 pr-3 flex items-center justify-center">
            <span className=" text-sm text-gray-600 select-none">USD</span>
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="description" className="text-gray-700">
          Description
        </label>
        <div className="mt-1">
          <textarea
            id="description"
            rows={4}
            className="w-full border-gray-300 rounded-md shadow-inner focus:outline-none  focus:ring-orange-400 focus:border-orange-400 transition"
          />
        </div>
      </div>
      <button className="mt-4 w-full bg-orange-400 text-white py-1.5 rounded-md cursor-pointer hover:bg-orange-500 focus:ring-2 ring-orange-400 ring-offset-2 focus:outline-none transition-colors">
        Upload product
      </button>
    </div>
  );
};

export default Upload;
