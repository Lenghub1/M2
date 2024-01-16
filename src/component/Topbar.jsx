import React, { useEffect } from "react";
import "@material/top-app-bar/dist/mdc.top-app-bar.css";
import "@material/icon-button/dist/mdc.icon-button.css";
import "@material/drawer/dist/mdc.drawer.css";
import { MDCDrawer } from "@material/drawer";

const Sidebar = () => {
  useEffect(() => {
    const drawer = MDCDrawer.attachTo(document.querySelector(".mdc-drawer"));
    // You can customize the initialization as needed
    return () => {
      drawer.destroy();
    };
  }, []);

  return (
    <div className="mdc-drawer-app">
      <aside className="mdc-drawer mdc-drawer--dismissible">
        <div className="mdc-drawer__content">
          <nav className="mdc-list">
            {/* Add your sidebar navigation items here */}
            <a className="mdc-list-item" href="#">
              Item 1
            </a>
            <a className="mdc-list-item" href="#">
              Item 2
            </a>
            <a className="mdc-list-item" href="#">
              Item 3
            </a>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
