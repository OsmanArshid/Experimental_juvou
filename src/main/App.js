
import Navbar from "../components/Navbar";
//import Home from "../components/Home";
import MyFooter from "../components/Footer";
import "../main/App.css";


function App() {
  return (
   <div>
    <Navbar />
    <header className="header">
      <h1 className="welcome"> Welcome to JuvoU </h1>
    </header>
    <MyFooter />
   </div>
  );
}

export default App;
