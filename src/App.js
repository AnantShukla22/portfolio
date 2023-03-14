import './App.css';
import Effects from './components/effects/Effects';
import Sidebar from './components/sidebar/Sidebar';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Home from './components/Home/Home';
import Exprience from './components/exprience/Exprience';
import Project from './components/projects/Projects';
import Footer from './components/footer/Footer';


function App() {
  return (
    <>
      <Sidebar />
      <Effects/>

      <main className="main">
        <Home />
        <About />
        <Exprience />
        <Project />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
