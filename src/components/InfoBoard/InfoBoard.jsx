import "./InfoBoard.css"
import { Link } from "react-router-dom";
import testImg from '../../assets/gameboardclose.png';
import presidentImg from '../../assets/mrpresident.png';
import kcrmlogo from '../../assets/kcrmlogo.png';

// TODO: test if varying lengths affect the layout.
export default function InfoBoard(props) {

    function chooseDisplayStyling(boardType) {
        if (boardType === 'banner') {
            return {
                cardCount: 1,
                imgWrapperRow: 1,
                textWrapperRow: 1
            };
        }
        else {
            return {
                cardCount: 3,
                imgWrapperRow: 1,
                textWrapperRow: 2
            };
        }
    }

    const styling = chooseDisplayStyling(props.boardType);
    console.log(props.boardType);

    function InfoSingle({ styling, event_title, event_description_brief, event_thumbnail_src, event_page_address, event_date }) {
        return (
            <div className="infosingle">
                <Link to={event_page_address}>
                    <div className="infosingle-content-img-wrapper">
                        <img src={event_thumbnail_src} alt={event_title} />
                    </div>
                    <div className="infosingle-content-text-wrapper">
                        <div className="infosingle-content-text-date">
                            <p>{event_date}</p>
                        </div>
                        <h3>{event_title}</h3>
                        <p>{event_description_brief}</p>
                    </div>
                </Link>
            </div>
        );
    }

    // test inputs
    const sample_event = {
        event_title: 'this is a sample long title which is very long and should not fit in the text area',
        event_description_brief: 'This is a sample event that probably does not exist or failed to load the correct page for. Please update the website or not, does not matter.',
        event_thumbnail_src: testImg,
        event_page_address: 'sample-event',
        event_date: 'July 1, 2025'
    }
    const another_sample_event = {
        event_title: 'this is the second element with a bigger picture...but it fits in neatly!',
        event_description_brief: 'This is a sample event that probably does not exist or failed to load the correct page for. Please update the website or not, does not matter. Though, you probably should check the issue or ask someone else to do so.',
        event_thumbnail_src: kcrmlogo,
        event_page_address: 'second-sample-event',
        event_date: 'July 6, 2025'
    }
    const new_sample_event = {
        event_title: 'First Event!',
        event_description_brief: 'All developers are encoureaged to attend this amazing event! We have some fun things to play with, and none other. This would be a great time to discuss future plans, as well as go over our past mistakes.',
        event_thumbnail_src: presidentImg,
        event_page_address: 'major-event',
        event_date: 'July 32, 2025'
    }
    const sample_event_array = [sample_event, another_sample_event, new_sample_event, another_sample_event, sample_event, another_sample_event, sample_event, another_sample_event, sample_event];




    // TODO: sample_event_array should be replaced with props.contentDataArray when possible.
    return (
        <>
            <h1>{props.title}</h1>
            <div className="infoboard" style={{
                gridTemplateColumns: `repeat(${styling.cardCount}, 1fr)`
            }}>
                {sample_event_array.slice(0, styling.cardCount).map((singleData, index) => <InfoSingle styling key={index} {...singleData} />)}
            </div>
        </>
    );
}