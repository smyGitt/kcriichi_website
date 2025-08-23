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
            <h2 onClick={onClickHandler}>{title}</h2>
            {isDropped ? (
                <div className="dropdown-content">
                    {children}
                </div>
            ) : null}
        </div>
    );
}