import './Footer.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import instagramLogo from '../../assets/instagram.png'
import discordLogo from '../../assets/discord.png'
import emailLogo from '../../assets/email.png'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer-upper-wrapper'>
                <div className='footer-logo-wrapper'>
                    <img className='footer-logo-logo' src='/kcrmlogo.png' alt='Kansas City Riichi Mahjong Club Logo' />
                    <img className='footer-logo-text' src='/templogo.png' alt='Kansas City Riichi Mahjong Club Logo Text' />
                </div>
                <Navbar className='navbar' />
            </div>
            <div className='footer-lower-half'>
                <div className='footer-mission-statement'>
                    <h3>Our Mission</h3>
                    <p>We are a group that plays specifically Japanese (Riichi) Mahjong. Whether you are a seasoned player or someone who wishes to learn more about the game, we welcome all players to join us at our public meet-ups or through our socials.</p>
                </div>
                <div className='footer-social'>
                    <h3>Reach out to us!</h3>
                    <div className='footer-social-icon-wrapper'>
                    <a href='https://www.instagram.com/kc_riichi/?hl=en'>
                        <img src={instagramLogo} alt="Link to KCRM instagram" />
                    </a>
                    <a href='https://discord.gg/M8kxEfn'>
                        <img src={discordLogo} alt='Link to KCRM Discord'/>
                    </a>
                    <Link to='contact'>
                        <img src={emailLogo} alt='Link to Contact email'/>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}