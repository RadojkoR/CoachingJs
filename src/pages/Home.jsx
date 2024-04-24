import AboutMeHome from "../components/home/AboutMeHome"
import ParallaxHome from "../components/home/ParallaxHome"
import ServicesHome from "../components/home/ServicesHome"



function Home() {
  return (
    <>
        <h1 className="text-center text-5xl">Home</h1>
        <AboutMeHome />
        <ServicesHome />
        <ParallaxHome />
    </>
  )
}

export default Home