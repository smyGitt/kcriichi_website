import "./InfoBoard.css";
import testImg from '../assets/gameboardclose.png'

// TODO: test if varying lengths affect the layout.
export default function InfoBoard( props ) {
    function InfoSingle() {
        return(
            <div className="infosingle">
                <div className="infosingle-content">
                    <img src={testImg}/>
                    <h3>Test meeting</h3>
                    <p>This is a description of a very fun event or some
                        very serious, strategic meeting.</p>
                </div>
            </div>
        );
    }
 // TODO: Props should also include ROUTE address
    return (
        <div className="infoboard">
            <InfoSingle />
            <InfoSingle />
            <InfoSingle />
            <InfoSingle />
        </div>
    );
}