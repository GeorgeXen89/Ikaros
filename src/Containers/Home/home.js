import React from "react";
import "./home.css";
import Proponites from "./proponites/proponites";

const Home = () => {
  return (
    <React.Fragment>
      <div class="row-home">
        <div class="column-akri">aristera</div>
        <div class="column-kentro">kentro</div>
        <div class="column-akri">
          <Proponites />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
