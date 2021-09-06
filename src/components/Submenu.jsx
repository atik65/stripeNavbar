import React, { useState, useEffect, useRef } from "react";
import { useGlobalContext } from "./context";
import data from "./data";

const Submenu = () => {
  const [col, setCol] = useState("");

  const {
    showSubmenu,
    text: { text, center, bottom },
  } = useGlobalContext();

  const item = data.find((e) => {
    return e.title === text;
  });

  const columnFunc = () => {
    if (item?.links.length === 3) {
      setCol("col3");
    } else if (item?.links.length <= 2) {
      setCol("col2");
    } else if (item?.links.length >= 4) {
      setCol("col4");
    }
  };

  const ref = useRef(null);

  useEffect(() => {
    columnFunc();
    ref.current.style.left = `${center - 200}px`;
    ref.current.style.top = `${bottom}px`;
  }, [item]);
  return (
    <>
      <div
        ref={ref}
        className={`${
          showSubmenu ? "submenu ${col} showSubmenu" : "submenu ${col}"
        }`}
      >
        <h4>{item?.title}</h4>
        <ul>
          {item?.links.map((elem, index) => {
            return (
              <li>
                <a key={index} href={elem.href}>
                  {elem.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Submenu;
