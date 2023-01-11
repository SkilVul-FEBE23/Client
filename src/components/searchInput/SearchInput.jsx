import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchPsikologs, filterPsikologs } from "../../redux/action/psikologAction";
import { getPsikologs } from "../../redux/action/psikologAction";
import "../searchInput/searchinput.css";
import searchimg from "../../img/search.png";
import axios from "axios";


function SearchInput() {
  const handleSubmit = (e) => {
    e.prevenDefault();
  };

  let dispatch = useDispatch();

  const searchPsikolog = () => {
    dispatch(searchPsikologs(searchValue.current.value));
  };

  const filterPsikolog = () =>   {
    dispatch(filterPsikologs(filterValue.current.value));
  };

  const searchValue = useRef();
  const filterValue = useRef();

  return (
    <div>
      <h4 className="text-help">
        Temukan psikolog terbaik disini sesuai dengan bidangnya untuk <br />  solusi
        masalah Anda yang tepat
      </h4>

      <div className="search-input">
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

        {/* <form class="dropdown" onSubmit={handleSubmit}>
          <button class="btn btn-outline-success btn-lg dropdown-toggle" type="submit" data-bs-toggle="dropdown" aria-expanded="false">
            Lokasi Partner
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" onClick={filterPsikolog} value="surabaya" ref={filterValue} >Surabaya</a></li>
            <li><a class="dropdown-item" onClick={filterPsikolog}  ref={filterValue}>Jember</a></li>
            <li><a class="dropdown-item" onClick={filterPsikolog}  ref={filterValue}>Bandung</a></li>
          </ul>
        </form> */}

      </div>

    </div>
  );
}

export default SearchInput;
