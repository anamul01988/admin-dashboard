import React from 'react';
import './topbar.css';
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
                    <span className ="logo">lamaadmin</span>
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
                    <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />

                </div>
            </div>

        </div>
      </>
  )
}

export default Topbar;
