import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import axios from "axios";

import { Table, Tag } from "antd";

const columns = [
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => (
      <React.Fragment>
        {status === "Paid" ? (
          <p
            style={{ display: "flex", alignItems: "center", marginBottom: "0" }}
          >
            <span
              className='material-icons'
              style={{ color: "#B1C95E", width: "48px", height: "24px" }}
            >
              check_circle_outlined
            </span>
            {status}
          </p>
        ) : (
          <p
            style={{ display: "flex", alignItems: "center", marginBottom: "0" }}
          >
            <span
              className='material-icons'
              style={{ color: "#FB775E", width: "48px", height: "24px" }}
            >
              error_outline
            </span>
            {status}
          </p>
        )}
      </React.Fragment>
    ),
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    render: (date) => (
      <React.Fragment>
        {
          (() => {
            let d = new Date(date);
            let day = d.getDate();
            let month = d.getMonth();
            let year = d.getFullYear();
      
            if (month.length < 2) month = "0" + month;
            if (day.length < 2) day = "0" + day;
      
            return [day, month, year].join('/');
          })()
        }
      </React.Fragment>
    )
  },
  {
    title: "Merchant ID",
    dataIndex: "merchant",
    key: "merchant",
    render: (merchant) => (
      <React.Fragment>
        <p style={{ display: "flex", alignItems: "center", marginBottom: "0" }}>
          <span
            className='material-icons'
            style={{ color: "#11315E", marginRight: "3px", fontSize: "15px" }}
          >
            person
          </span>
          {merchant}
        </p>
      </React.Fragment>
    ),
  },
  {
    title: "Type",
    key: "type",
    dataIndex: "type",
    render: (type) => (
      <>
        {type.map((tag) => {
          let color = tag === "Deposit" ? "green" : "volcano";
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    render: (amount) => (
      <React.Fragment>
        <b style={{ color: "#4f4e4e" }}>$</b>
        {amount}
      </React.Fragment>
    ),
  },
  {
    title: "Currency",
    dataIndex: "currency",
    key: "currency",
    render: (currency) => (
      <React.Fragment>
        {currency === "BTC" ? (
          <p
            style={{ display: "flex", alignItems: "center", marginBottom: "0" }}
          >
            <i
              className='fab fa-bitcoin'
              style={{ marginRight: "5px", color: "#FC9615" }}
            ></i>
            {currency}
          </p>
        ) : (
          <p
            style={{ display: "flex", alignItems: "center", marginBottom: "0" }}
          >
            <i
              className='fab fa-ethereum'
              style={{ marginRight: "5px", color: "#FC9615" }}
            ></i>
            {currency}
          </p>
        )}
      </React.Fragment>
    ),
  },
  {
    title: "Amount (BTC)",
    dataIndex: "coins",
    key: "coins",
  },
];


function TransactionTable() {
  const [transactions, setTransactions] = useState([]);

  const cookies = new Cookies();
  const authtoken = cookies.get("auth_token");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/transactions`, {
        headers: {
          Authorization: `Token ${authtoken}`,
        },
      })
      .then((res) => {
        const table = res.data.map((item, index) => ({
          key: index,
          status: item.status,
          date: item.date,
          merchant: item.merchant,
          type: [item.transaction_type],
          amount: item.amount,
          currency: item.currency.slice(2, 5),
          coins: item.amount,
        }));

        setTransactions(table.slice(0, 15))
      })
      .catch((err) => console.log(err));

    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Table columns={columns} dataSource={transactions} pagination={false} />
    </div>
  );
}

export default TransactionTable;
