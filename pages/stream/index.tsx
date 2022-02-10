import { NextPage } from "next";
import Layout from "../../components/layout";

const Stream: NextPage = () => {
  return (
    <Layout isIndex={true} title="라이브">
      <div className="py-10 divide-y-2">
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <div key={i} className="px-4 py-4">
            <div className="w-full aspect-video rounded-md bg-slate-300" />
            <h3 className="text-lg text-gray-700 mt-1.5">
              Let&apos;s try potatoes
            </h3>
          </div>
        ))}
        <button className="fixed bottom-20 right-5 bg-orange-400 hover:bg-orange-500 transition-colors delay-75 rounded-full p-5 text-white font-medium shadow-lg border-transparent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </button>
      </div>
    </Layout>
  );
};

export default Stream;
