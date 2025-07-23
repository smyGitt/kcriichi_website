import './HomePage.css';
import InfoBoard from '../InfoBoard';

export default function HomePage() {

  // TODO: Use props to alter each InfoBoard contents from database.
  return(
    <div>
      <InfoBoard 
        title="Upcoming Events" 
        width='100%' 
        height='26rem'
        cardCount='3'
        />
      <InfoBoard 
        title="Highlighted News" 
        width='100%' 
        height='26rem'
        cardCount='3'
        />
    </div>
  );
}