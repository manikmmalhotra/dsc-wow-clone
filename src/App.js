import Nav from './Nav';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Home';
import About from './About';
import Schedule from './Schedule';
import Cod from './Cod';


function App() {
  return (
    <div className="App">
    
      <Nav />

      <main>
        <Home />
        <About />
        <Schedule />
        <Cod />
      </main>

      


    </div>
  );
}

export default App;
