import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Προιόντα της Ομάδας μας</h2>
      <p>
        Αγοράσε το αγαπημένο προιόν της ομάδας μας από μια πλούσια συλλογή!!
      </p>
      <p>
        Όλα τα προιόντα είναι υψηλής ποιότητας. Ευχαριστούμε για την
        υποστήριξη!!!
      </p>
    </section>
  );
};

export default MealsSummary;
