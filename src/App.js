import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
function App() {
  return (
    <div className="App">
     <Navbar title="MultiThink" aboutText="About"/>
    <Footer/>
    </div>
  );
}
export default App;
