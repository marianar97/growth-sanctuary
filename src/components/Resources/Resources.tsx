import ResourceSelector from "./ResourceSelector";
import ResourceGrid from "./ResourceGrid";

export default function Resources() {   
    return (
        <div className="flex flex-col w-[90%] md:w-[90%]border-gray-200 rounded-lg p-1 items-center justify-center">
            <ResourceSelector/>
            <ResourceGrid/>
        </div>
    )
}