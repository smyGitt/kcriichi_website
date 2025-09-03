import mrpresident from "../../../assets/mrpresident.png";
import "./AboutPage.css";

export default function AboutPage() {
    return (
        <>
            <h1>About Us</h1>
            <div id="about-us-page">
                <h1>Welcome to the Kansas City Riichi Mahjong Club!</h1>
                <p>We are a group that plays specifically Japanese (Riichi) Mahjong.
                    Whether you are a seasoned player or someone who wishes to learn more about the game,
                    we welcome all players to join us at our public meet-ups or through our socials.</p>
                <div id="mission-statement-image">
                    <div>
                        <h2>Founding and Scope</h2>
                        <p>Kansas City Riichi Mahjong Club was founded in March 2024 with the purpose of providing a community to
                            play Riichi Mahjong in the Kansas City area on both sides of the border. We welcome folks of all skill
                            levels to come socialize and play at our live meet-ups, or online through our Discord. We strive to
                            provide a fun and engaging atmosphere for both casual play as well as intermediate play. If you are a
                            complete beginner, do not fret as we always have people who are more than happy to teach.</p>
                        <h2>Mission Statement</h2>
                        <p>"To promote Riichi Mahjong as a fun "Mind Sport" by providing outreach, education, community, and a space
                            for players to grow their skills."</p>
                    </div>
                    <img src={mrpresident} alt="KCRM President Justin Nguyen" />
                </div>
            </div>
        </>
    );
}