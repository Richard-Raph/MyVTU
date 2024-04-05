import Clients from "../../Components/Clients/Clients";
import Footer from "../../Components/Footer/Footer";
import Landing from "../../Components/HomeSlider/HomeSlider";
import Navbar from "../../Components/Navbar/Navbar";
import Prices from "../../Components/Prices/Prices";

const Pricing = () => {
  return (
    <div>
        <header>
            <Navbar />
        </header>
        <main>
            <Landing />
            <Prices />
            <Clients />
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default Pricing;