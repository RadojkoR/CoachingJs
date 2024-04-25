import Button from "./Button"
import { FaLinkedinIn } from "react-icons/fa";

function Banner() {
  return (
    <section className="flex items-center justify-end">
      <a
        className="mr-2 ex:mr- md:mr-5 md:text-xl"
        href="https://www.linkedin.com"
        target="_blank"
      >
        <FaLinkedinIn />
      </a>

      <a className="mr-1 ex:mr-2 md:mr-5 text-xs md:text-lg " href="tel:+12345678900">
        +1 234 567 8900
      </a>
      <span className="mr-1 ex:mr-2 md:mr-5 text-xs md:text-lg">|</span>
      <a className="mr-5 text-xs text-xl" href="mailto:test@test.com">
        test@test.com
      </a>
      {/* <button className="bg-slate-700 text-gray-200 text-xl py-3 px-10">
        Book an Intro Call
      </button> */}
      <Button to="/about" text="Book an Intro Call" bgColor="slate" textColor="gray" addClass="bannerBtn"/>
    </section>
  )
}

export default Banner