import { Link } from "react-router-dom";
import flagUzb from "../../assets/images/uzbekistanFlag.png";

import "./footer.scss";

export const Footer = () => {
  return (
    <footer className="global-footer container">
      <div className="bottom">
        <p>Copyright © 2023 CodeCrafts</p>
        <Link className="bottom_links" to="/">
          Help
        </Link>
        <div className="bottom_line"></div>
        <Link className="bottom_links" to="/">
          Jobs
        </Link>
        <div className="bottom_line"></div>
        <Link className="bottom_links" to="/">
          Bug Bounty
        </Link>
        <div className="bottom_line"></div>
        <Link className="bottom_links" to="/">
          Assessment
        </Link>
        <div className="bottom_line"></div>
        <Link className="bottom_links" to="/">
          Students
        </Link>
        <div className="bottom_line"></div>
        <Link className="bottom_links" to="/">
          Terms
        </Link>
      </div>
      <div className="country">
        <Link className="country_link" to="/">
          <img className="country_link_flag" src={flagUzb} alt="pic" />
          <p className="country_link_txt">Uzbekistan</p>
        </Link>
      </div>
    </footer>
  );
};
