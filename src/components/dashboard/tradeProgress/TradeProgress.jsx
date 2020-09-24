import React from 'react'
import './TradeProgress.scss'

import { Progress } from 'antd';

function TradeProgress() {
  return (
    <div id='tradeProgress' className='box-wrapper'>
      <h4>Trade Progress</h4>
      <div className='box'>
        <div className="top">
          <small>Start profit: $3.5</small>
          <small>End profit: $630</small>
        </div>

        <Progress percent={35} status="active" />

        <div className="bottom">
          <div className="left">
            <p>Profit generated</p>
            <p><b>$3.5</b></p>
          </div>

          <div className="right">
            <p>Trade status</p>
            <button className='primary small'>Pending</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TradeProgress
