"use client";

import { useState } from "react";
import { FaMinus } from "react-icons/fa";
import { BiExpand } from "react-icons/bi";
import { BiCollapse } from "react-icons/bi";

const cardStyle = {
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
    backgroundColor: '#ffffff',
    padding: '20px',
    width: '300px',
  };

const expandContractStyle = {
    float: 'right',
    cursor: 'pointer'
};

const computeCals = (gramWeight, calsPer100) => ((gramWeight * calsPer100) / (100));

const Food = (props) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <div style={cardStyle}>
            <div>
                <p>{props.name}</p>
                {!expanded && <BiExpand style={expandContractStyle} onClick={() => {setExpanded(e => !e)}}/>}
            </div>
                {expanded &&
                    <div>
                        <p>Servings</p>
                        {props.servings.map((serving, idx) => <p key={idx}>{serving.modifier}&nbsp;&nbsp;&nbsp;<FaMinus/><FaMinus/><FaMinus/>&nbsp;&nbsp;{computeCals(serving.gram_weight, props.amount)}</p>)}
                        <BiCollapse style={expandContractStyle} onClick={() => {setExpanded(e => !e)}}/>
                    </div>
                }
        </div>
    );
}

export default Food;