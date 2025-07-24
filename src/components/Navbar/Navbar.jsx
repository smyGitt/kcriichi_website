import { Link } from 'react-router-dom';
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className='navbar'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="resource">Resources</Link></li>
                <li><Link to="event">Events</Link></li>
                <li><Link to="about">About Us</Link></li>
                <li><Link to="contact">Contact Us</Link></li>
            </ul>
        </nav>
    );
}