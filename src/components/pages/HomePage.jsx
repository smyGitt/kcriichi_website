import './HomePage.css';

export default function Hero() {
  return (
    <section className="welcome-wrapper">
      <div className="welcome-wrapper-background"></div>
      <div className="welcome-wrapper-content">
        <h1>Welcome to the Kansas City Riichi Mahjong Club.</h1>
        <p>We are a group that plays specifically Japanese (Riichi) Mahjong. 
            Whether you are a seasoned player or someone who wishes to learn more about the game, 
            we welcome all players to join us at our public meet-ups or through our socials.</p>
      </div>
    </section>
  );
}