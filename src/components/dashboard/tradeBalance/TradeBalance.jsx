import React, { useState, useEffect } from "react";
import "./TradeBalance.scss";
import Cookies from "universal-cookie";

import axios from 'axios'

import Modal from "./WithdrawModal";
import Alert from "../../alert/Alert";

const AcctBalance = () => {
  const [amount, setAmount] = useState(0)
  const [showModal, setShowModal] = useState(false);
  const [sAlert, setSAlert] = useState(false);
  const [eAlert, setEAlert] = useState(false);

  const cookies = new Cookies();
  const authtoken = cookies.get("auth_token");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/user_amount`, {
        headers: {
          Authorization: `Token ${authtoken}`,
        },
      })
      .then(res => setAmount(res.data.data.user_amount))

      // eslint-disable-next-line
  }, [])

  return (
    <div id='tradeBalance' className='box-wrapper'>
      <h4>Trade Balance</h4>
      <div className='box trade-box'>
        <div className='left'>
          <p>${amount}</p>
          <p>
            Weekly profit +<b>3.75%</b>
          </p>
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
