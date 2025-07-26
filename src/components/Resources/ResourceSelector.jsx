import SearchBar from "../Search/SearchBar";
import Dropdown from "../Search/Dropdown";

export default function ResourceSelector() {
    return (
        <div className="w-full flex flex-row items-center justify-between gap-4">
            <SearchBar/>
            <Dropdown/>
        </div>
    )
}