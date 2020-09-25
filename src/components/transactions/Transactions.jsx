import React, { useState, useEffect } from "react";
import "./Transactions.scss";
import Cookies from "universal-cookie";

import Layout from "../layout/Layout";
import Table from "./TransactionTable";

import axios from "axios";

function Transactions({token}) {
  const [data, setData] = useState();

  const cookies = new Cookies();
  const authtoken = cookies.get('auth_token');
 
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/transactions`, {
        headers: {
          'Authorization': `Token ${authtoken}`
        }
      })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));

    // eslint-disable-next-line
  }, []);

  return (
    <div id='transactions'>
      <Layout activeMenu='transactions'>
        <section className='page-header'>
          <div className="title"><h2>Transactions</h2></div>
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
