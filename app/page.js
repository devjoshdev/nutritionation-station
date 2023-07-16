"use client";
import Food from "@/components/Food";
import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleInputChange = (e) => setSearchTerm(e.target.value);
  console.log("input is", searchTerm);
  return (
    <div>
      <h1>The Nutritionation Lookup Station</h1>
      <p>Search for foods and get results</p>
      <input placeholder="Start your search here" value={searchTerm} onChange={handleInputChange}/>
      <div id="results">
        <Food/>
      </div>
    </div>
  );
}
