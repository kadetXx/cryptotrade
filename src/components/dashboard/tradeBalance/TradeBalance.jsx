import React from 'react'
import './TradeBalance.scss'

const AcctBalance = () => {
  return (
    <div id='tradeBalance' className='box-wrapper'>
      <h4>TRADE BALANCE</h4>
      <div className='box trade-box'>
        <div className="left">
          <p>Your starter plan balance</p>
          <p>$100</p>
          <p>Weekly profit +<b>3.75%</b></p>
        </div>

        <div className="right">
          <button className='primary'>Withdraw -</button>
        </div>
      </div>
    </div>
  )
}

export default AcctBalance

