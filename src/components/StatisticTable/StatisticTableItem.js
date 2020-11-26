import React from 'react';

const StatisticTableItem = item => {
  const { user_id, user_inf, Total_page_views, Total_clicks } = item;

  return (
    <>
      <tr>
        <td> {user_id} </td>
        <td> {user_inf.first_name} </td>
        <td> {user_inf.last_name} </td>
        <td> {user_inf.email} </td>
        <td> {user_inf.gender}</td>
        <td> {user_inf.ip_adress} </td>
        <td> {Total_clicks}</td>
        <td>{Total_page_views}</td>
      </tr>
    </>
  );
};

export default StatisticTableItem;
