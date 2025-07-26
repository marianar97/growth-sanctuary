import ResourceSelector from "./ResourceSelector";
import ResourceGrid from "./ResourceGrid";
import { useState } from "react";

// Default resources if none are provided
const defaultResources = [
  {
    id: "1",
    title: "Resource 1",
    description: "Description 1",
    image: "https://www.firecrawl.dev/og.png?123",
    url: "https://www.firecrawl.dev",
    tags: ["AI", "API", "LLM"],
    type: "video",
  },
  {
    id: "2",
    title: "Resource 3",
    description: "Description 2",
    image: "https://www.firecrawl.dev/og.png?123",
    url: "https://www.firecrawl.dev",
    tags: ["AI", "API", "LLM"],
    type: "article",
  },
  {
    id: "3",
    title: "Resource 4",
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
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [filteredResources, setFilteredResources] = useState(SampleResources);

  // Handle resource type change
  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    const filteredResources2 = SampleResources.filter((resource: any) => {
      if (!type) return true;
      return resource.type === type;
    });
    setFilteredResources(filteredResources2);
  };

  return (
    <div className="flex flex-col w-full md:w-[90%] border-gray-200 rounded-lg items-center ">
      <ResourceSelector onTypeChange={handleTypeChange} />
      <ResourceGrid resources={filteredResources} />
    </div>
  );
}
