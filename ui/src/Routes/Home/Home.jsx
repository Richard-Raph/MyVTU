import Navbar from "../../components/navbar/Navbar"
import Why_Choose from "../../components/whyChoose/Why_Choose"
import Services from "../../components/services/Services"
import Testimonial from "../../components/testimonial/Testimonial"
import Clients from "../../components/clients/Clients"
import Footer from "../../components/footer/Footer"
import HomeSlider from "../../components/homeSlider/HomeSlider"

export default function Home () {
  return (
    <div>
        <header>
          <Navbar />
        </header>
        <main>
          <HomeSlider />
          <Why_Choose />
          <Services />
          <Testimonial />
          <Clients />
        </main>
        <footer>
          <Footer />
        </footer>
    </div>
  )
}