import React, { FC, useEffect, useReducer } from "react";
import NavBar, { IDefaultPaths } from "./navbar/NavBar";
import Sidebar from "./sidebar/Sidebar";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Layout: FC<Props> = ({ children }) => {
  const defaultPaths: IDefaultPaths[] = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ];
  const [isOpen, toggle] = useReducer((state) => {
    return !state;
  }, false);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <div className="min-h-screen min-w-screen flex">
      <div className="w-full">
        <NavBar openSideBar={toggle} defaultPaths={defaultPaths} />

        <div className="h flex flex-col">{children}</div>
      </div>
      <Sidebar
        hideSideBar={toggle}
        sideBarState={isOpen}
        defaultPaths={defaultPaths}
      />
    </div>
  );
};

export default Layout;
