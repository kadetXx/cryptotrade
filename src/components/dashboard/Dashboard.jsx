import React from "react";
import Layout from "../layout/Layout";
import "./Dashboard.scss";

import TradeBalance from "./tradeBalance/TradeBalance";
import TradeProgress from "./tradeProgress/TradeProgress";
import Chart from "./chart/Chart";
import Calculator from "./calculator/Calculator";
import TransactionTable from "./transactions/TransactionTable";

const Dashboard = () => {
  return (
    <div id='dashboard'>
      <Layout activeMenu='dashboard'>
        <section className='top'>
          <section>
            <TradeBalance />
            <Chart />
          </section>

          <section>
            <TradeProgress />
          </section>
        </section>

        <section className='calc'>
          <Calculator />
        </section>

        <section className='transactions'>
          <div
            className='section-title'
            style={{ marginBottom: "10px", fontWeight: "100" }}
          >
            <h4 style={{ fontWeight: "400", fontSize: '1.3rem', padding: '1rem 0' }}>Recent Trades</h4>
          </div>
          <TransactionTable />
        </section>
      </Layout>
    </div>
  );
};

export default Dashboard;
