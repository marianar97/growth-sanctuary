import ResourceCard from "./ResourceCard";



export default function ResourceGrid({ resources }: { resources: any[] }) {
  return (

    <div className="flex flex-row w-full gap-3 flex-wrap pb-4 justify-between">
      {resources.map((resource) => (
        <ResourceCard key={resource.id} {...resource} />
      ))}
    </div>
  );
}
