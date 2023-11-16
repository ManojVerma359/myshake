import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Hearder";
 import Features from "./Components/Features";
 import Customer  from './Components/Customer'
 //import Work from "./Components/Work"
import Pricing from "./Components/Pricing"
import Downlodapp from "./Components/Downlodapp";
import MyAccordain from "./Components/MyAccordain";
 import Testimonial from "./Components/Testimonial"
 import Footer from "./Components/Footer"

function App() {
  
  return (
    <div className="overflow-hidden">
      <Header />
      <Features />
      <Customer/> 
      {/* <Work/> */}
      <Pricing/>
      <Downlodapp/>
      <Testimonial/>
      <MyAccordain/>

      <Footer/>
    </div>
  );
}

export default App;
