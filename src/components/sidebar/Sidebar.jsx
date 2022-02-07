import React from 'react';
import './sidebar.css';
import {MdLineStyle} from 'react-icons/md';
import {MdTimeline} from 'react-icons/md';
import {FiTrendingUp} from 'react-icons/fi';
import {FiUsers} from 'react-icons/fi';
import {MdOutlineProductionQuantityLimits} from 'react-icons/md';
import {AiOutlineDollarCircle} from 'react-icons/ai';
import {HiDocumentReport} from 'react-icons/hi';
import {FiMail} from 'react-icons/fi';
import {FcFeedback} from 'react-icons/fc';
import {BiMessageSquareDetail} from 'react-icons/bi';
import {MdOutlineManageSearch} from 'react-icons/md';
import {SiGoogleanalytics} from 'react-icons/si';
import {MdReport} from 'react-icons/md';
// import {GrLanguage } from 'react-icons/gr';
// import {AiFillSetting } from 'react-icons/ai';
function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
              <h3 className="sidebarTitle">
                  Dashboard
              </h3>
              <ul className="sidebarList">
                 <li className = "sidebarListItem active">
                    <MdLineStyle/>
                    Home
                  </li>
                 <li className = "sidebarListItem">
                    <MdTimeline/>
                    Analytics
                  </li>
                 <li className = "sidebarListItem">
                    <FiTrendingUp/>
                    Sales
                  </li>
              </ul>
           </div>
          
           <div className="sidebarMenu">
              <h3 className="sidebarTitle">
                  Quick Menu
              </h3>
              <ul className="sidebarList">
                 <li className = "sidebarListItem">
                    <FiUsers/>
                    users
                  </li>
                 <li className = "sidebarListItem">
                    <MdOutlineProductionQuantityLimits/>
                    Products
                  </li>
                 <li className = "sidebarListItem">
                    <AiOutlineDollarCircle/>
                    Transections
                  </li>
                 <li className = "sidebarListItem">
                    <HiDocumentReport/>
                     Reports
                  </li>
              </ul> 
           </div>
           <div className="sidebarMenu">
              <h3 className="sidebarTitle">
                  Notification
              </h3>
              <ul className="sidebarList">
                 <li className = "sidebarListItem">
                    <FiMail/>
                    Mail
                  </li>
                 <li className = "sidebarListItem">
                    <FcFeedback/>
                    Feedback
                  </li>
                 <li className = "sidebarListItem">
                    <BiMessageSquareDetail/>
                    Messages
                  </li>
              </ul> 
           </div>
           <div className="sidebarMenu">
              <h3 className="sidebarTitle">
                  Staff
              </h3>
              <ul className="sidebarList">
                 <li className = "sidebarListItem">
                    <MdOutlineManageSearch/>
                    Manage
                  </li>
                 <li className = "sidebarListItem">
                    <SiGoogleanalytics/>
                    Analytics
                  </li>
                 <li className = "sidebarListItem">
                    <MdReport/>
                    Reports
                  </li>
              </ul> 
           </div>

        </div>
      </div>
    </>
  );
}

export default Sidebar;
