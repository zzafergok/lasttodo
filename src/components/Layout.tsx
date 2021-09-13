import React from "react";
import Header from "./Header";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.StatelessComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header projectName="Last Todo" />
      {children}
    </>
  );
};

export default Layout;
