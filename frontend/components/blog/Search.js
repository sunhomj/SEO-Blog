import Link from "next/link";
import renderHTML from "react-render-html";
import { useState, useEffect } from "react";
import { listSearch } from "../../actions/blog";

const Search = () => {
  const [values, setValues] = useState({
    search: undefined,
    results: [],
    searched: false,
    message: ""
  });

  const handleChange = e => {
    console.log(e);
  };

  const searchSubmit = e => {
    e.preventDefault();
  };

  const { search, results, searched, message } = values;

  const searchForm = () => (
    <form onSubmit={searchSubmit}>
      <div className="row">
        <div className="col-md-8">
          <input
            type="search"
            className="form-control"
            placeholder="Search blogs"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-4">
          <button className="btn btn-block btn-outline-primary" type="submit">
            Search
          </button>
        </div>
      </div>
    </form>
  );
  return (
    <div className="container-fluid">
      <div className="pt-3 pb-4">{searchForm()}</div>
    </div>
  );
};
export default Search;
