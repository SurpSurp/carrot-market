interface FloatedButtonProps {
  d: string;
}

const FloatedButton = ({ d }: FloatedButtonProps) => {
  return (
    <button className="fixed bottom-24 right-5 bg-orange-400 hover:bg-orange-500 transition-colors delay-75 rounded-full p-5 text-white font-medium shadow-lg">
      <svg
        className="h-6 w-6"
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
          d={d}
        />
      </svg>
    </button>
  );
};

export default FloatedButton;
