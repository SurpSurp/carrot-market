import type { NextPage } from "next";
import Link from "next/link";
import FloatedButton from "../components/floated-button";
import Layout from "../components/layout";
import ListItem from "../components/list-item";

const Home: NextPage = () => {
  return (
    <Layout title="Home" isIndex={true}>
      <div className="flex flex-col space-y-5 px-4 py-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_, i) => (
          <Link key={i} href={`/items/${i}`}>
            <a>
              <ListItem
                title="New iPhone 14"
                desc="black"
                price="95"
                likes={i + 1}
                comments={12 - i}
              />
            </a>
          </Link>
        ))}
        <Link href="/items/upload">
          <a>
            <FloatedButton d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </a>
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
