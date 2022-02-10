import { NextPage } from "next";
import Link from "next/link";
import ChatItem from "../../components/chat-item";
import Layout from "../../components/layout";

const Chats: NextPage = () => {
  return (
    <Layout isIndex={true} title="채팅">
      <div className=" py-6 divide-y">
        <Link href="/chats/3">
          <a>
            <ChatItem
              name="Steve Jebs"
              lastMsg=" See u tomorrow in the corner at 2pm!"
            />
          </a>
        </Link>
      </div>
    </Layout>
  );
};

export default Chats;
