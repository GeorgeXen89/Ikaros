import React from "react";
import "./ikaros_header.css";
import Sima from "./sima";
import Link from "../Link";

function Ikaros_header() {
  return (
    <nav class="navbar navbar-dark bg-primary">
      <div class="container-fluid">
        <span className="ikaros-leksi">ΙΚΑΡΟΣ</span>
        <span>
          <a href="https://www.facebook.com/%CE%A0%CE%91%CE%A3-%CE%8A%CE%BA%CE%B1%CF%81%CE%BF%CF%82-102523271556948/">
            <i className="fa fa-facebook-square"></i>
          </a>
        </span>
        <ul class="d-flex flex-row ">
          <li class="nav-item">
            <Link className="link-s" href="/home">
              Αρχική
            </Link>
          </li>
          <li class="nav-item">
            <Link className="link-s" href="/news">
              Νεα
            </Link>
          </li>
          <li class="nav-item">
            <Link className="link-s" href="/history">
              Ιστορία
            </Link>
          </li>
          <li class="nav-item">
            <Link className="link-s" href="/store">
              Τα Προιόντα μας!!
            </Link>
          </li>

          <li class="nav-item">
            <Link className="link-s" href="/fotos">
              Φωτογραφίες
            </Link>
          </li>
        </ul>

        <span class="d-flex justify-content-end">
          <Sima />
        </span>
      </div>
    </nav>
  );
}

export default Ikaros_header;
