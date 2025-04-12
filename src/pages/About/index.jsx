import './styles.css';
import TimelineItem from '../../components/timeline';

const Home = () => {
    return (
      <>
      <div className='container'>
      <h1><span className='bluey'>About Me</span></h1>
      <TimelineItem
        image="/icons/cip.jpeg"
        title="Section Leader"
        name="Stanford University: Code in Place"
        description="Taught a part of Stanford's CS106A, a course on programming fundamentals with Python."
        time="Apr 2025 - Present"
      />
      <TimelineItem
        image="/icons/unimelb.png"
        title="Peer Mentor"
        name="University of Melbourne"
        description="Connected students with various resources, support networks, and opportunities across campus, ensuring their transition to university life was not only smooth but also enjoyable and rewarding."
        time="Feb 2025 - Apr 2025"
      />
        

    </div>
      </>
    
    );
  };
  
  export default Home;