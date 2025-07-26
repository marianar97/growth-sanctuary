import ResourceSelector from "./ResourceSelector";
import ResourceGrid from "./ResourceGrid";

export default function Resources() {   
    return (
        <div className="flex flex-col w-full md:w-[90%] border-solid border-2 border-gray-200 rounded-lg p-4 items-center justify-center">
            <ResourceSelector/>
            <ResourceGrid/>
        </div>
    )
}