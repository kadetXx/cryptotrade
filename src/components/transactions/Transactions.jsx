import React, { useEffect } from "react";
import "./Transactions.scss";

import Layout from "../layout/Layout";
import Table from "./TransactionTable";

import axios from "axios";

function Transactions() {
  useEffect(() => {
    axios
      .get("https://custom-user-api.herokuapp.com/transactions")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);

  return (
    <div id='transactions'>
      <Layout activeMenu='transactions'>
        <section className='heading'>
          <h2>Transactions</h2>
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
