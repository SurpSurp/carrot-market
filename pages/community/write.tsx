import { NextPage } from "next";
import Layout from "../../components/layout";

const CommunityWrite: NextPage = () => {
  return (
    <Layout isIndex={false}>
      <div className="py-10 px-4">
        <textarea
          id="description"
          placeholder="Ask a question!"
          rows={7}
          className="w-full border-gray-300 rounded-md shadow-inner focus:outline-none  focus:ring-orange-400 focus:border-orange-400 transition"
        />
        <button className="mt-2 w-full bg-orange-400 text-white py-1.5 rounded-md cursor-pointer hover:bg-orange-500 focus:ring-2 ring-orange-400 ring-offset-2 focus:outline-none transition-colors">
          Summit
        </button>
      </div>
    </Layout>
  );
};

export default CommunityWrite;
