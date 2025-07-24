import "./Dropdown.css";

export default function Dropdown({ title="Untitled", onClick, children }) {
    function onClickHandler() {

    }

    return(<div className="dropdown">
        <h2 onClick={()=>onClick}>{title}</h2>
        <div>
            {children}
        </div>
    </div>
    );
}