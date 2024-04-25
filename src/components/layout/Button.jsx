import { Link } from "react-router-dom"
import PropTypes from "prop-types";


function Button({to, text, bgColor, textColor, addClass}) {
   
  return (
    <Link to={to} className={`text-lg lg:text-xl bg-${bgColor}-800 text-${textColor}-200 flex justify-center items-center generalBtn ${addClass}`}>{text}</Link>
  )
}

Button.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  addClass: PropTypes.string.isRequired
};

export default Button