import React from "react";
import gmm from "../../img/salah.jpg";
import { Link } from "react-router-dom";
import "./Salah.css";

const Salah = () => {
  return (
    <div className="wadah">
      <div className="wadah-gambar">
        <img src={gmm} className="gambar" alt="" />
      </div>
      <div className="isi">
        <h1 className="text-k">
          Ooops...Kamu tidak dapat mengakses halaman ini
        </h1>
        <p className="text-kecil">Silahkan Login terlebih dahulu</p>
        <div className="tombol">
          <Link
            to={"/login"}
            className="btn-back"
            style={{ textDecoration: "none" }}
          >
            Login
          </Link>
          <Link
            to={"/"}
            className="btn-back"
            style={{ textDecoration: "none" }}
          >
            Beranda
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Salah;
