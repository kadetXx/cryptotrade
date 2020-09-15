import React from "react";
import "./Transactions.scss";

import Layout from "../layout/Layout";
import Table from "./TransactionTable";

function Transactions() {
  return (
    <div id='transactions'>
      <Layout activeMenu='transactions'>
        <section className="heading">
          <h2>Transactions</h2>
          <button className="primary">
            Account
          </button>
        </section>
        <section className='transactions'>
          <Table />
        </section>
      </Layout>
    </div>
  );
}

export default Transactions;
