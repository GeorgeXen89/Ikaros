import React from "react";
import "./Accordion.css";
import paidiko2010 from "./fotospodosfairou/paidiko2010.jpg";
import antres2010 from "./fotospodosfairou/antres 2010.jpg";
import paidiko2006 from "./fotospodosfairou/paidiko2006.jpg";
import antres2011 from "./fotospodosfairou/antres 2011.jpg";
import antres2012 from "./fotospodosfairou/antres 2012.jpg";
import antres2005 from "./fotospodosfairou/antres 2005.jpg";
import antres200607 from "./fotospodosfairou/antres 2006-2007.jpg";
import antrescult from "./fotospodosfairou/antres cult.jpg";
import antrescult1 from "./fotospodosfairou/antres cult 1.jpg";
import antrescult2 from "./fotospodosfairou/antres cult2.jpg";

const Accordion = () => {
  return (
    <React.Fragment>
      <h1 class="main-title">Ιστορικές Φωτογραφίες του Συλλόγου μας</h1>

      <div class="container">
        <h3 class="title">Σεζόν 2010-2011</h3>
        <div class="content">
          <a target="_blank">
            <div class="content-overlay"></div>
            <img class="content-image" src={paidiko2010} />
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">Παιδικο Πρωτάθλημα σεζόν 2010-2011</h3>
              <p class="content-text">Αγώνας στο γήπεδο Ραχών</p>
            </div>
          </a>
        </div>
      </div>

      <div class="container">
        <h3 class="title">Σεζόν 2010-2011</h3>
        <div class="content">
          <a target="_blank">
            <div class="content-overlay"></div>
            <img class="content-image" src={antres2010} />
            <div class="content-details fadeIn-top">
              <h3>Ανδρικό Πρωτάθλημα σεζόν 2010-2011</h3>
              <p>Αγώνας στο γήπεδο Πυθαγορείου</p>
            </div>
          </a>
        </div>
      </div>

      <div class="container">
        <h3 class="title">Ιστορική Φωτογραφία</h3>
        <div class="content">
          <a target="_blank">
            <div class="content-overlay"></div>
            <img class="content-image" src={antrescult} />
            <div class="content-details fadeIn-left">
              <h3>Ιστορική Φωτογραφία</h3>
              <p>Φώτο από άγνωστο γήπεδο</p>
            </div>
          </a>
        </div>
      </div>

      <div class="container">
        <h3 class="title">Ιστορική Φωτογραφία</h3>
        <div class="content">
          <a target="_blank">
            <div class="content-overlay"></div>
            <img class="content-image" src={antrescult1} />
            <div class="content-details fadeIn-right">
              <h3>Ιστορική Φωτογραφία</h3>
              <p>Φώτο από άγνωστο γήπεδο</p>
            </div>
          </a>
        </div>
      </div>

      <div class="container">
        <h3 class="title">Σεζόν 2005-2006</h3>
        <div class="content">
          <a target="_blank">
            <div class="content-overlay"></div>
            <img class="content-image" src={paidiko2006} />
            <div class="content-details fadeIn-top fadeIn-left">
              <h3>Παιδικο Πρωτάθλημα σεζόν 2005-2006</h3>
              <p>Φώτο από το γήπεδο της πατέλας</p>
            </div>
          </a>
        </div>
      </div>

      <div class="container">
        <h3 class="title">Σεζόν 2011-2012</h3>
        <div class="content">
          <a target="_blank">
            <div class="content-overlay"></div>
            <img class="content-image" src={antres2012} />
            <div class="content-details fadeIn-top fadeIn-right">
              <h3>Ανδρικό Πρωτάθλημα σεζόν 2010-2011</h3>
              <p>Φώτο από το γήπεδο της πατέλας</p>
            </div>
          </a>
        </div>
      </div>

      <div class="container">
        <h3 class="title">Ιστορική Φωτογραφία</h3>
        <div class="content">
          <a target="_blank">
            <div class="content-overlay"></div>
            <img class="content-image" src={antrescult2} />
            <div class="content-details fadeIn-bottom fadeIn-left">
              <h3>Ιστορική Φωτογραφία</h3>
              <p>Φώτο από άγνωστο γήπεδο</p>
            </div>
          </a>
        </div>
      </div>

      <div class="container">
        <h3 class="title">Σεζόν 2004-2005</h3>
        <div class="content">
          <a target="_blank">
            <div class="content-overlay"></div>
            <img class="content-image" src={antres2005} />
            <div class="content-details fadeIn-bottom fadeIn-right">
              <h3>Ανδρικό Πρωτάθλημα σεζόν 2004-2005</h3>
              <p>Φώτο από το γήπεδο της πατέλας</p>
            </div>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Accordion;
