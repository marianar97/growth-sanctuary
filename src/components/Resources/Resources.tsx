import ResourceSelector from "./ResourceSelector";
import ResourceGrid from "./ResourceGrid";
import { useState } from "react";

// Default resources if none are provided
const defaultResources = [
  {
    id: "1",
    title: "Churchill's Speech: We shall fight on the beaches",
    description:
      "Churchill's Speech: We shall fight on the beaches, we shall never surrender",
    image: "https://www.hollywoodreporter.com/wp-content/uploads/2018/01/4106_d049_00189_r_crop_-_h_2017.jpg",
    url: "https://www.youtube.com/watch?v=CXIrnU7Y_RU",
    tags: ["History", "Growth", "Determination"],
    type: "video",
  },
  {
    id: "2",
    title: "How to Make friends and influence people Article",
    description: "Description 2",
    image: "https://www.firecrawl.dev/og.png?123",
    url: "https://www.firecrawl.dev",
    tags: ["AI", "API", "LLM"],
    type: "article",
  },
  {
    id: "3",
    title: "The Art of War",
    description: "Description 2",
    image: "https://www.firecrawl.dev/og.png?123",
    url: "https://www.firecrawl.dev",
    tags: ["AI", "API", "LLM"],
    type: "book",
  },
];

export default function Resources({
  SampleResources = defaultResources,
}: {
  SampleResources?: any[];
}) {
  const [filteredResources, setFilteredResources] = useState(SampleResources);

  // Handle resource type change
  const handleTypeChange = (type: string) => {
    const tmpResources = SampleResources.filter((resource: any) => {
      if (!type) return true;
      return resource.type === type;
    });
    setFilteredResources(tmpResources);
  };
  const handleSearch = (search: string) => {
    const tmpResources = SampleResources.filter((resource: any) => {
      if (!search || search === "") return true;
      return resource.title.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredResources(tmpResources);
  };

  return (
    <div className="flex flex-col w-full md:w-[90%] border-gray-200 rounded-lg items-center ">
      <ResourceSelector
        onTypeChange={handleTypeChange}
        onSearch={handleSearch}
      />
      <ResourceGrid resources={filteredResources} />
    </div>
  );
}
