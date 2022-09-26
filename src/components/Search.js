import React from "react";
import SearchIcon from "../assets/images/search.svg";
import Close from "../assets/images/close.svg";

const Search = ({ setQuery, query }) => {
  const handleOnClick = () => {
    setQuery("");
  };
  return (
    <div className="w-[297px] h-[48px] pl-[24px] bg-[#E4E7EE] rounded-lg flex items-center justify-between">
      <input
        placeholder="Search"
        onChange={(event) => setQuery(event.target.value)}
        value={query}
        className="bg-[#E4E7EE] w-[225px] text-base font-normal placeholder:text-base placeholder:text-black focus:outline-none"
      />
      {query ? (
        <div className="pr-[24px]" onClick={handleOnClick}>
          <img src={Close} alt="icon" />
        </div>
      ) : (
        <div className="pr-[24px]">
          <img src={SearchIcon} alt="icon" />
        </div>
      )}
    </div>
  );
};

export default Search;
