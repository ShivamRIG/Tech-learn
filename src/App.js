import './App.css';
import Header from './components/Header';
import Display from './components/display';
import Displaycontent from './components/displaycontent';
import Projects from './components/projects';
import About from './components/About';
import Contain from './components/contain';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  return (
    <>
    <Router>
    <Header/>
    <Switch>
          <Route path="/About">
            <About/>
            <Route path='/gmail' component={() => { 
            window.location.href = 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ss8461216@gmail.com'; 
            return null
      }}/>
          </Route>
          <Route path="/contain">
            <Contain/>    
            </Route>
          <Route path="/">
         
         <Displaycontent/>
         <Display/>
          <Projects/>
          </Route>
     </Switch>
   
  </Router>
  </>
  );
}

export default App;
