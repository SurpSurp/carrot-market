interface ChatItemProps {
  name: string;
  lastMsg?: string;
  avatar?: string;
}

const ChatItem = ({ name, lastMsg }: ChatItemProps) => {
  return (
    <div className="flex items-center py-3 space-x-3 px-4">
      <div className="w-12 aspect-square rounded-full bg-slate-300" />
      <div className="flex flex-col">
        <span className=" text-gray-800">{name}</span>
        <span className="text-sm text-gray-500 cursor-pointer">{lastMsg}</span>
      </div>
    </div>
  );
};

export default ChatItem;
