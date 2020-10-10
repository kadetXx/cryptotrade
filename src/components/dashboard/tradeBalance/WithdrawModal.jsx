import React, { useState } from "react";
import Cookies from "universal-cookie";

import { Modal } from "antd";

import axios from "axios";

function DepositModal({ show, setShow, sAlert, eAlert }) {
  const [amount, setAmount] = useState(0.0);
  const [btc, setBtc] = useState(0);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const cookies = new Cookies();
  const authtoken = cookies.get("auth_token");

  const sendDeposit = () => {
    amount.length > 0 && amount > 0 && setConfirmLoading(true);

    const config = {
      headers: { Authorization: `Token ${authtoken}` },
    };

    const data = { amount, amount_in_btc: btc };

    amount.length > 0 && amount > 0 &&
      axios
        .post(`${process.env.REACT_APP_API}/withdraw/`, data, config)
        .then((res) => {
          setConfirmLoading(false);
          setShow(false);
          sAlert(true);
        })
        .catch((err) => {
          console.log(err);
          eAlert(true);
        });
  };

  const calculate = (e) => {
    axios
      .get(`${process.env.REACT_APP_EXCHANGE}`, {
        headers: {
          crossorigin:true,
          "Access-Control-Allow-Origin": "*"
        },
      })
      .then((res) => {
        setBtc((amount / res.data[21].rate).toFixed(5));
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
                onChange={(e) => setAmount(e.target.value)}
                onKeyUp={(e) => calculate(e)}
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
