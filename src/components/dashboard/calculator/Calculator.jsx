import React, { useState } from "react";
import "./Calculator.scss";
import { Menu, Dropdown } from "antd";
import axios from "axios";

const Calculator = () => {
  const [coin, setCoin] = useState("BTC");
  const [amount, setAmount] = useState("");
  const [coinAmount, setCoinAmount] = useState("");
  const [disableCoin, setDisableCoin] = useState(false);
  const [disableAmount, setDisableAmount] = useState(false);

  const handleClick = (e) => {
    setCoin(e.key);
  };

  const calculate = () => {
    axios
      .get(`${process.env.REACT_APP_EXCHANGE}`, {
        headers: {
          crossorigin:true,
          "Access-Control-Allow-Origin": "*"
        },
      })
      .then((res) => {
        console.log(res);
        amount.length > 0 && coin === "BTC"
          ? setCoinAmount((amount / res.data[21].rate).toFixed(5))
          : amount.length > 0 && coin === "ETH"
          ? setCoinAmount((amount / res.data[46].rate).toFixed(5))
          : coinAmount.length > 0 && coin === "BTC"
          ? setAmount((coinAmount * res.data[21].rate).toFixed(5))
          : coinAmount.length > 0 && coin === "ETH"
          ? setAmount((coinAmount * res.data[46].rate).toFixed(5))
          : console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleCoinInput = () => {
    coinAmount !== "" ? setDisableAmount(true) : setDisableAmount(false);
  };

  const handleAmountInput = () => {
    amount !== "" ? setDisableCoin(true) : setDisableCoin(false);
  };

  const menu = (
    <Menu onClick={handleClick} selectedKeys={coin}>
      <Menu.Item key='BTC'>BTC</Menu.Item>

      <Menu.Item key='ETH'>ETH</Menu.Item>
    </Menu>
  );

  return (
    <div id='calculator' className='box-wrapper'>
      <div className='box'>
        <div className='left'>
          <label className={disableAmount ? "disabled-input" : ""}>
            <small>USD</small>
            <input
              disabled={disableAmount}
              type='number'
              placeholder='USD'
              value={amount}
              onChange={(e) => [setAmount(e.target.value), handleAmountInput()]}
              onKeyUp={(e) => [setAmount(e.target.value), handleAmountInput()]}
            />
          </label>

          <label className={disableAmount ? "disabled-input" : ""}>
            <small>Amount of tokens</small>
            <input
              disabled={disableAmount}
              type='number'
              placeholder='Tokens'
              value={amount}
              onChange={(e) => [setAmount(e.target.value), handleAmountInput()]}
              onKeyUp={(e) => [setAmount(e.target.value), handleAmountInput()]}
            />
          </label>

          <span className='material-icons'>sync_alt</span>

          <Dropdown overlay={menu}>
            <p>
              {coin} <span className='material-icons'>unfold_more</span>
            </p>
          </Dropdown>
        </div>

        <div className='right'>
          <label className={disableCoin ? "disabled-input" : ""}>
            <small>{coin}</small>
            <input
              disabled={disableCoin}
              type='number'
              placeholder={coin}
              value={coinAmount}
              onChange={(e) => [
                setCoinAmount(e.target.value),
                handleCoinInput(),
              ]}
              onKeyUp={(e) => [
                setCoinAmount(e.target.value),
                handleCoinInput(),
              ]}
            />
          </label>

          <button className='primary' onClick={calculate}>
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
