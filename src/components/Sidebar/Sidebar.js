import React, { useState } from "react"
import "./Sidebar.css";
import Home from "../Home/Home";
import SidebarList from "./SidebarList";

import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

const Sidebar = () => {
    const [expandSidebar, setExpanSidebar] = useState(true);

    const handleExpandClick = () => {
        setExpanSidebar(!expandSidebar);
    };

    return (<div className="container-fluid sidebar-section">

        <div className={expandSidebar ? "sidebar-expand sidebar" : "sidebar"}>
            <div className="icon-for-sidebar-expand-and-collapse">

                <p onClick={handleExpandClick}>
                    {expandSidebar ? (
                        <BsChevronDoubleLeft size={30} />
                    ) : (<BsChevronDoubleRight size={30} />)
                    }

                </p>

            </div>
            <SidebarList expandSidebar={expandSidebar} />
        </div>

        <div className="container">
            <Home />
        </div>
    </div>
    );
};
export default Sidebar;