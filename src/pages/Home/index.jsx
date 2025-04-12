import './styles.css';

const Home = () => {
    return (
    <div className='container'>
      <h1 className='header'>Hi, I'm <span className='name'>Nirav</span></h1>
      <p>Data Science@UniMelb | Machine Learning Enthusiast </p>  
      
      <div className='boxed'>
        <p className='text'>
        Born in <a href='https://ntb.gov.np' TARGET = "_blank"className='highlight'>Kathmandu</a>. Based in <a TARGET = "_blank"href='https://www.visitmelbourne.com/regions/melbourne' className='highlight'>Melbourne</a>.
        </p>
      <p className='text'>
        I love programming in Python. I'm currently pursuing a Bachelor of Science at <a TARGET = "_blank"href='https://www.unimelb.edu.au' className='highlight'>The University of Melbourne</a>, majoring in Data Science. 
      </p>
      <p className='text'>
      I love climbing on giant plastic rocks, and listening to classical performances. If the sun is harsh, I stay inside, play the piano, cook, program and read. If it isn't, I run. 
      </p>
      <p className='text'> Recent Obsession: Origami</p>

      <img className="image" src='images/headshot.jpg' alt='person'/>
      </div>
      


    </div>
    );
  };
  
  export default Home;