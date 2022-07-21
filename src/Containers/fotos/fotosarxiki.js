import React from "react";
import "./fotosarxiki.css";
import stivos from "./fotosstivos/stivos2021.jpg";
import basket from "./fotosmpasket/basketantres2021-2022.jpg";
import podosfairo from "./fotospodosfairou/antres 2010.jpg";
import Link from "../Link";

const Fotosarxiki = () => {
  return (
    <React.Fragment>
      <div class="container-arxiki-eikones">
        <img src={basket} className="eikona" />
        <button className="btneikones">
          <Link href="/fotos/basket" className="link-s">
            Μπάσκετ
          </Link>
        </button>
      </div>
      <div class="container-arxiki-eikones">
        <img src={stivos} className="eikona" />
        <button className="btneikones">
          <Link href="/fotos/stivos" className="link-s">
            Στίβος
          </Link>
        </button>
      </div>
      <div class="container-arxiki-eikones">
        <img src={podosfairo} className="eikona" />

        <button className="btneikones">
          <Link href="/fotos/podosfairo" className="link-s">
            Ποδόσφαιρο{" "}
          </Link>
        </button>
      </div>
    </React.Fragment>
  );
};

export default Fotosarxiki;
