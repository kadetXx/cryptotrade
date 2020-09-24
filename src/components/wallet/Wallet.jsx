import React from "react";
import './Wallet.scss'
import Layout from "../layout/Layout";

function Wallet() {
  return (
    <div id='wallet'>
      <Layout activeMenu='wallet'>
        <section className='page-header'>
          <div className='title'>
            <h2>Wallet</h2>
          </div>
        </section>

        <section className='top'>
          <section>
            <div className='box trade-box'>
              <div className='left'>
                100 Tokens
              </div>

              <div className='right'>
                <button className='primary'>Add money</button>
              </div>
            </div>
          </section>

          <section></section>
        </section>

        <section className='calc'></section>

        <section className='transactions'></section>
      </Layout>
    </div>
  );
}

export default Wallet;
