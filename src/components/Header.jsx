import Navbar from './Navbar';
import './Header.css';
import logo from '../assets/templogo.png'

export default function Header() {
    return (
        <header className='App-header'>
            <div className='App-header-logo'>
                <img src="/kcrmlogo.png" alt="Kansas City Riichi Mahjong" />
                <div className='App-header-name'>
                    <img src={logo} alt='KCRM logo'/>
                </div>
            </div>
            <div className='navbar'>
                <Navbar />
            </div>
        </header>
    );
}