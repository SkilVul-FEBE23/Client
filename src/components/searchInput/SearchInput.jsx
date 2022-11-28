import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { searchPsikologs } from "../../redux/action/psikologAction";
import "../searchInput/searchinput.css";
import searchimg from "../../img/search.png";

function SearchInput() {
  const handleSubmit = (e) => {
    e.prevenDefault();
  };

  let dispatch = useDispatch();
  const searchPsikolog = () => {
    dispatch(searchPsikologs(searchValue.current.value));
  };

  const searchValue = useRef();

  return (
    <div className="search-input">
      <h4 className="text-help">
        Temukan psikolog terbaik disini sesuai dengan bidangnya untuk solusi
        masalah Anda yang tepat
      </h4>

      <form onSubmit={handleSubmit} className="form-input">
        <img src={searchimg} alt="" />

        <input
          type="text"
          placeholder="Cari Psikolog..."
          ref={searchValue}
          onChange={searchPsikolog}
          className="input-bar"
        />
      </form>
    </div>
  );
}

export default SearchInput;
