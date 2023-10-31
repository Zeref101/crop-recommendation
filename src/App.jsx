import Home from './components/Home'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Performance from './components/Performance';
import Technologies from './components/Technologies';

function App() {
  AOS.init();

  return (
    <>
      <Home/>
      <Performance/>
      <Technologies/>
    </>
  )
}

export default App
