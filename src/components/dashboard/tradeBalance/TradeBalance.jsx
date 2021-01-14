import React, { useState, useEffect } from "react";
import "./TradeBalance.scss";
import Cookies from "universal-cookie";

import axios from "axios";

import Modal from "./WithdrawModal";
import Alert from "../../alert/Alert";

const AcctBalance = () => {
  const [amount, setAmount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [sAlert, setSAlert] = useState(false);
  const [eAlert, setEAlert] = useState(false);

  const [profit, setProfit] = useState({
    user_profit: '0',
    user_profit_rate: '0'
  })

  const cookies = new Cookies();
  const authtoken = cookies.get("auth_token");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/user_amount`, {
        headers: {
          Authorization: `Token ${authtoken}`,
        },
      })
      .then((res) => setAmount(res.data.data.user_amount));

    axios
      .get(`${process.env.REACT_APP_API}/user_profit`, {
        headers: {
          Authorization: `Token ${authtoken}`,
        },
      })
      .then((res) => setProfit(res.data.data));

    // eslint-disable-next-line
  }, []);

  return (
    <div id='tradeBalance' className='box-wrapper'>
      <h4>Trade Balance</h4>
      <div className='box trade-box'>
        <div className='left'>
          <p className="acct-balance">${amount}</p>
          <div className='profit-container'>
            <p>
              Profit Rate: <b className='greentext'>+{profit.user_profit_rate}</b>
            </p>
            <p>
              Weekly profit: <b >${profit.user_profit}</b>
            </p>
          </div>
        </div>

        <div className='right'>
          <button className='primary' onClick={() => setShowModal(true)}>
            Withdraw
          </button>
        </div>
      </div>

      <Modal
        show={showModal}
        setShow={setShowModal}
        sAlert={setSAlert}
        eAlert={setEAlert}
      />

      {sAlert && (
        <Alert
          icon='success'
          title='Request Submitted'
          link='#'
          action={() => setSAlert(false)}
        />
      )}

      {eAlert && (
        <Alert
          icon='danger'
          title='An error occured'
          link='#'
          action={() => setEAlert(false)}
        />
      )}
    </div>
  );
};

export default AcctBalance;
