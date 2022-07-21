import React from "react";
import "./proponites.css";
import nikos from "./nikos.jpg";

const Proponites = () => {
  return (
    <React.Fragment>
      <div className="body-proponites">
        <div class="person">
          <div class="person-badge">
            <img
              class="normal"
              src="http://tech.custom-media.com/pics/t1.png"
            />
            <img class="peculiar" src={nikos} />
          </div>
          <h3>Νίκος Μαρκάκης</h3>
          <strong>Πρόεδρος του Συλλόγου</strong>
          <div>
            Ο κύριος Μαρκάκης είναι παλαίμαχος αθλητής του συλλόγου στο μπάσκετ
            αλλά και στο ποδόσφαιρο. Έχει συνδέσει το όνομα του με τρόπαια τόσο
            ως προπονητής όσο και ως παίκτης.
          </div>
        </div>

        <div class="person">
          <div class="person-badge">
            <img
              class="normal"
              src="http://tech.custom-media.com/pics/joy1.png"
            />
            <img
              class="peculiar"
              src="http://tech.custom-media.com/pics/joy2.png"
            />
          </div>
          <h3>Γιάννης Λαμπρόπουλος</h3>
          <strong>Προπονητής Μπάσκετ</strong>
          <div>
            Ο πτυχιούχος προπονητής μπάσκετ Γιάννης τιμάει τα τελευταία 10
            χρόνια τον σύλλογο ως παίκτης αλλά και ως προπονητής.
          </div>
        </div>

        <div class="person">
          <div class="person-badge">
            <img
              class="normal"
              src="http://tech.custom-media.com/pics/i1.png"
            />
            <img
              class="peculiar"
              src="http://tech.custom-media.com/pics/i2.png"
            />
          </div>
          <h3>Αθανασία Περρή</h3>
          <strong>Προπονήτρια Βόλλει-Στίβου</strong>
          <div>
            Η πτυχιούχος προπονήτρια βόλλει και στίβου, βγαλμένη από τα σπλάχνα
            του συλλόγου.
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Proponites;
