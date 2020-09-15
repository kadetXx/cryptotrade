import React from "react";
import Layout from "../layout/Layout";
import './Dashboard.scss'

import TradeBalance from './tradeBalance/TradeBalance'
import TradeProgress from './tradeProgress/TradeProgress'
import Chart from './chart/Chart'
import Calculator from './calculator/Calculator'
import TransactionTable from '../transactions/TransactionTable'

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

        <section className="calc">
          <Calculator />
        </section>

        <section className="transactions">
          <TransactionTable />
        </section>
      </Layout>
    </div>
  );
};

export default Dashboard;
