import './App.css';
import Sidebar from './components/sidebar';
import Home from './pages/Home/';
import About from './pages/About/';
import Footer from './pages/Footer'

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="page-wrapper">
        <section id="home">
          <Home/>
        </section>
        <section id="about">
          <About/>
        </section>
        <section id="projects">
          <About/>
        </section>
        <section id="tutoring">
          <About/>
        </section>
        <section id="footer">
          <Footer/>
        </section>

      </main>
    </div>
  );
}


export default App;