import { NextPage } from "next";

const Create: NextPage = () => {
  return (
    <div className="px-4 py-10 space-y-5">
      <div className="pt-10">
        <label htmlFor="name" className="text-gray-700">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="appearance-none w-full px-3 py-1.5 rounded-md shadow-inner border border-gray-300 focus:outline-none focus:ring-orange-400 focus:border-orange-400 transition-colors delay-75 placeholder-gray-500"
        />
      </div>
      <div>
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
      <button className="w-full bg-orange-400 text-white py-1.5 rounded-md cursor-pointer hover:bg-orange-500 focus:ring-2 ring-orange-400 ring-offset-2 focus:outline-none transition-colors">
        Go Live
      </button>
    </div>
  );
};

export default Create;
