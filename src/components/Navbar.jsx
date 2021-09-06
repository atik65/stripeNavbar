import React from "react";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { showSubmenuFunc, closeSubmenuFunc, showMenuFunc, showMenu } =
    useGlobalContext();

  const listBtnFunc = (e) => {
    e.stopPropagation();
    const text = e.target.textContent;
    const data = e.target.getBoundingClientRect();
    const center = (data.left + data.right) / 2;
    const bottom = data.bottom - 3;

    showSubmenuFunc(text, center, bottom);
  };

  const closeSubMenu = () => {
    closeSubmenuFunc();
  };
  return (
    <>
      <div className="navbar" onMouseOver={closeSubMenu}>
        <div className="row">
          <div className="col">
            <ul>
              <li>
                <button className="list-btn" onMouseOver={listBtnFunc}>
                  Home
                </button>
              </li>
              <li>
                {" "}
                <button className="list-btn" onMouseOver={listBtnFunc}>
                  School
                </button>
              </li>
              <li>
                {" "}
                <button className="list-btn" onMouseOver={listBtnFunc}>
                  College
                </button>
              </li>
              <li>
                {" "}
                <button className="list-btn" onMouseOver={listBtnFunc}>
                  Hospital
                </button>
              </li>
            </ul>
            <div className={showMenu ? "d-none" : "col menu-icon"}>
              <button onClick={showMenuFunc}>
                <i class="fas fa-bars    "></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
