import ResourceCard from "./ResourceCard";

const resources = [
    {
        id: '1',
        title: "Resource 1",
        description: "Description 1",
        image: "https://www.firecrawl.dev/og.png?123",
        url: "https://www.firecrawl.dev",
        tags: ["AI", "API", "LLM"],
    },
    {
        id: '2',
        title: "Resource 2",
        description: "Description 2",
        image: "https://www.firecrawl.dev/og.png?123",
        url: "https://www.firecrawl.dev",
        tags: ["AI", "API", "LLM"],
    },
]

export default function ResourceGrid() {
    return  (
        <div className="flex flex-row w-full gap-4">
            {resources.map((resource) => (
                <ResourceCard key={resource.id} {...resource} />
            ))}
        </div>
    )
}