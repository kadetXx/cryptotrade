import React from "react";
import "./Transactions.scss";

import Layout from "../layout/Layout";
import Table from "./TransactionTable";

function Transactions({token}) {

  return (
    <div id='transactions'>
      <Layout activeMenu='transactions'>
        <section className='page-header'>
          <div className="title"><h2>Transactions</h2></div>
          <button className='primary'>Account</button>
        </section>
        <section className='transactions'>
          <Table />
        </section>
      </Layout>
    </div>
  );
}

export default Transactions;
