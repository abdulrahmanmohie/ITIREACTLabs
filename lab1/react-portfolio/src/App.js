import Header from './header/header'
import AboutMe from './about-me/about-me'
import MySkills from './my-skills/my-skills';
import Portfolio from './portfolio/portfolio';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Footer from './footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe/>
      <MySkills/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
