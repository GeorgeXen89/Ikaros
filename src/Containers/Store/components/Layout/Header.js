import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import Link from "../../../Link";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <Link href="/">
          <h1>Αρχική</h1>
        </Link>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
