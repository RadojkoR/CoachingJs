import { NavLink } from "react-router-dom";


function Nav() {
    const menuItems = ["About", "Services", "Testimonials", "Contact"];
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
      </div>
    </nav>
  )
}

export default Nav