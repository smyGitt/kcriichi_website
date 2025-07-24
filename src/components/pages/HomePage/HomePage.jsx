import './HomePage.css';
import InfoBoard from '../../InfoBoard/InfoBoard';

export default function HomePage() {

  // TODO: Use props to alter each InfoBoard contents from database.
  return(
    <div>
      <InfoBoard 
        title="Upcoming Events" 
        boardType='multicard'
        />
      <InfoBoard 
        title="Highlighted News" 
        boardType='multiCard'
        />
    </div>
  );
}