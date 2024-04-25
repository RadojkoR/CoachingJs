import { useState } from "react";
import { NavLink } from "react-router-dom";


function Nav() {
    const menuItems = ["About", "Services", "Testimonials", "Contact"];
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleHamBtn = () => {
      setIsMenuOpen(!isMenuOpen);
    }

  return (
    <nav className="sticky top-0 w-full mx-auto p-2 bg-slate-200 mainNav">
      <div className="flex items-center justify-between space-x-20 my-6">
        <div className="z-30 ml-10 font-bold md:text-lg text-slate-700">
          <NavLink to={"/"} className="navLogo">BUSINESS LOGO PLACEMENT</NavLink>
        </div>
        <ul className="hidden items-center uppercase text-grayishBlue md:flex mr-5">
          <li className="mr-2 font-bold md:text-lg text-slate-700">
            <NavLink to={"/"} activeClassName="active" className="px-3 py-2">Home</NavLink>
          </li>
          {menuItems.map((item, index) => (
            <li className="mr-2 font-bold md:text-lg text-slate-700" key={index}>
              <NavLink to={`/${item.toLowerCase()}`} className="px-3 py-2">{item}</NavLink>
            </li>
          ))}
        </ul>
        {/* Hamburger button */}
        <button 
          id="menuBtn" 
          className={`block hamburger md:hidden ${isMenuOpen ? "open" : ""}`}
          type="button"
          onClick={handleHamBtn}
          >
            <span className="hamburger-top bg-slate-800"></span>
            <span className="hamburger-middle bg-slate-800"></span>
            <span className="hamburger-bottom bg-slate-800"></span>
          </button>
      </div>
      {/* Mobile menu */}
      <div id="hamMenu" className={`absolute md:hidden p-6 rounded-lg bg-slate-900 right-0 top-16 w-8/12 sm:w-6/12 hamburgerMenu ${isMenuOpen ? "flex" : "hidden"}`}>
          <ul className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-gray-300 rounded-sm z-50">
            <li className="w-full">
            <NavLink to={"/"} className="py-2.5 block w-full">Home</NavLink>
            </li>
            {menuItems.map((item, index) =>(
              <li key={index} className="w-full">
                <NavLink to={`/${item.toLowerCase()}`} className="py-2.5 block w-full">{item}</NavLink>
              </li>
            ))}
          </ul>
      </div> 
    </nav>
  )
}

export default Nav