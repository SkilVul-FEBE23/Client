import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Psikologcard.css";
import { Link } from "react-router-dom";
import { getPsikologs } from "../../redux/action/psikologAction";
import Loading from "../Loading/Loading";

function Psikologscard() {
  const dispatch = useDispatch();
  const { psikologs, isLoading } = useSelector((state) => state.psikolog);

  useEffect(() => {
    dispatch(getPsikologs());
  }, []);

  return (
    <div>
      <div className="cards-psikolog">
        {isLoading ? (
          <div>
            <Loading />
          </div>
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
                    <Link className="btn" to={`/psikolog/${item.id}`}>
                      Lihat Detail
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
