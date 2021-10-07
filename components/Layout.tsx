import React from "react";
import Nav from "./ui/Nav";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen dark:bg-gray-900 dark:text-purple-50">
      <Nav />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
