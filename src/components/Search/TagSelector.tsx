import { useState } from "react";

export default function TagSelector({ onTagChange, tags }: { onTagChange: (tag: any) => void, tags: any[] }) {
  const [selectedTag, setSelectedTag] = useState<any>(null);

  const handleTagClick = (tag: any) => {
    setSelectedTag(tag);
    onTagChange(tag);
  };

  return (
    <div className="flex flex-row gap-2 flex-wrap mb-5 items-start justify-start ">
      {tags.map((tag) => (
        <div 
          key={tag} 
          onClick={() => handleTagClick(tag)} 
          className={`cursor-pointer rounded-full px-2 py-1 border border-gray-200 transition-colors duration-200 ${
            selectedTag === tag 
              ? 'bg-purple-600 text-white border-purple-600' 
              : 'hover:bg-gray-100'
          }`}
        >
          {tag}
        </div>
      ))}
    </div>
  );
}