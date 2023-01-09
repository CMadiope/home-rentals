import Contact from "./components/Contact";
import FindProperty from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Landlord from "./components/Landlord";
import Navbar from "./components/Navbar";
import Tenants from "./components/Tenants";

function App() {
  return <div >
    <Navbar/>
    <Home />
    <Landlord/>
    <Tenants/>
    <Contact/>
    <Footer/>
  </div>;
}

export default App;
