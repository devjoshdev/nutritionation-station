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
  const [foodData, setFoodData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const handleInputChange = (e) => setSearchTerm(e.target.value);
  const handleKeyPressForSearch = (e) => {if (e.key === "Enter") performSearch();}
  const performSearch = async () => {
    console.log("search term is", searchTerm, `api/food/${searchTerm}`);
    if (searchTerm.length < 3) return;
    try {
      const results = await fetch(`api/food/${searchTerm}`, {cache: 'no-store',});
      if (!results.ok) {
        setErrorMessage("Something went wrong! Try again when this message disappears");
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
      }
      const data = await results.json();
      setFoodData(data);
    }
    catch (err) {
      setFoodData([]);
      setErrorMessage("There was a network error");
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }

  };

  console.log(foodData);
  return (
    <div style={elemStyle}>
      {errorMessage !== "" ? <h1 style={{color: "red",}}>{errorMessage}</h1> : ""}
      <h1 style={textStyle}>The Nutritionation Lookup Station</h1>
      <p style={textStyle}>Search for foods and get results</p>
      <input placeholder="Start your search here" value={searchTerm} onChange={handleInputChange} onKeyDown={handleKeyPressForSearch}/>
      <button onClick={performSearch}>Search</button>
      <div id="results">
        <FoodList foods={foodData}/>
      </div>
    </div>
  );
}
