import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Κασκόλ",
    description: "Κασκόλ με την Ονομασία Ίκαρος",
    price: 10,
  },
  {
    id: "m2",
    name: "Μπλουζάκι",
    description: "Μπλουζάκι αμάνικο με το σήμα της Ομάδας",
    price: 8,
  },
  {
    id: "m3",
    name: "Ολόσωμη Φόρμα",
    description: "",
    price: 30,
  },
  {
    id: "m4",
    name: "Καπέλο",
    description: "Καπέλο Ίκαρος",
    price: 10,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
