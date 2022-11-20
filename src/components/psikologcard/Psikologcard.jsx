import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Psikologcard.css";
import { Link } from "react-router-dom";
import { getPsikologs } from "../../redux/action/psikologAction";

function Psikologscard() {
  const dispatch = useDispatch();
  const { psikologs, isLoading } = useSelector((state) => state.psikolog);
  const { searchTerm, setSearchTerm } = useState("");

  useEffect(() => {
    dispatch(getPsikologs());
  }, []);

  return (
    <div>
      <div>
        <h4 className="text-help">
          Find your best psikolog here to ask your problem
        </h4>
        <input
          type="text"
          placeholder="Cari Psikolog..."
          onChange={(e) => searchTerm(e.target.value)}
          className="input-bar"
        />
      </div>
      <div className="cards-psikolog">
        {isLoading ? (
          <span>Loading...</span>
        ) : (
          psikologs.map((item) => (
            <div className="" key={item.id}>
              <div className="">
                <div className="card-psikolog">
                  <img src={item.img} className="card-img-top" alt="..." />
                  <div className="cardpsikolog-body">
                    <h5 className="card-title">{item.name}</h5>
                    <div className="rate">
                      <p className="card-text fas fa-star ">{item.rate}</p>
                    </div>
                    <Link
                      className="btn btn-primary"
                      to={`/psikolog/${item.id}`}
                    >
                      Detail
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Psikologscard;
