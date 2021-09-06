import React from "react";
import data from "./data";
import { useGlobalContext } from "./context";

const Menu = () => {
  const { closeMenuFunc, showMenu } = useGlobalContext();
  return (
    <div className={`${showMenu ? "menu show-menu" : "menu"}`}>
      <div className="menu-main">
        <div className="text-end">
          <button onClick={closeMenuFunc}>
            <i class="fas fa-times    "></i>
          </button>
        </div>
        <div>
          {data.map((item, index) => {
            return (
              <div key={index} className="menu-div">
                <h3>{item.title}</h3>
                <ul className="menu-ul">
                  {item.links.map((item, index) => {
                    return (
                      <li key={index}>
                        <a href={item.href}>{item.text}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
