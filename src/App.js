
import './App.css';
import Footer from './Footer';
import FrontPage from './Frontpage';
import Navbar from './Navbar';
import NextViewport3 from './NextSection3';
import NextViewport4 from './NextSection4';
import NextSection from './Nextsection';
import NextViewport from './ViewPort';

function App() {
  return (
   <>
   <a href="#" className="side-scroll-button">&#8593;</a>

   <Navbar/>
   <FrontPage/>
   <NextSection/>
   <NextViewport/>
   <NextViewport3/>
   <NextViewport4/>
   <Footer/>
   </>
  );
}

export default App;
