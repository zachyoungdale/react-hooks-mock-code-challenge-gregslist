import React from "react";
import Search from "./Search";

function Header({ setSearch, search, searchListings }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search
        setSearch={setSearch}
        search={search}
        searchListings={searchListings}
      />
    </header>
  );
}

export default Header;
