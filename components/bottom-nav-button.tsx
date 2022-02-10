import Link from "next/link";
import { ClassName } from "../libs/utils";

interface NavButtonProps {
  title: string;
  d: string;
  route: string;
  onPage: boolean;
}

const NavButton = ({ title, d, route, onPage }: NavButtonProps) => {
  return (
    <Link href={`${route}`}>
      <a>
        <button
          className={ClassName(
            onPage ? "text-orange-400 font-semibold" : "",
            "flex flex-col items-center justify-center space-y-1 focus:outline-none hover:text-orange-400"
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={d}
            />
          </svg>
          <span className="text-sm">{title}</span>
        </button>
      </a>
    </Link>
  );
};

export default NavButton;
