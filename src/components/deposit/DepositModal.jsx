import React, { useState } from "react";
import Cookies from "universal-cookie";

import { Modal } from "antd";

import axios from "axios";

function DepositModal({ show, setShow, wallet, toSend }) {
  const [amount, setAmount] = useState(0.0);
  const [btc, setBtc] = useState(0);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const cookies = new Cookies();
  const authtoken = cookies.get("auth_token");


  const sendDeposit = () => {
    setConfirmLoading(true)

    const config = {
      headers: {'Authorization': `Token ${authtoken}`}
    }

    const data = {amount, amount_in_btc: btc}

    axios.post(`${process.env.REACT_APP_API}/deposit/`, data , config )
    .then(res => {
      setConfirmLoading(false)
      wallet(true)
      setShow(false);
      toSend(btc);
    })
  };

  const calculate = (e) => {
    setAmount(e.target.value);

    axios.get(process.env.REACT_APP_BTC_API).then((res) => {
      setBtc((amount / res.data.rates.BTC).toFixed(5));
    });
  };

  return (
    <div>
      <Modal
        title='Request Withdrawal'
        visible={show}
        confirmLoading={confirmLoading}
        onOk={() => sendDeposit()}
        onCancel={() => setShow(false)}
      >
        <form id='deposit-form'>
          <label>
            <p>Amount</p>
            <div>
              <i className='fas fa-dollar-sign'></i>

              <input
                type='number'
                placeholder={amount}
                value={amount}
                onChange={(e) => calculate(e)}
              />
            </div>
          </label>
          <label>
            <p>Amount In BTC</p>
            <div>
              <i className='fab fa-btc'></i>
              <input type='number' value={btc} disabled />
            </div>
          </label>
        </form>
      </Modal>
    </div>
  );
}

export default DepositModal;
