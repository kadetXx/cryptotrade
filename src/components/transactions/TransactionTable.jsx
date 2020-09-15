import React from 'react'

import { Table, Tag } from 'antd';

const columns = [
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: status => (
      <React.Fragment>
        {
          status === 'Paid' ? (
            <p style={{display: 'flex', alignItems: 'center', marginBottom: '0'}}>
              <span class="material-icons" style={{color: '#B1C95E',  width: '48px', height: '24px'}}>check_circle_outlined</span>
              {status}
            </p>
          ) : (
            <p style={{display: 'flex', alignItems: 'center', marginBottom: '0'}}>
              <span class="material-icons" style={{color: '#FB775E', width: '48px', height: '24px'}}>error_outline</span>
              {status}
            </p>
          )
        }
      </React.Fragment>
    )
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Type',
    key: 'type',
    dataIndex: 'type',
    render: type => (
      <>
        {type.map(tag => {
          let color = tag === 'deposit' ? 'green' : 'volcano';
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
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    render: amount => (
      <React.Fragment>
        <b style={{color: '#4f4e4e'}}>$</b>{amount}
      </React.Fragment>
    )
  },
  {
    title: 'Currency',
    dataIndex: 'currency',
    key: 'currency',
    render: currency => (
      <React.Fragment>
        {
           currency === 'BTC' ? (
            <p style={{display: 'flex', alignItems: 'center', marginBottom: '0'}}>
              <i class="fab fa-bitcoin" style={{marginRight: '5px', color: '#FC9615'}}></i>
              {currency}
            </p>
          ) : (
            <p style={{display: 'flex', alignItems: 'center', marginBottom: '0'}}>
              <i class="fab fa-ethereum" style={{marginRight: '5px', color: '#FC9615'}}></i>
              {currency}
            </p>
          )
        }
      </React.Fragment>
    )
  },
  {
    title: 'Tokens',
    dataIndex: 'tokens',
    key: 'tokens',
  },
];

const data = [
  {
    key: '1',
    status: 'Pending',
    date: '13.08/2020',
    type: ['deposit'],
    amount: '150',
    currency: 'ETH',
    tokens: '100'
  },
  {
    key: '1',
    status: 'Paid',
    date: '13.08/2020',
    type: ['deposit'],
    amount: '250',
    currency: 'BTC',
    tokens: '100'
  },
  {
    key: '1',
    status: 'Paid',
    date: '13.08/2020',
    type: ['Withdrawal'],
    amount: '150',
    currency: 'BTC',
    tokens: '100'
  },
];


function TransactionTable() {
  return (
    <div>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  )
}

export default TransactionTable
