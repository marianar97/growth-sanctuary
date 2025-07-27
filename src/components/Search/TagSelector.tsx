export default function TagSelector({ onTagChange, tags }: { onTagChange: (tag: any) => void, tags: any[] }) {
  return (
    <div className="flex flex-row gap-2 flex-wrap mb-5 items-start justify-start ">
      {tags.map((tag) => (
        <div key={tag} onClick={() => onTagChange(tag)} className="cursor-pointer hover:bg-gray-100 rounded-full px-2 py-1 border border-gray-200 ">
          {tag}
        </div>
      ))}
    </div>
  );
}