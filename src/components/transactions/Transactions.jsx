import React, { useState, useEffect } from "react";
import "./Transactions.scss";

import Layout from "../layout/Layout";
import Table from "./TransactionTable";

import axios from "axios";

function Transactions({token}) {
  const [data, setData] = useState()
 
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/transactions&token=${token}`)
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
          <Table data={data} />
        </section>
      </Layout>
    </div>
  );
}

export default Transactions;
