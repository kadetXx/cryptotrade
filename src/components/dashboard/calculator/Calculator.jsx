import React, { useState } from 'react'
import './Calculator.scss'
import { Menu, Dropdown } from "antd";

const Calculator = () => {
  const [coin, setCoin] = useState('BTC');

  const handleClick = e => {
    setCoin(e.key)
  };

  const menu = (
    <Menu onClick={handleClick} selectedKeys={coin}>
      <Menu.Item key='BTC'>
        BTC
      </Menu.Item>

      <Menu.Item key='ETH'>
        ETH
      </Menu.Item>
    </Menu>
  )

  return (
    <div id='calculator' className='box-wrapper'>
      <div className='box'>
        <div className="left">
          <label>
            <small>USD</small>
            <input type="number" placeholder='USD'/>
          </label>

          <span class="material-icons">arrow_right_alt</span>

          <label>
            <small>{coin}</small>
            <input type="number" placeholder={coin}/>
          </label>

          <Dropdown overlay={menu}>
            <p>{coin} <span class="material-icons">unfold_more</span></p>
          </Dropdown>
        </div>

        <div className="right">
          <label>
            <small>Amount of tokens</small>
            <input type="number" placeholder='Amount of tokens' />
          </label>

          <button className='primary'>Calculate</button>
        </div>
      </div>
    </div>
  )
}

export default Calculator
