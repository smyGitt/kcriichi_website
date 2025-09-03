import "./Dropdown.css";
import { useState } from "react";

export default function Dropdown({ title = "Untitled", children }) {
    const [isDropped, setIsDropped] = useState(false);

    function onClickHandler() {
        if (isDropped) { setIsDropped(false); }
        else { setIsDropped(true); }
    }

    return (
        <div className="dropdown">
            <h2 onClick={onClickHandler}  style={isDropped ? {borderRadius: "1px 1px 0px 0px"} : {borderRadius: "1px 1px 1px 1px"}}>{title}</h2>
            {isDropped ? (
                <div className="dropdown-content">
                    {children}
                </div>
            ) : null}
        </div>
    );
}