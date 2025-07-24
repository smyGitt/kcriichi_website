import "./ResourcePage.css"
import ResourceLinks from "./resourceLinks.js"
import Dropdown from "../../Dropdown/Dropdown.jsx";
import { useState } from "react"

export default function ResourcePage() {
    
    const [isDropped,setIsDropped] = useState([false,false,false]);
    function onClickHandler() {

    }


    return(
        <div>
            <Dropdown title="General Resources" ></Dropdown>
            <Dropdown title="Intermediate ~ Advanced Resources" ></Dropdown>
            <Dropdown title="Calculator/Tool/Trainers" ></Dropdown>
        </div>
    );
}