import React from 'react';
import './topbar.css';
import logo from './images/logo.jpg';
import pic1 from './images/pic1.jpg';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import {NotificationsNone} from '@mui/icons-material';
import {FaBell } from 'react-icons/fa';
import {GrLanguage } from 'react-icons/gr';
import {AiFillSetting } from 'react-icons/ai';


function Topbar() {
  return (
      <>
        <div className = "topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    {/* <span className ="logo">lamaadmin</span> */}
                    <img className="logo" src={logo} alt="Logo" />
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                    <FaBell/>
                    <span className="topIconBadge">2</span>
                    </div>

                    <div className="topbarIconContainer">
                    <GrLanguage/>
                    <span className="topIconBadge">2</span>
                    </div>

                    <div className="topbarIconContainer">
                    <AiFillSetting/>
                    {/* <span className="topIconBadge">2</span> */}
                    </div>
                    <img src={pic1} alt="" className="topAvatar" />

                </div>
            </div>

        </div>
      </>
  )
}

export default Topbar;
