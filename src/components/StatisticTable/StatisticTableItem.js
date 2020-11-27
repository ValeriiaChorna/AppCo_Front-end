import React, { Component } from 'react';
import routes from '../../routes';

class StatisticTableItem extends Component {
  clickHandler = () => {
    const { history } = this.props.location;
    const { user_id } = this.props.item;
    history.push(routes.STATS + user_id);
  };

  render() {
    const {
      user_id,
      user_inf,
      Total_page_views,
      Total_clicks,
    } = this.props.item;
    return (
      <tr onClick={this.clickHandler}>
        <td> {user_id} </td> <td> {user_inf.first_name} </td>
        <td> {user_inf.last_name} </td> <td> {user_inf.email} </td>
        <td> {user_inf.gender} </td> <td> {user_inf.ip_address} </td>
        <td> {Total_clicks.toLocaleString('ru')} </td>
        <td> {Total_page_views.toLocaleString('ru')} </td>
      </tr>
    );
  }
}

export default StatisticTableItem;
