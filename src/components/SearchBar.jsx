import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
  return (
    <article className="search-bar">
      <CiSearch className="search-icon" />
      <input
        type="text"
        name=""
        id=""
        className="search-field"
        placeholder={"Search"}
      />
    </article>
  );
}
