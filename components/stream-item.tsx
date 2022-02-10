interface StreamItemProps {
  title: string;
}

const StreamItem = ({ title }: StreamItemProps) => {
  return (
    <div className="px-4 py-4">
      <div className="w-full aspect-video rounded-md bg-slate-300" />
      <h3 className="text-lg text-gray-700 mt-1.5">{title}</h3>
    </div>
  );
};

export default StreamItem;
