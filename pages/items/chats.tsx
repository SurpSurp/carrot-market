import { NextPage } from "next";

const Chats: NextPage = () => {
  return (
    <div className=" py-10 divide-y">
      <div className="flex items-center py-3 space-x-3 px-4">
        <div className="w-12 aspect-square rounded-full bg-slate-300" />
        <div className="flex flex-col">
          <span className=" text-gray-800">Steve Jebs</span>
          <span className="text-sm text-gray-500 cursor-pointer">
            See u tomorrow in the corner at 2pm!
          </span>
        </div>
      </div>
      <div className="flex items-center py-3 space-x-3 px-4">
        <div className="w-12 aspect-square rounded-full bg-slate-300" />
        <div className="flex flex-col">
          <span className=" text-gray-800">Steve Jebs</span>
          <span className="text-sm text-gray-500 cursor-pointer">
            See u tomorrow in the corner at 2pm!
          </span>
        </div>
      </div>
    </div>
  );
};

export default Chats;
