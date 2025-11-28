import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./Components/CoffeeCard";
import { useState } from "react";

function App() {
  const coffees = useLoaderData();
  const [coffee, setCoffee] = useState(coffees);

  return (
    <>
      <div className="m-20">
        <h1 className="font-bold text-5xl text-center my-5">Hot Hot cold coffee :{coffees.length} </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {
          coffees.map((coffeeItem) => (
            <CoffeeCard key={coffeeItem._id} coffee={coffeeItem}
            allCoffees={coffee}
            setCoffee={setCoffee}></CoffeeCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
