import logo from './logo.svg';
import './App.css';
import './Root.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WordNav from './components/WordNav';
import Agency1 from './components/Agency1';
import Tell2 from './components/Tell2';
import Featured3 from './components/Featured3';
import Integar4 from './components/Integar4';
import Studio5 from './components/Studio5';
import Sure6 from './components/Sure6';
import Propy7 from './components/Propy7';
import TwoBoys from './components/TwoBoys8';
import Time9 from './components/Time9';
import Success10 from './Success10';
import Have11 from './components/Have11';
import Footer from './components/Footer';
import MyPreloader from './components/MyPreloader';
import BackToTop from './components/BackToTop';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
 useEffect(() => {
   AOS.init();
 }, []);
  return (
    <div className='overflow-hidden'>
      <MyPreloader />
      <BackToTop />
      <WordNav />
      <Agency1 />
      <Tell2 />
      <Featured3 />
      <Integar4 />
      <Studio5 />
      <Sure6 />
      <Propy7 />
      <TwoBoys />
      <Time9 />
      <Success10 />
      <Have11 />
      <Footer />
    </div>
  );
}

export default App;
