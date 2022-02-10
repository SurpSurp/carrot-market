import { NextPage } from "next";
import Layout from "../../components/layout";

const EditProfile: NextPage = () => {
  return (
    <Layout isIndex={false}>
      <div className="px-4 py-10 space-y-5">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 rounded-full bg-slate-300" />
          <label
            htmlFor="avatar"
            className="cursor-pointer rounded-3xl border-orange-400 border px-4 py-2 text-orange-400 hover:text-white hover:bg-orange-400 transition-colors"
          >
            Change Photo
            <input
              id="avatar"
              type="file"
              className="hidden"
              accept="image/*"
            />
          </label>
        </div>
        <div className="space-y-1">
          <label htmlFor="email" className="text-gray-500">
            email
          </label>
          <input
            type="email"
            id="email"
            className="appearance-none w-full px-3 py-1.5 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400 transition-colors delay-75"
            required
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="phone" className="text-gray-500">
            phone
          </label>
          <div className="flex flex-row-reverse">
            <input
              type="number"
              id="phone"
              className="appearance-none peer w-full px-3 py-1.5 rounded-r-md border border-gray-300 focus:outline-none focus:ring-orange-400 focus:border-orange-400 focus:border-l-0 "
              required
            />
            <span className="flex justify-center items-center peer-focus:outline-none peer-focus:border-orange-400 peer-focus:ring-1 peer-focus:ring-orange-400 peer-focus:text-orange-400 font-medium  px-3 rounded-l-md border border-gray-300 border-r-0 text-gray-500 select-none text-sm">
              +82
            </span>
          </div>
        </div>

        <button className="w-full mt-5 bg-orange-400 text-white py-1.5 rounded-md cursor-pointer hover:bg-orange-500 focus:ring-2 ring-orange-400 ring-offset-2 focus:outline-none transition-colors">
          Update Profile
        </button>
      </div>
    </Layout>
  );
};

export default EditProfile;
