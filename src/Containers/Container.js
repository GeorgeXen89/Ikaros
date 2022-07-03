import React from "react";
import Ikaros_header from "./header/ikaros_header";
import Sima from "./header/sima";
import "./Container.css";

function Container() {
  return (
    <div class="container">
      <nav class="row" className="navbar">
        <div class="col">
          <Sima />
        </div>
        <div class="col">
          <Ikaros_header />
        </div>
      </nav>
      <div class="row">
        <div class="col">1 of 3</div>
        <div class="col">2 of 3</div>
        <div class="col">3 of 3</div>
      </div>
    </div>
  );
}
export default Container;
