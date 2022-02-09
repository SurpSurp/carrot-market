import { NextPage } from "next";

const StreamDetail: NextPage = () => {
  return (
    <div className="py-10">
      <div className="pt-4">
        <div className="w-full aspect-video rounded-md bg-slate-300" />
        <h3 className="px-3 text-xl font-medium text-gray-700 mt-1.5">
          Let&apos;s try potatoes
        </h3>
        <div className="relative mt-12">
          <div className="absolute w-full border-t border-gray-400" />
          <div className=" relative -top-3  flex justify-center">
            <span className="px-3 bg-white flex items-center">
              Live chats
              <div className=" w-3 h-3 rounded-full bg-red-500 ml-2" />
            </span>
          </div>
        </div>
      </div>
      <div className="space-y-5 px-4 pb-4 pt-2 h-[57vh] overflow-x-scroll">
        <div className="w-full flex items-center space-x-3">
          <div className="w-11 h-11 rounded-full bg-slate-300" />
          <div className="w-1/2 border border-gray-400 rounded-md p-2 text-sm">
            <p className="text-gray-700">미쳤어</p>
          </div>
        </div>
        <div className="w-full flex flex-row-reverse items-center space-x-3 space-x-reverse">
          <div className="w-11 h-11 rounded-full bg-slate-300" />
          <div className="w-1/2 border border-gray-400 rounded-md p-2 text-sm">
            <p className="text-gray-700">I want ￦20,000</p>
          </div>
        </div>
        <div className="w-full flex items-center space-x-3">
          <div className="w-11 h-11 rounded-full bg-slate-300" />
          <div className="w-1/2 border border-gray-400 rounded-md p-2 text-sm">
            <p className="text-gray-700">미쳤어</p>
          </div>
        </div>
        <div className="w-full flex flex-row-reverse items-center space-x-3 space-x-reverse">
          <div className="w-11 h-11 rounded-full bg-slate-300" />
          <div className="w-1/2 border border-gray-400 rounded-md p-2 text-sm">
            <p className="text-gray-700">I want ￦20,000</p>
          </div>
        </div>
        <div className="w-full flex items-center space-x-3">
          <div className="w-11 h-11 rounded-full bg-slate-300" />
          <div className="w-1/2 border border-gray-400 rounded-md p-2 text-sm">
            <p className="text-gray-700">미쳤어</p>
          </div>
        </div>
        <div className="w-full flex flex-row-reverse items-center space-x-3 space-x-reverse">
          <div className="w-11 h-11 rounded-full bg-slate-300" />
          <div className="w-1/2 border border-gray-400 rounded-md p-2 text-sm">
            <p className="text-gray-700">I want ￦20,000</p>
          </div>
        </div>
        <div className="w-full flex items-center space-x-3">
          <div className="w-11 h-11 rounded-full bg-slate-300" />
          <div className="w-1/2 border border-gray-400 rounded-md p-2 text-sm">
            <p className="text-gray-700">미쳤어</p>
          </div>
        </div>
        <div className="w-full flex flex-row-reverse items-center space-x-3 space-x-reverse">
          <div className="w-11 h-11 rounded-full bg-slate-300" />
          <div className="w-1/2 border border-gray-400 rounded-md p-2 text-sm">
            <p className="text-gray-700">I want ￦20,000</p>
          </div>
        </div>
        <div className="w-full flex items-center space-x-3">
          <div className="w-11 h-11 rounded-full bg-slate-300" />
          <div className="w-1/2 border border-gray-400 rounded-md p-2 text-sm">
            <p className="text-gray-700">미쳤어</p>
          </div>
        </div>
        <div className="w-full flex flex-row-reverse items-center space-x-3 space-x-reverse">
          <div className="w-11 h-11 rounded-full bg-slate-300" />
          <div className="w-1/2 border border-gray-400 rounded-md p-2 text-sm">
            <p className="text-gray-700">I want ￦20,000</p>
          </div>
        </div>
        <div className="w-full flex items-center space-x-3">
          <div className="w-11 h-11 rounded-full bg-slate-300" />
          <div className="w-1/2 border border-gray-400 rounded-md p-2 text-sm">
            <p className="text-gray-700">미쳤어</p>
          </div>
        </div>
        <div className="w-full flex flex-row-reverse items-center space-x-3 space-x-reverse">
          <div className="w-11 h-11 rounded-full bg-slate-300" />
          <div className="w-1/2 border border-gray-400 rounded-md p-2 text-sm">
            <p className="text-gray-700">I want ￦20,000</p>
          </div>
        </div>
        <div className="w-full flex items-center space-x-3">
          <div className="w-11 h-11 rounded-full bg-slate-300" />
          <div className="w-1/2 border border-gray-400 rounded-md p-2 text-sm">
            <p className="text-gray-700">미쳤어</p>
          </div>
        </div>
      </div>
      <div className="fixed w-full mx-auto max-w-md inset-x-0 bottom-5 px-4">
        <div className="flex relative items-center">
          <input
            type="text"
            className="w-full rounded-full focus:outline-none focus:ring-orange-400 focus:border-orange-400 shadow-inner px-8"
          />
          <div className="absolute right-0 inset-y-0 py-1.5 pr-3 flex">
            <button className="flex items-center px-3 py-1.5 rounded-full focus:ring focus:ring-orange-400 focus:ring-offset-2 bg-orange-400 hover:bg-orange-500 text-white select-none">
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamDetail;
