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
      .post(`${process.env.REACT_APP_API}/logout/`, {
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
        <Link to='/dashboard/profile'>
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
          <span class="fas fa-warehouse"></span> Trddex
          </h2>
        </div>

        <ul>
          <li className={activeMenu === "dashboard" ? "active" : ""}>
            <Link to='/dashboard'>
              {/* <span className='material-icons'>dashboard</span>  */} 
              {/* <span class="fas fa-tachometer-alt"></span> */}
              Dashboard
            </Link>
          </li>
          <li className={activeMenu === "transactions" ? "active" : ""}>
            <Link to='/dashboard/transactions'>
              {/* <i class="fas fa-history"></i> */}
              Transactions
            </Link>
          </li>
          <li className={activeMenu === "deposit" ? "active" : ""}>
            <Link to='/dashboard/deposit'>
              {/* <span class="fas fa-money-check-alt"></span> */}
              Deposit
            </Link>
          </li> 
          <li className={activeMenu === "profile" ? "active" : ""}>
            <Link to='/dashboard/profile'>
              {/* <i class="fas fa-user"></i> */}
              Profile
            </Link>
          </li>
          <li className={activeMenu === "logout" ? "active" : ""} onClick={logout}>
            <Link to='/dashboard'>
              {/* <i class="fas fa-sign-out-alt"></i> */}
              Logout
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

            <div className='shortcut' style={{width: '20px'}}>
              <Link to='/dashboard/deposit'>
                <span className='material-icons'  >account_balance_deposit</span>
              </Link>
            </div>

            <div className='profile-summary'>
              <Dropdown overlay={userMenu} placement="bottomLeft">
                <div style={{display: 'flex', alignItems: 'center'}}>
                <img src='/assets/img/default.png' alt='avi' />
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
