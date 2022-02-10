import type { NextPage } from "next";
import Link from "next/link";
import CommunityItem from "../../components/community-item";
import FloatedButton from "../../components/floated-button";
import Layout from "../../components/layout";

const Community: NextPage = () => {
  return (
    <Layout isIndex={true} title="동네생활">
      <div className="py-6 px-4 space-y-3">
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <Link key={i} href={`/community/${i}`}>
            <a>
              <CommunityItem
                title="What is
          the best mandu restaurant?"
                author="니꼬"
                timeAfter={18}
                likes={i + 1}
                comments={12 - i}
              />
            </a>
          </Link>
        ))}
        <Link href="/community/write">
          <a>
            <FloatedButton d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </a>
        </Link>
      </div>
    </Layout>
  );
};

export default Community;
