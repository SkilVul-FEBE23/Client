import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  removeSelectedPsikolog,
  selectedPsikolog,
} from "../redux/action/psikologAction";
import "./Detail.css";

function Detail() {
  const psikologinfo = useSelector((state) => state.psikologinfo);
  const { psikologId } = useParams();
  const dispatch = useDispatch();
  console.log(psikologinfo);

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
      <h4 className="detail-text">
        Get to know more about our psikolog here and if you feel confident with
        us you can contact us there !{" "}
      </h4>

      <div className="detail-content">
        <div className="img-rate">
          <img src={psikologinfo.img} width="400px" alt="" id="img" />

          <span className="fas fa-star" id="ratestar">
            {psikologinfo.rate}
          </span>
        </div>

        <div className="text-button">
          <h1 id="title">{psikologinfo.name}</h1>
          <p id="description">{psikologinfo.overview}</p>
          <a
            href="https://wa.me/089637074190"
            id="btn-contact"
            target="_blank "
            rel="noreferr"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Detail;
