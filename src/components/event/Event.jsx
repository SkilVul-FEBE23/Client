import React from "react";
import "./Event.css";
import gm1 from "../../img/edu.png";
import gm2 from "../../img/patner2.png";
import { Link } from "react-router-dom";

const Event = () => {
  return (
    <section className="events">
      <div className="title">
        <h1>Help and educate people</h1>
      </div>
      <div className="row">
        <div className="col">
          <img src={gm1} alt="" />
          <h4>Cari partner mu disini</h4>
          <p>
            Dengan adanya partner anda dapat bercerita tentang apa yang anda
            alami saat ini.
          </p>
          <Link
            to={"/Aksess"}
            className="ctn"
            style={{ textDecoration: "none" }}
          >
            {" "}
            Cari Partner{" "}
          </Link>
        </div>
        <div className="col">
          <img src={gm2} alt="" />
          <h4>Pemahaman bullying</h4>
          <p>
            Pelajari lebih mendalam tentang bullying dan dapatkan infomasi
            terbaru.
          </p>
          <Link
            to={"education"}
            className="ctn"
            style={{ textDecoration: "none" }}
          >
            {" "}
            Edukasi{" "}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Event;
