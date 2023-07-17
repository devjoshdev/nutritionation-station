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
const Food = (props) => {
    const [expanded, setExpanded] = useState(true);
    return (
        <div style={cardStyle}>
            <div>
                <p>{props.name}</p>
                {!expanded && <BiExpand style={expandContractStyle} onClick={() => {setExpanded(e => !e)}}/>}
            </div>
                {expanded &&
                    <div>
                        <p>Servings</p>
                        {props.servings.map(serving => <p key={serving.id}>{serving.desc}&nbsp;&nbsp;&nbsp;<FaMinus/><FaMinus/><FaMinus/>&nbsp;&nbsp;{serving.cals}</p>)}
                        <BiCollapse style={expandContractStyle} onClick={() => {setExpanded(e => !e)}}/>
                    </div>
                }
        </div>
    );
}

export default Food;