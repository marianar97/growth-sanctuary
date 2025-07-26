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
  {
    id: "4",
    title: "Think Fast, Talk Smart: Communication Techniques",
    description: "Stanford Communication technique conference from the book Think Fast, Talk Smart",
    image: "https://i.ytimg.com/vi/HAnw168huqA/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=HAnw168huqA&t=94s",
    tags: ["Personal Growth", "Communication"],
    type: "video",
  },
  {
    id: "5",
    title: "Speechify: Listen to any website",
    description: "Speechify reads website",
    image: "https://www.vidnoz.com/bimg/speechify-text-to-speech.jpg",
    url: "https://speechify.com/",
    tags: ["Productivity", "Neurodiversity"],
    type: "tool",
  },
  {
    id: "6",
    title: "Flow: types whatever you say",
    description: "Description 2",
    image: "https://store-images.s-microsoft.com/image/apps.40749.13908841991970612.40536875-f2f0-4bda-90ba-7f257692767b.e2e21593-028d-4a03-9030-a6a5cd48c229?h=307",
    url: "https://wisprflow.ai/",
    tags: ["Productivity", "Neurodiversity"],
    type: "tool",
  },
  {
    id: "7",
    title: "Burn Rate: Launching a Startup and Losing My Mind",
    description: "Andy Dunn - Burn Rate: Launching a Startup and Losing My Mind",
    image: "https://m.media-amazon.com/images/I/31-DRNx+rvL._SY445_SX342_ControlCacheEqualizer_.jpg",
    url: "https://nextbigideaclub.com/magazine/burn-rate-launching-startup-losing-mind-bookbite/34643/",
    tags: ["Startup", "Personal Growth"],
    type: "book",
  },
  {
    id: "8",
    title: "The Art of War",
    description: "The Art of War",
    image: "thepm.jpg",
    url: "https://www.youtube.com/watch?v=bdNJgUYeYPk&list=LL&index=3",
    tags: ["Personal Growth", "Programming"],
    type: "video",
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
