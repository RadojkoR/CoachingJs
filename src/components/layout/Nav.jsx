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
        <div className="z-30 ml-10">
          <NavLink to={"/"}>BUSINESS LOGO PLACEMENT</NavLink>
        </div>
        <ul className="hidden items-center uppercase text-grayishBlue md:flex mr-5">
          <li className="mr-10">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          {menuItems.map((item, index) => (
            <li className="mr-10" key={index}>
              <NavLink to={`/${item.toLowerCase()}`}>{item}</NavLink>
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
      <div id="hamMenu" className={`absolute md:hidden p-6 rounded-lg bg-slate-900 right-0 top-16 w-2/5 hamburgerMenu ${isMenuOpen ? "flex" : "hidden"}`}>
          <ul className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-gray-300 rounded-sm z-50">
            <li>
            <NavLink to={"/"} className="p-2.5">Home</NavLink>
            </li>
            {menuItems.map((item, index) =>(
              <li key={index}>
                <NavLink to={`/${item.toLowerCase()}`} className="p-2.5">{item}</NavLink>
              </li>
            ))}
          </ul>
      </div> 
    </nav>
  )
}

export default Nav