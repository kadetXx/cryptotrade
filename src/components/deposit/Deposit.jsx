import React, { useState } from "react";
import "./Deposit.scss";
import Layout from "../layout/Layout";

import Table from "./DepositTable";
import Modal from "./DepositModal";

function Deposit({ showWallet, setShowWallet, toSend, setToSend }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div id='deposit'>
      <Layout activeMenu='deposit'>
        <section className='page-header'>
          <div className='title'>
            <h2>Deposit</h2>
          </div>
        </section>

        <section className='top'>
          <section>
            <div className='box trade-box'>
              <div className='left'>
                <div className='icon'>
                  <i className='fab fa-btc'></i>
                </div>
                <div className='wrap'>
                  <h2>Bitcoin</h2>
                  <p>All secured deposits are made in btc</p>
                </div>
              </div>

              <div className='right'>
                <button className='primary' onClick={() => setShowModal(true)}>
                  Add money
                </button>
              </div>
            </div>
          </section>
        </section>

        <section className='mid'>
          {showWallet && (
            <section>
              <div className='box bank-box'>
                <div className='section-one'>
                  <i className='fab fa-btc'></i>
                </div>

                <div className='section-two'>
                  <p>
                    Send {toSend} BTC to the wallet address below within 48hrs
                    to complete deposit{" "}
                  </p>
                  <code> 1PJ7D9F3fdS82qu6sJW99MidjkN3gKxzj5 </code>

                  <button
                    className='primary'
                    onClick={() => {
                      navigator.clipboard.writeText('1PJ7D9F3fdS82qu6sJW99MidjkN3gKxzj5');
                      alert('Copied')
                    }}
                  >
                    Copy to clipboard
                  </button>
                </div>

                <div className='section-three'>
                  <p>
                    You can also scan this QR code with preferred wallet to
                    complete deposit
                  </p>
                  <img src='/assets/img/qrcode.png' alt='code' />
                </div>
              </div>
            </section>
          )}
        </section>

        <section className='transactions'>
          <div
            className='section-title'
            style={{ marginBottom: "10px", fontWeight: "100" }}
          >
            <h4
              style={{
                fontWeight: "400",
                fontSize: "1.3rem",
                padding: "1rem 0",
              }}
            >
              Deposit History
            </h4>
          </div>
          <Table />
        </section>

        <Modal
          show={showModal}
          setShow={setShowModal}
          wallet={setShowWallet}
          toSend={setToSend}
        />
      </Layout>
    </div>
  );
}

export default Deposit;
