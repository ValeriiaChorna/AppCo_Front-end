import React from 'react';
import StatisticTableItem from './StatisticTableItem';

function StatisticTable({ items }) {
  return (
    <>
      <table className="statistic-table">
        <caption>
          <h3> Users statistics </h3>
        </caption>
        <thead>
          <tr>
            <th> Id </th> <th> First name </th> <th> Last name </th>
            <th> Email </th> <th> Gender </th> <th> IP address </th>
            <th> Total clicks </th> <th> Total page views </th>
          </tr>
        </thead>
        <tbody>
          {items.map(el => {
            return <StatisticTableItem {...el} />;
          })}
        </tbody>
      </table>
    </>
  );
}

export default StatisticTable;
