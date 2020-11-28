import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navigation from '../../components/Navigation';
import ChartLine from '../../components/ChartLine/ChartClicks';
import Spinner from '../../components/Spinner';

import statisticOperations from '../../redux/statistic/statisticOperations';
import staticSelectors from '../../redux/statistic/statisticSelectors';

const Charts = location => {
  const dispatch = useDispatch();
  const { user_inf, user_statistic } = useSelector(
    staticSelectors.getStatistic,
  );
  const isLoaded = useSelector(staticSelectors.getLoading);
  const error = useSelector(staticSelectors.getError);

  useEffect(() => {
    const { match } = location;
    const { userId } = match.params;

    dispatch(statisticOperations.fetchStatisticById(userId));
  }, [dispatch]);

  return (
    <div className="userCharts">
      {isLoaded && <Spinner />}
      {error && <div> Ops!Something went wrong... </div>}
      <Navigation location={location} />
      {user_inf && user_statistic && (
        <>
          <h3>
            {user_inf.first_name} {user_inf.last_name}
          </h3>
          <h4> Clicks </h4>
          <ChartLine data={user_statistic.statistic_data} Ykey="clicks" />
          <h4> Views </h4>
          <ChartLine data={user_statistic.statistic_data} Ykey="page_views" />
        </>
      )}
    </div>
  );
};

export default Charts;
