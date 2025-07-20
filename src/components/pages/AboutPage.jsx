import mrpresident from "../../assets/mrpresident.png";
import "./AboutPage.css";

export default function AboutPage() {
    return (
        <>
            <div className="aboutpage">
                        <h1>About Us</h1>
                <div className="aboutpage-content">
                    <div className="aboutpage-image-wrapper">
                        <img src={mrpresident} alt="President Justin Nguyen" />
                        <p>President Justin Nguyen</p>
                    </div>
                    <div>
                        <h3>Founding and Scope</h3>
                        <p>Kansas City Riichi Mahjong Club was founded in March 2024 with the purpose of providing a community to
                            play Riichi Mahjong in the Kansas City area on both sides of the border. We welcome folks of all skill
                            levels to come socialize and play at our live meet-ups, or online through our Discord. We strive to
                            provide a fun and engaging atmosphere for both casual play as well as intermediate play. If you are a
                            complete beginner, do not fret as we always have people who are more than happy to teach.</p>
                        <h3>Mission Statement</h3>
                        <p>"To promote Riichi Mahjong as a fun "Mind Sport" by providing outreach, education, community, and a space
                            for players to grow their skills."</p>
                    </div>
                </div>
            </div>
        </>
    );
}