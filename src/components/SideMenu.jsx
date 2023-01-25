import "./styles.scss";

import IconClose from "../assets/icon-close.svg";

import { createPortal } from "react-dom";

export default function SideMenu({ setIsOpenSideMenu }) {
  const handleCancelClick = () => {
    setIsOpenSideMenu(false);
  };

  return createPortal(
    <>
      <div className="side-menu__overlay" onClick={handleCancelClick}></div>
      <div className="side-menu">
        <div className="side-menu__container">
          <div className="side-menu__cancel" onClick={handleCancelClick}>
            <img src={IconClose} alt="Close" />
          </div>
          <div className="side-menu__links">
            <ul className="side-menu__links--list">
              <li className="nav__links--item">
                <a href="#">Collections</a>
              </li>
              <li className="nav__links--item">
                <a href="#">Men</a>
              </li>
              <li className="nav__links--item">
                <a href="#">Women</a>
              </li>
              <li className="nav__links--item">
                <a href="#">About</a>
              </li>
              <li className="nav__links--item">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
