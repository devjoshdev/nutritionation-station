"use client";
import Food from "@/components/Food";
import { useEffect, useState } from "react";
import {BsArrowLeftCircleFill} from "react-icons/bs";
import {BsArrowRightCircleFill} from "react-icons/bs";
import {RxDividerVertical} from "react-icons/rx";
const cardStyle = {
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
    backgroundColor: '#ECE9D6',
    padding: '20px',
    width: '500px',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

  };

const iconStyle = {
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
};

const textStyle = {
    textAlign: "center",
};
const FoodList = ({searchTerm}) => {
    console.log("search term", searchTerm);
    const [totalPages, setTotalPages] = useState(0); 
    const [currentPage, setCurrentPage] = useState(1);
    const [foodData, setFoodData] = useState([]);
    const [dataToDisplay, setDataToDisplay] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const handleLeftArrowClick = () => {
        setCurrentPage(curr => curr - 1);
    }
    const handleRightArrowClick = () => {
        setCurrentPage(curr => curr + 1);
    }
    useEffect(() => {
        setDataToDisplay(foodData.slice((currentPage - 1) * 10, (currentPage - 1) * 10 + 10))
    }, [currentPage])
    useEffect(() => {
        setCurrentPage(1);
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
              const size = data.length;
              console.log("size", size);
              setFoodData(data);
              setDataToDisplay(data.slice(0, 10));
              setTotalPages((size / 10 === parseInt(size / 10)) ? size / 10 : parseInt(size / 10) + 1)
            }
            catch (err) {
              setDataToDisplay([]);
              setErrorMessage("There was a network error");
              setTimeout(() => {
                setErrorMessage("");
              }, 5000);
            }
        
          };
          performSearch();
    }, [searchTerm]);

    console.log(totalPages);
    return (
        <div style={cardStyle}>
            {errorMessage !== "" ? <h1 style={{color: "red",}}>{errorMessage}</h1> : ""}
            <p style={textStyle}>Page {currentPage} of {totalPages}</p>
            <div style={iconStyle}>
            {currentPage > 1 && <BsArrowLeftCircleFill style={{...iconStyle, cursor: "pointer"}} className="left-arrow" onClick={handleLeftArrowClick}/>}<RxDividerVertical style={iconStyle}/>{currentPage < totalPages && <BsArrowRightCircleFill style={{...iconStyle, cursor: "pointer"}} className="right-arrow" onClick={handleRightArrowClick}/>}
            </div>
            {dataToDisplay.map(food => <Food key={food.id} name={food.name} servings={food.servings} amount={food.amount}/>)}
            <div style={iconStyle}>
            {currentPage > 1 && <BsArrowLeftCircleFill style={{...iconStyle, cursor: "pointer"}} className="left-arrow" onClick={handleLeftArrowClick}/>}<RxDividerVertical style={iconStyle}/>{currentPage < totalPages && <BsArrowRightCircleFill style={{...iconStyle, cursor: "pointer"}} className="right-arrow" onClick={handleRightArrowClick}/>}
            </div>
            <p style={textStyle}>Page {currentPage} of {totalPages}</p>
        </div>
    );
};

export default FoodList;