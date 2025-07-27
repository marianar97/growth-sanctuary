import SearchBar from "../Search/SearchBar";
import Dropdown from "../Search/Dropdown";

export default function ResourceSelector({
  onTypeChange,
  onSearch,
}: {
  onTypeChange: (type: string) => void;
  onSearch: (search: string) => void;
}) {
  return (
    <div className="w-full flex flex-col md:flex-row mb-5 items-center justify-between p-0 md:p-2 gap-4">
      <SearchBar onSearch={onSearch} />
      <Dropdown onTypeChange={onTypeChange} />
    </div>
  );
}
