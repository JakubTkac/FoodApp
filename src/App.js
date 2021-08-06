import Header from "./components/Header/Header";
import Description from "./components/Description/Description";
import Items from "./components/Items/Items";

const items = [
  {
    name: "Sushi",
    description: "Finest Fish and veggies",
    price: 22.99,
    id: 1,
  },
  {
    name: "Schnitzel",
    description: "A german",
    price: 16.99,
    id: 2,
  },
  {
    name: "Burger",
    description: "meat",
    price: 2.99,
    id: 3,
  },
  {
    name: "Soup",
    description: "Just like water",
    price: 30.99,
    id: 4,
  },
];

function App() {
  return (
    <>
      <Header />
      <Description />
      <Items items={items} />
    </>
  );
}

export default App;
