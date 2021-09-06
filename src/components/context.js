import React from "react";
import { useContext, useState } from "react";

const AppContext = React.createContext();

const ContextProvider = ({ children }) => {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [text, setText] = useState({});

  const showMenuFunc = () => {
    setShowMenu(true);
    console.log("this is show menu ");
  };

  const closeMenuFunc = () => {
    setShowMenu(false);
    console.log("this is close menu");
  };

  const showSubmenuFunc = (text, center, bottom) => {
    setShowSubmenu(true);
    setText({
      text,
      center,
      bottom,
    });
  };

  const closeSubmenuFunc = () => {
    setShowSubmenu(false);
  };

  return (
    <AppContext.Provider
      value={{
        showSubmenu,
        showMenu,
        showMenuFunc,
        closeMenuFunc,
        showSubmenuFunc,
        closeSubmenuFunc,
        text,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { ContextProvider, useGlobalContext };
