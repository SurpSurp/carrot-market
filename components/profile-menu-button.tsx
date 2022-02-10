interface ProfileMenuButtonProps {
  title: string;
  d: string;
}

const ProfileMenuButton = ({ title, d }: ProfileMenuButtonProps) => {
  return (
    <div className=" flex flex-col items-center cursor-pointer group">
      <div className="w-14 aspect-square flex items-center justify-center text-white rounded-full bg-orange-400 group-hover:bg-orange-500">
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
            d={d}
          ></path>
        </svg>
      </div>
      <span className="text-sm font-medium text-gray-700 mt-1">{title}</span>
    </div>
  );
};

export default ProfileMenuButton;
