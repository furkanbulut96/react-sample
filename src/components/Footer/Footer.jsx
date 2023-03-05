import { FiTwitter } from "react-icons/fi";
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io";
import { VscGithub } from "react-icons/vsc";
import  {Link}  from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  const location = useLocation();
  let d = "";
  console.log(location.pathname);

  if (location.pathname === "/projects") {
    d = "vertical";
  } else if (location.pathname === "/about") {
    d = "vertical";
  } else if (location.pathname === "/contact") {
    d = "middle";
  } else {
    d = "horizontal";
  }
  return (
    <footer className={d}>
      <div className="social-icons">
        <Link to ="https://twitter.com/wednesdayaddams">
          <FiTwitter size={40} />
        </Link>
        <Link to="https://www.facebook.com/groups/879864605418737/">
          <IoLogoFacebook size={40} />
        </Link>
        <Link to="https://www.instagram.com/wednesdayaddams/">
          <IoLogoInstagram size={40} />
        </Link>
        <Link to="https://github.com/furkanbulut96">
          <VscGithub size={40} />
        </Link>
      </div>
      <div className="copyright">&copy; Copyright 2023</div>
    </footer>
  );
};

export default Footer;
