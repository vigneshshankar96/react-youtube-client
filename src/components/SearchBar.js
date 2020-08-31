import React, { useState } from "react";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(term);
  };

  return (
    <div className="ui segment search-bar">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Video search</label>
          <input
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
