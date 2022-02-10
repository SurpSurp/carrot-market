import { NextPage } from "next";
import Link from "next/link";
import FloatedButton from "../../components/floated-button";
import Layout from "../../components/layout";
import StreamItem from "../../components/stream-item";

const Stream: NextPage = () => {
  return (
    <Layout isIndex={true} title="라이브">
      <div className="py-6 divide-y-2">
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <Link key={i} href={`/stream/${i}`}>
            <a>
              <StreamItem title="Let's try potatoes" />
            </a>
          </Link>
        ))}
        <Link href="/stream/create">
          <a>
            <FloatedButton d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </a>
        </Link>
      </div>
    </Layout>
  );
};

export default Stream;
