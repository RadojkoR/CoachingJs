import AboutMeHome from "../components/home/AboutMeHome"
import Header from "../components/home/Header"
import ParallaxHome from "../components/home/ParallaxHome"
import ServicesHome from "../components/home/ServicesHome"



function Home() {
  return (
    <>
      <Header />
      <AboutMeHome />
      <ServicesHome />
      <ParallaxHome />
    </>
  )
}

export default Home