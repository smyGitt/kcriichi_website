import "./ContactPage.css";
import SocialMediaIcons from "../../SocialMediaIcons/SocialMediaIcons";

export default function ContactPage() {
    return (
        <div className="contact-page">
            <div id="contact-header">
                <h1>Contact Us!</h1>
                <SocialMediaIcons noEmailIcon={true} />
            </div>
            <form>
                <div className="info-name-email">
                    <input
                        name="name"
                        id="name"
                        type="text"
                        placeholder="Name"
                        required />
                    <input
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Email"
                        required />
                </div>
                <div className="info-text">
                    <textarea
                        name="text"
                        id="text"
                        className="contact-textbox"
                        placeholder="Write to us!"
                        rows="15"
                        required />
                </div>
                <div className="contact-send-form-btn">
                    <input type="submit" value="Send" />
                </div>
            </form>
        </div>
    )
}