import { Link } from "react-router-dom"
import PropTypes from "prop-types";


function Button({to, text, bgColor, textColor, addClass}) {
   
  return (
    <Link to={to} className={`text-xl bg-${bgColor}-800 text-${textColor}-200 flex justify-center items-center generalBtn ${addClass}`}>{text}</Link>
  )
}

Button.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  addClass: PropTypes.string
};

export default Button