import { Link } from "react-router-dom";

const Button = ({ text, link }) => {
  return (
    <Link
      to={link}
      className="flex h-13 max-w-97 w-full items-center justify-center rounded-pill bg-glass text-base text-white hover:bg-black/20 transition-all duration-300 ease-in-out"
    >
      {text}
    </Link>
  );
};

export default Button;
