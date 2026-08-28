import React, { useState } from "react";

import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick} style={{ cursor: "pointer" }}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
        {isProfileDropdownOpen && (
          <div className="profile-dropdown" style={{
            position: "absolute",
            top: "60px",
            right: "20px",
            backgroundColor: "white",
            border: "1px solid #e0e0e0",
            borderRadius: "4px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            padding: "8px 0",
            zIndex: 1000,
            minWidth: "150px"
          }}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "14px", color: "#424242" }}>
              <li style={{ padding: "10px 20px", cursor: "pointer", borderBottom: "1px solid #f0f0f0" }}>My profile / Settings</li>
              <li style={{ padding: "10px 20px", cursor: "pointer", borderBottom: "1px solid #f0f0f0" }}>Console</li>
              <li style={{ padding: "10px 20px", cursor: "pointer", borderBottom: "1px solid #f0f0f0" }}>Coin</li>
              <li style={{ padding: "10px 20px", cursor: "pointer", borderBottom: "1px solid #f0f0f0" }}>Support</li>
              <li style={{ padding: "10px 20px", cursor: "pointer", borderBottom: "1px solid #f0f0f0" }}>Invite friends</li>
              <li style={{ padding: "10px 20px", cursor: "pointer", borderBottom: "1px solid #f0f0f0" }}>Keyboard shortcuts</li>
              <li style={{ padding: "10px 20px", cursor: "pointer", borderBottom: "1px solid #f0f0f0" }}>Tour</li>
              <li style={{ padding: "10px 20px", cursor: "pointer", color: "#eb5b3c" }}>Logout</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
