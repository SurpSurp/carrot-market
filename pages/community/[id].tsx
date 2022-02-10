import { NextPage } from "next";
import Layout from "../../components/layout";

const CommunityDeatil: NextPage = () => {
  return (
    <Layout isIndex={false}>
      <div className="py-10 px-4">
        <div className="border-b-[1.7px] pb-6">
          <span className="bg-gray-100 px-3 py-1 text-gray-700 rounded-full font-mediumm text-sm">
            동네질문
          </span>
          <div className="flex items-center pt-7 space-x-3">
            <div className="w-12 aspect-square rounded-full bg-slate-300" />
            <div className="flex flex-col">
              <span className=" font-medium text-gray-800">Steve Jebs</span>
              <span className="text-xs text-gray-500 cursor-pointer">
                View profile &rarr;
              </span>
            </div>
          </div>

          <div className="mt-2 text-gray-700 text-lg">
            <span className="font-medium text-orange-400 ">Q.</span> What is the
            best mandu restaurant?
          </div>
          <div className="flex space-x-3 w-full justify-start text-xs mt-4">
            <span className="flex items-center space-x-0.5 text-gray-500 ">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>
                궁금해요
                <span className="text-orange-300 font-medium"> 1 </span>
              </span>
            </span>
            <span className="flex items-center space-x-1 text-gray-500">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
              <span>
                답변 <span className="text-orange-300 font-medium"> 1 </span>
              </span>
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col py-3 border-b">
            <div className="flex w-full space-x-2">
              <div className="w-8 h-8 aspect-square rounded-full bg-slate-300" />
              <div className="flex flex-col text-xs text-gray-800">
                <span className="">Steve Jebs</span>
                <span>2시간 전</span>
              </div>
            </div>
            <span className="mt-2 text-sm font-light text-gray-800">
              The best mandu restaurant is the one next to my house!
            </span>
          </div>
          <div className="flex flex-col py-3 border-b">
            <div className="flex w-full space-x-2">
              <div className="w-8 h-8 aspect-square rounded-full bg-slate-300" />
              <div className="flex flex-col text-xs text-gray-800">
                <span className="">Steve Jebs</span>
                <span>2시간 전</span>
              </div>
            </div>
            <span className="mt-2 text-sm font-light text-gray-800">
              The best mandu restaurant is the one next to my house!
            </span>
          </div>
          <div className="flex flex-col py-3 border-b">
            <div className="flex w-full space-x-2">
              <div className="w-8 h-8 aspect-square rounded-full bg-slate-300" />
              <div className="flex flex-col text-xs text-gray-800">
                <span className="">Steve Jebs</span>
                <span>2시간 전</span>
              </div>
            </div>
            <span className="mt-2 text-sm font-light text-gray-800">
              The best mandu restaurant is the one next to my house!
            </span>
          </div>
        </div>

        <div className="mt-10">
          <textarea
            id="description"
            placeholder="Answer this question!"
            rows={4}
            className="w-full border-gray-300 rounded-md shadow-inner focus:outline-none  focus:ring-orange-400 focus:border-orange-400 transition"
          />
          <button className="mt-2 w-full bg-orange-400 text-white py-1.5 rounded-md cursor-pointer hover:bg-orange-500 focus:ring-2 ring-orange-400 ring-offset-2 focus:outline-none transition-colors">
            reply
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default CommunityDeatil;
