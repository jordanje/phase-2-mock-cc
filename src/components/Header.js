import React from "react";
import Search from "./Search";
import Filter from "./Filter";

function Header({searchValue, handleSearchChange, handleSubmit}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchValue={searchValue} handleSearchChange={handleSearchChange} handleSubmit={handleSubmit}/>
    </header>
  );
}

export default Header;
