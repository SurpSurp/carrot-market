import type { NextPage } from "next";

const ItemDetail: NextPage = () => {
  return (
    <div className="px-4 py-10">
      <div>
        <div className="h-96 bg-slate-300" />
        <div className="flex items-center py-3 space-x-3">
          <div className="w-12 aspect-square rounded-full bg-slate-300" />
          <div>
            <p className="text-sm font-medium text-gray-800">Steve Jebs</p>
            <p className="text-xs text-gray-500 cursor-pointer">
              View profile &rarr;
            </p>
          </div>
        </div>
        <div className="py-7 border-y">
          <h1 className="text-2xl font-semibold text-gray-800">Galaxy S50</h1>
          <p className="text-xl font-semibold block mt-1 text-orange-400">
            $140
          </p>
          <p className="my-3 text-sm text-gray-800">
            My money&apos;s in that office, right? If she start giving me some
            bullshit about it ain&apos;t there, and we got to go someplace else
            and get it, I&apos;m gonna shoot you in the head then and there.
            Then I&apos;m gonna shoot that bitch in the kneecaps, find out where
            my goddamn money is. She gonna tell me too. Hey, look at me when
            I&apos;m talking to you, motherfucker. You listen: we go in there,
            and that ni**a Winston or anybody else is in there, you the first
            motherfucker to get shot. You understand?
          </p>
          <div className="flex items-center justify-between space-x-2 mt-5">
            <button className="bg-orange-400 flex-1 py-2 rounded-md text-white hover:bg-orange-500 transition-colors delay-75 focus:outline-none focus:ring ring-offset-2 ring-orange-400 shadow">
              Talk to seller
            </button>
            <button className="text-gray-400 hover:bg-gray-100 hover:text-gray-500 flex justify-center items-center rounded-md p-2 focus:outline-none focus:ring ring-gray-200">
              <svg
                className="h-6 w-6 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="py-7">
        <h2 className="text-lg font-medium text-gray-800">Similar items</h2>
        <div className="flex space-x-3 mt-3 overflow-y-auto">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <div key={i} className="min-w-[140px] cursor-pointer">
              <div className="w-full aspect-square rounded-md bg-slate-300" />
              <div className="flex justify-center space-x-4 py-1 text-gray-700">
                <h3 className="font-medium">Galaxy S60</h3>
                <p className="text-sm font-semibold flex justify-center items-center">
                  $6
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
