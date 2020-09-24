import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./Layout.scss";

import Cookies from "universal-cookie";
import axios from "axios";
import { Menu, Dropdown } from "antd";

const Layout = ({ activeMenu, children }) => {
  const [sidebar, setSidebar] = useState(true);
  const [animate, setAnimate] = useState(false);
  const [isLoggedout, setIsLoggedout] = useState(false)

  const menu = (
    <Menu>
      <Menu.Item>
          English
      </Menu.Item>
    </Menu>
  );

  const cookies = new Cookies();
  const authtoken = cookies.get('auth_token');
  
  const logout = () => {

    axios
      .post(`${process.env.REACT_APP_URL}/logout/`, {
        headers: {
          'Authorization': `Token ${authtoken}`
        }
      })
      .then((res) => {
        console.log(res); 
        setIsLoggedout(true);
        cookies.remove('auth_token')
      })
      .catch((err) => [console.log(err), setIsLoggedout(true)], cookies.remove('auth_token'));
  }

  const userMenu = (
    <Menu>
      <Menu.Item>
        <Link to='/profile'>
          Profile
        </Link>
      </Menu.Item>

      <Menu.Item>
        <Link to='#' onClick={logout}>
          Logout
        </Link>
      </Menu.Item>
    </Menu>
  )

  return (
    <div id='layout'>
      <section
        id={sidebar === true ? "sidebar" : "collapse-sidebar"}
        className={animate ? "animate" : ''}
      >
        <div className='logo'>
          <h2>
            <span className='material-icons'>security</span> Trddex
          </h2>
        </div>

        <ul>
          <li className={activeMenu === "dashboard" ? "active" : ""}>
            <Link to='/dashboard'>
              <span className='material-icons'>dashboard</span> Dashboard
            </Link>
          </li>
          <li className={activeMenu === "wallet" ? "active" : ""}>
            <Link to='/dashboard/wallet'>
              <span className='material-icons'>account_balance_wallet</span> Wallet
            </Link>
          </li>
          <li className={activeMenu === "transactions" ? "active" : ""}>
            <Link to='/dashboard/transactions'>
              <span className='material-icons'>receipt_long</span> Transactions
            </Link>
          </li>
          <li className={activeMenu === "profile" ? "active" : ""}>
            <Link to='/dashboard/profile'>
              <span className='material-icons'>person_outline</span> Profile
            </Link>
          </li>
          <li className={activeMenu === "logout" ? "active" : ""} onClick={logout}>
            <Link to='/dashboard'>
              <span className='material-icons'>exit_to_app</span>Logout
            </Link>
          </li>
        </ul>

        <button className='close-menu' onClick={() => setSidebar(!sidebar)}>
          <span className='material-icons'>close</span>
        </button>
      </section>

      <section id='main' className={!sidebar ? "main-full" : ''}>
        <header>
          <div className='left'>
            <button onClick={() => [setSidebar(!sidebar), setAnimate(true)]}>
              <span className='material-icons'>menu</span>
            </button>
          </div>

          <div className='right'>
            <div className='language'>
              <Dropdown overlay={menu}>
                <span
                  className='ant-dropdown-link material-icons'
                  onClick={(e) => e.preventDefault()}
                >
                  language
                </span>
              </Dropdown>
            </div>

            <div className='shortcut'>
              <Link to='/dashboard'>
                <span className='material-icons'>account_balance_wallet</span>
              </Link>
            </div>

            <div className='profile-summary'>
              <Dropdown overlay={userMenu} placement="bottomLeft">
                <div style={{display: 'flex', alignItems: 'center'}}>
                <img src='/assets/img/avatar.png' alt='avi' />
                <p>$4</p>
                </div>
              </Dropdown>
            </div>
          </div>
        </header>

        <div id='children'>{children}</div>
      </section>

      {isLoggedout ? <Redirect to={{ pathname: '/'}} /> : '' }
    </div>
  );
};

export default Layout;
