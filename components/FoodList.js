"use client";
import Food from "@/components/Food";
import { useState } from "react";
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
const FoodList = ({foods}) => {
    const size = foods.length;
    const totalPages = (size / 10 === parseInt(size / 10)) ? size / 10 : parseInt(size / 10) + 1;
    const [currentPage, setCurrentPage] = useState(1);
    const start = currentPage * 10 - 1;
    const dataToDisplay = foods.slice(start, start+10);
    const handleLeftArrowClick = () => setCurrentPage(curr => curr - 1);
    const handleRightArrowClick = () => setCurrentPage(curr => curr + 1);
    console.log(totalPages);
    return (
        <div style={cardStyle}>
            <p style={textStyle}>Page {currentPage} of {totalPages}</p>
            <div style={iconStyle}>
            {currentPage > 1 && <BsArrowLeftCircleFill style={iconStyle} className="left-arrow" onClick={handleLeftArrowClick}/>}<RxDividerVertical style={iconStyle}/>{currentPage < totalPages && <BsArrowRightCircleFill style={iconStyle} className="right-arrow" onClick={handleRightArrowClick}/>}
            </div>
            {dataToDisplay.map(food => <Food key={food.id} name={food.name} servings={food.servings} amount={food.amount}/>)}
            <div style={iconStyle}>
            {currentPage > 1 && <BsArrowLeftCircleFill style={iconStyle} className="left-arrow" onClick={handleLeftArrowClick}/>}<RxDividerVertical style={iconStyle}/>{currentPage < totalPages && <BsArrowRightCircleFill style={iconStyle} className="right-arrow" onClick={handleRightArrowClick}/>}
            </div>
            <p style={textStyle}>Page {currentPage} of {totalPages}</p>
        </div>
    );
};

export default FoodList;