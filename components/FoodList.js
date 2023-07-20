"use client";
import Food from "@/components/Food";
import { useState } from "react";
import {BsArrowLeftCircleFill} from "react-icons/bs";
import {BsArrowRightCircleFill} from "react-icons/bs";
import {RxDividerVertical} from "react-icons/rx";
const cardStyle = {
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
    backgroundColor: '#ffffff',
    padding: '20px',
    width: '500px',
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
            <p>Page {currentPage} of {totalPages}</p>
            {currentPage > 1 && <BsArrowLeftCircleFill className="left-arrow" onClick={handleLeftArrowClick}/>}<RxDividerVertical/>{currentPage < totalPages && <BsArrowRightCircleFill className="right-arrow" onClick={handleRightArrowClick}/>}
            {dataToDisplay.map(food => <Food key={food.id} name={food.name} servings={food.servings} amount={food.amount}/>)}
        </div>
    );
};

export default FoodList;