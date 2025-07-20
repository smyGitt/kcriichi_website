import Navbar from './Navbar';
import './Header.css';

export default function Header() {
    return (
        <header className='App-header'>
            <div className='App-header-logo'>
                <img src="/kcrmlogo.png" alt="Kansas City Riichi Mahjong" />
                <p>Kansas City <strong>Riichi Mahjong</strong></p>
            </div>
            <div className='App-header-navbar'>
                <Navbar />
            </div>
        </header>
    );
}