import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Layout.scss";

import { Menu, Dropdown } from "antd";

const Layout = ({ activeMenu, children }) => {
  const [sidebar, setSidebar] = useState(true);
  const [animate, setAnimate] = useState(false);

  const menu = (
    <Menu>
      <Menu.Item>
        <a target='_blank' rel='noopener noreferrer' href='https://'>
          English
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target='_blank' rel='noopener noreferrer' href='https://'>
          French
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target='_blank' rel='noopener noreferrer' href='https://'>
          Spanish
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div id='layout'>
      <section 
        id={sidebar === true ? "sidebar" : "collapse-sidebar"} 
        className={animate && 'animate'}
      >
        <div className='logo'>
          <h2>
            <span class='material-icons'>security</span> Cryptotrade
          </h2>
        </div>

        <ul>
          <li className={activeMenu === 'dashboard' ? 'active' : ''}>
            <Link to='/dashboard'>
              <span class='material-icons'>dashboard</span> Dashboard
            </Link>
          </li>
          <li className={activeMenu === 'wallet' ? 'active' : ''}>
            <Link>
              <span class='material-icons'>account_balance_wallet</span> Wallet
            </Link>
          </li>
          <li className={activeMenu === 'transactions' ? 'active' : ''}>
            <Link to='/dashboard/transactions'>
              <span className='material-icons'>receipt_long</span> Transactions
            </Link>
          </li>
          <li className={activeMenu === 'profile' ? 'active' : ''}>
            <Link>
              <span className='material-icons'>person_outline</span> Profile
            </Link>
          </li>
          <li className={activeMenu === 'logout' ? 'active' : ''}>
            <Link>
              <span className='material-icons'>exit_to_app</span>Logout
            </Link>
          </li>
        </ul>

        <button className='close-menu' onClick={() => setSidebar(!sidebar)}>
          <span class='material-icons'>close</span>
        </button>
      </section>

      <section id='main' className={!sidebar && "main-full"}>
        <header>
          <div className='left'>
            <button onClick={() => [setSidebar(!sidebar), setAnimate(true)]}>
              <span class='material-icons'>menu</span>
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
              <Link>
                <span className='material-icons'>account_balance_wallet</span>
              </Link>
            </div>

            <div className='profile-summary'>
              <img src='/assets/img/avatar.png' alt='avi' />
              <p>$4</p>
            </div>
          </div>
        </header>

        <div>{children}</div>
      </section>
    </div>
  );
};

export default Layout;
