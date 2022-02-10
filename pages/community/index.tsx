import type { NextPage } from "next";
import Layout from "../../components/layout";

const Community: NextPage = () => {
  return (
    <Layout isIndex={true} title="동네생활">
      <div className="py-6 px-4 space-y-3">
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <div
            key={i}
            className="flex flex-col items-start border-b-[1.5px] py-5 cursor-pointer"
          >
            <span className="bg-gray-100 px-3 py-1 text-gray-700 rounded-full font-mediumm text-sm">
              동네질문
            </span>
            <div className="mt-2 text-gray-700">
              <span className="font-medium text-orange-400 ">Q.</span> What is
              the best mandu restaurant?
            </div>
            <div className="w-full flex justify-between mt-2">
              <div className="w-full flex justify-start items-center space-x-1.5 text-sm text-gray-500">
                <span>18시간 전</span>
                <span className="text-xs font-medium text-gray-300">|</span>
                <span className="font-medium">니꼬</span>
              </div>
              <div className="flex space-x-3 w-full justify-end text-sm">
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
                    답변{" "}
                    <span className="text-orange-300 font-medium"> 1 </span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        ))}
        <button className="fixed bottom-20 right-5 bg-orange-400 hover:bg-orange-500 transition-colors text-white p-6 rounded-full shadow">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            ></path>
          </svg>
        </button>
      </div>
    </Layout>
  );
};

export default Community;
