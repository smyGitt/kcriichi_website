import { BrowserRouter, Link } from 'react-router-dom';

export default function Navbar() {
    return(
        <nav className='navbar'>
            <ol>
                <BrowserRouter>
                    <li><Link to="home/">Home</Link></li>
                    <li><Link to="home/">Tools</Link></li>
                    <li><Link to="home/">Members</Link></li>
                    <li><Link to="home/">Past Events</Link></li>
                    <li><Link to="home/">Contact us</Link></li>
                </BrowserRouter>
            </ol>
        </nav>
    );
}