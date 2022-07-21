import React from "react";
import "./basket.css";
import gynaikes2022 from "./283711477_514796300329641_6229791591251748138_n.jpg";
import antres2022 from "./basketantres2021-2022.jpg";
import neanides from "./neanidess2021-2022.jpg";

const Basketfotos = () => {
  return (
    <React.Fragment>
      <div className="basket-body">
        <h1 className="basket-titlos">Μπάσκετ, μια μεγάλη ιστορία</h1>
        <div className="container-basket">
          <div class="column">
            <img
              className="image-basket"
              src={gynaikes2022}
              alt="gynaikes2022"
            />
          </div>
          <div class="column">
            <img className="image-basket" src={antres2022} alt="antres2022" />
          </div>
          <div class="column">
            <img className="image-basket" src={neanides} alt="neanides" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Basketfotos;
