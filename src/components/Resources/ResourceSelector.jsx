import SearchBar from "../Search/SearchBar";
import Dropdown from "../Search/Dropdown";

export default function ResourceSelector() {
    return (
        <div className="w-full flex flex-row mb-5 items-center justify-between p-2 gap-4">
            <SearchBar/>
            <Dropdown/>
        </div>
    )
}