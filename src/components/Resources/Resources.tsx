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
    title: "Peter Thiel: Zero to One",
    description: "Startup advice from Peter Thiel",
    image: "https://m.media-amazon.com/images/I/51zGCdRQXOL._SL1200_.jpg",
    url: "https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296",
    tags: ["Entrepreneurship", "Startup"],
    type: "book",
  },
  {
    id: "3",
    title: "The power of habit",
    description: "Description 2",
    image: "https://m.media-amazon.com/images/I/71eoUH2EngL._SY522_.jpg",
    url: "https://www.amazon.com/gp/product/1400069289/",
    tags: ["Productivity", "Habits"],
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
