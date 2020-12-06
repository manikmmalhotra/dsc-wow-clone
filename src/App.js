import Nav from './Nav';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Home';
import About from './About';


function App() {
  return (
    <div className="App">
    
      <Nav />

      <main>
        <Home />
        <About />
      </main>

      


    </div>
  );
}

export default App;
