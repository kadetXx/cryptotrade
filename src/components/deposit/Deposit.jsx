import React from "react";
import "./Deposit.scss";
import Layout from "../layout/Layout";

import Table from './DepositTable'

function deposit() {
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
                <div className="icon"><i class='fab fa-btc'></i></div>
                <div className='wrap'>
                  <h2>Bitcoin</h2>
                  <p>All secured deposits are made in btc</p>
                </div>
              </div>

              <div className='right'>
                <button className='primary'>Add money</button>
              </div>
            </div>
          </section>

          <section></section>
        </section>

        <section className='calc'></section>

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
      </Layout>
    </div>
  );
}

export default deposit;
