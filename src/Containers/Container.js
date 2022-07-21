import React from "react";
import Ikaros_header from "./header/ikaros_header";
import "./Container.css";
import Footer from "./Footer/Footer";
import Route from "./Route";
import Store from "./Store/Store";
import Accordion from "./fotos/Accordion";
import History from "./History/history";
import Basketfotos from "./fotos/fotosmpasket/basket";
import Fotosarxiki from "./fotos/fotosarxiki";
import Fotosstivos from "./fotos/fotosstivos/stivos";
import Home from "./Home/home";
import News from "./News/news";

function Container() {
  return (
    <div>
      <Ikaros_header />
      <div>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/history">
          <History />
        </Route>
        <Route path="/store">
          <Store />
        </Route>
        <Route path="/fotos">
          <Fotosarxiki />
        </Route>
        <Route path="/fotos/podosfairo">
          <Accordion />
        </Route>
        <Route path="/fotos/basket">
          <Basketfotos />
        </Route>
        <Route path="/fotos/stivos">
          <Fotosstivos />
        </Route>
      </div>
      <Footer />
    </div>
  );
}
export default Container;
