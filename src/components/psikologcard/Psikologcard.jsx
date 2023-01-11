import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Psikologcard.css";
import { Link } from "react-router-dom";
import { getPsikologs } from "../../redux/action/psikologAction";
import Loading from "../Loading/Loading";
import { Rate } from "antd";
import "../searchInput/searchinput.css";



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
          <div className="">
            <Loading />
          </div>
        ) : (
          psikologs.map((item) => (
            <div className="" key={item._id}>
              <div className="">
                <div className="card-psikolog">
                  <img src={item.img} className="card-img-top" alt="..." />
                  <div className="cardpsikolog-body">
                    <h3 className="text-white">{item.nama}</h3>
                    <h5>Kota : {item.kota}</h5>
                    <div className="rate">
                      <Rate
                        defaultValue={item.rate}
                        count={item.rate}
                        allowHalf
                        style={{
                          color: "orange",
                          marginBottom: "10px",
                        }}
                        disabled
                      />
                    </div>
                    <h4 className="text-white">Rating : {item.rate}</h4>

                    <Link className="btn btn-primary" to={`/Gethelp/psikolog/${item._id}`}>
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
