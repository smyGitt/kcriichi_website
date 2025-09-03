import "./SocialMediaIcons.css";
import instagramLogo from '../../assets/instagram.png';
import discordLogo from '../../assets/discord.png';
import emailLogo from '../../assets/email.png';
import { Link } from 'react-router-dom';

export default function SocialMediaIcons({ noEmailIcon }) {
    if (noEmailIcon) {
        return (
            <>
                <div className='footer-social-icon-wrapper'>
                    <a href='https://www.instagram.com/kc_riichi/?hl=en' target="_blank" rel="noopener noreferrer">
                        <img src={instagramLogo} alt="Link to KCRM instagram" />
                    </a>
                    <a href='https://discord.gg/M8kxEfn' target="_blank" rel="noopener noreferrer">
                        <img src={discordLogo} alt='Link to KCRM Discord' />
                    </a>
                </div>
            </>
        );
    }
    return (
        <>
            <div className='footer-social-icon-wrapper'>
                <a href='https://www.instagram.com/kc_riichi/?hl=en' target="_blank" rel="noopener noreferrer">
                    <img src={instagramLogo} alt="Link to KCRM instagram" />
                </a>
                <a href='https://discord.gg/M8kxEfn' target="_blank" rel="noopener noreferrer">
                    <img src={discordLogo} alt='Link to KCRM Discord' />
                </a>
                <Link to='contact'>
                    <img src={emailLogo} alt='Link to Contact email' />
                </Link>
            </div>
        </>
    );
}