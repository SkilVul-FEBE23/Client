import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  removeSelectedPsikolog,
  selectedPsikolog,
} from "../redux/action/psikologAction";
import "./Detail.css";
import Loading1 from "../components/Loading/Loading1";
import { Rate } from "antd";

function Detail() {
  const psikologinfo = useSelector((state) => state.psikologinfo);
  const { psikologId } = useParams();
  const dispatch = useDispatch();

  const fetchPsikologDetail = async () => {
    const response = await axios
      .get(`https://6347c70edb76843976b1f3f8.mockapi.io/psikolog/${psikologId}`)
      .catch((err) => {
        console.log("Err", err);
      });

    dispatch(selectedPsikolog(response.data));
  };

  useEffect(() => {
    if (psikologId && psikologId !== "") fetchPsikologDetail();
    return () => {
      dispatch(removeSelectedPsikolog());
    };
  }, [psikologId]);

  return (
    <div>
      {Object.keys(psikologinfo).length === 0 ? (
        <div>
          <Loading1 />
        </div>
      ) : (
        <div className="detail-content">
          <div className="img-rate">
            <img src={psikologinfo.img} width="400px" alt="" id="img" />

            {/* <span className="fas fa-star" id="ratestar">
              {psikologinfo.rate}
            </span> */}
            <Rate
              defaultValue={psikologinfo.rate}
              count={10}
              allowHalf
              style={{ color: "orange" }}
              disabled
            />
          </div>

          <div className="text-button">
            <h1 id="title">{psikologinfo.name}</h1>
            <p id="description">{psikologinfo.overview}</p>

            <div className="list">
              <ul>
                <h4>Pengalaman : </h4>
                <li className="pengalaman-list">
                  Bekerja di rs selama 5 tahun
                </li>
              </ul>

              <ul>
                <h4>Pendidikan :</h4>
                <li className="pendidikan-list">S-2 Magister Psikolog UGM</li>
                <li className="pendidikan-list">S-1 Psikolog UGM</li>
              </ul>
            </div>

            <a
              href="https://wa.me/089637074190"
              id="btn-contact"
              target="_blank "
              rel="noreferr"
            >
              Contact Now
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
