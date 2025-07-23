import Navbar from './Navbar';
import './Header.css';

export default function Header() {
    return (
        <header className='App-header'>
            <div className='App-header-logo'>
                <img src="/kcrmlogo.png" alt="Kansas City Riichi Mahjong" />
                <div className='App-header-name'>
                    <img src='templogo.png' alt='KCRM logo'/>
                </div>
            </div>
            <div className='navbar'>
                <Navbar />
            </div>
        </header>
    );
}