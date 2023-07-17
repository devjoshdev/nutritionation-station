"use client";
import Food from "@/components/Food.js";
import { useEffect, useState } from "react";
const servingsData = [{id: 1, desc: "1 cube", cals: 28}, {id: 2, desc: "1 block", cals: 558}];
export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [foodData, setFoodData] = useState([]);
  const handleInputChange = (e) => setSearchTerm(e.target.value);
  useEffect(() => {
    if (searchTerm === "" || searchTerm.length < 2) return;
    async function grabFoods() {
      const results = await fetch(`api/food/${searchTerm}`, {cache: 'no-store'});
      const data = await results.json();
      setFoodData(data);
    }
    grabFoods();
  }, [searchTerm]);
  console.log(foodData);
  return (
    <div>
      <h1>The Nutritionation Lookup Station</h1>
      <p>Search for foods and get results</p>
      <input placeholder="Start your search here" value={searchTerm} onChange={handleInputChange}/>
      <div id="results">
        <Food name="Cheese" servings={servingsData} calsPer={100}/>
      </div>
    </div>
  );
}
