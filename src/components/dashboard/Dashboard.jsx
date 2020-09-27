import React from "react";
import Layout from "../layout/Layout";
import "./Dashboard.scss";

import TradeBalance from "./tradeBalance/TradeBalance";
import TradeProgress from "./tradeProgress/TradeProgress";
// import Chart from "./chart/Chart";
import Calculator from "./calculator/Calculator";
import TransactionTable from "./transactions/TransactionTable";

const Dashboard = () => {
  return (
    <div id='dashboard'>
      <Layout activeMenu='dashboard'>
        <section className='top'>
          <section>
            <TradeBalance />
            {/* <Chart /> */}
          </section>

          <section>
            <TradeProgress />
          </section>
        </section>

        <section className='section-two'>
          <div
            style={{
              padding: "2rem 0 0",
              margin: "0px",
              width: "100%",
              background: "#fff"
            }}
          >
            <iframe
              title='chart'
              src='https://widget.coinlib.io/widget?type=chart&theme=light&coin_id=859&pref_coin_id=1505'
              width='100%'
              height='536px'
              scrolling='auto'
              marginWidth='0'
              marginHeight='0'
              frameBorder='0'
              border='0'
              style={{
                border: "0",
                margin: "0",
                padding: "0",
                lineHeight: "14px",
              }}
            ></iframe>
          </div>
          <Calculator />
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
              Recent Trades
            </h4>
          </div>
          <TransactionTable />
        </section>
      </Layout>
    </div>
  );
};

export default Dashboard;
