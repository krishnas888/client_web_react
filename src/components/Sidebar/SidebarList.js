import React from "react"
import "./SidebarList.css"
import profilepic from "../../Image/em.jpg"
import { FcHome, FcBinoculars, FcBusiness, FcDiploma1, FcGraduationCap, FcTodoList, FcSalesPerformance ,FcContacts} from "react-icons/fc";
const SidebarList = ({ expandSidebar }) => {
    return (
        <React.Fragment>
            {expandSidebar ? (
                <div className="navbar-items">
                    <div className="sidebar-profile-pic">
                        <img src={profilepic} alt="description of image" />
                    </div>
                    <ul>
                        <li className="nav-item">
                            <FcHome size={25}/>
                            Home
                        </li>
                        <li className="nav-item">
                            <FcBinoculars size={25}/>
                            About
                        </li>
                        <li className="nav-item">
                            <FcBusiness size={25}/>
                            Work Experience
                        </li>
                        <li className="nav-item">
                            <FcDiploma1 size={25}/>
                            Texh stack
                        </li>
                        <li className="nav-item">
                            <FcGraduationCap size={25}/>
                            Education
                        </li>
                        <li className="nav-item">
                            <FcTodoList size={25}/>
                            Project
                        </li>
                        <li className="nav-item">
                            <FcSalesPerformance size={25}/>
                            Testimonial
                        </li>
                        <li className="nav-item">
                            <FcContacts size={25}/>
                            Contact
                        </li>
                    </ul>
                </div>) : (
                <div className="nav-only-icon-items">
                    
                    <ul>
                        <li className="nav-item">
                            <FcHome size={25}/>
                        </li>
                        <li className="nav-item">
                            <FcBinoculars size={25}/>
                        </li>
                        <li className="nav-item">
                            <FcBusiness size={25}/>
                        </li>
                        <li className="nav-item">
                            <FcDiploma1 size={25}/>
                        </li>
                        <li className="nav-item">
                            <FcGraduationCap size={25}/>
                        </li>
                        <li className="nav-item">
                            <FcTodoList size={25}/>
                        </li>
                        <li className="nav-item">
                            <FcSalesPerformance size={25}/>
                        </li>
                        <li className="nav-item">
                            <FcContacts size={25}/>
                        </li>
                    </ul>

                </div>
            )}


        </React.Fragment>
    );
};
export default SidebarList;