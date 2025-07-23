import "./InfoBoard.css";
import { Link } from "react-router-dom";
import testImg from '../assets/gameboardclose.png'

// TODO: test if varying lengths affect the layout.
export default function InfoBoard({ event_title, event_description_brief, event_thumbnail_src, event_page_address }) {

    function InfoSingle() {
        return (
            <Link to={event_page_address}>
                <div className="infosingle">
                    <div className="infosingle-content">
                        <img src={event_thumbnail_src} alt={event_title} />
                        <h3>{event_title}</h3>
                        <p>{event_description_brief}</p>
                    </div>
                </div>
            </Link>
        );
    }

    // TODO: Props should also include ROUTE address
    return (
        <div className="infoboard">
            <InfoSingle />
            <InfoSingle />
        </div>
    );
}