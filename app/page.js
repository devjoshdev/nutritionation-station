"use client";
import FoodList from "@/components/FoodList";
import { useState } from "react";
const textStyle = {
  textAlign: "center",
  color: "green",
};

const elemStyle = {
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
};
export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [termToSet, setTermToSet] = useState("");
  const handleInputChange = (e) => setTermToSet(e.target.value);
  const handleEventForSearch = (e) => {if (e.key === "Enter") setSearchTerm(termToSet);}
  const handleClickSearch = (e) => {setSearchTerm(termToSet);}

  return (
    <div style={elemStyle}>
      <h1 style={textStyle}>The Nutritionation Lookup Station</h1>
      <p style={textStyle}>Search for foods and get results</p>
      <input placeholder="Start your search here" value={termToSet} onChange={handleInputChange} onKeyDown={handleEventForSearch}/>
      <button onClick={handleClickSearch}>Search</button>
      <div id="results">
        <FoodList searchTerm={searchTerm} />
      </div>
    </div>
  );
}
