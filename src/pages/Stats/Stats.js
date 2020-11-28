import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navigation from '../../components/Navigation';
import StatisticTable from '../../components/StatisticTable';
import StatPageNav from '../../components/StatPageNav';
import Spinner from '../../components/Spinner';

import statisticOperations from '../../redux/statistic/statisticOperations';
import staticSelectors from '../../redux/statistic/statisticSelectors';

function Stats(location) {
  const dispatch = useDispatch();

  const items = useSelector(staticSelectors.getStatistic).usersStatisticList;
  const isLoaded = useSelector(staticSelectors.getLoading);
  const error = useSelector(staticSelectors.getError);

  useEffect(() => {
    dispatch(statisticOperations.fetchStatistic());
  }, [dispatch]);

  return (
    <div className="statspage">
      {isLoaded && <Spinner />}
      {error && <div> Ops! Something went wrong... </div>}
      <Navigation location={location} />
      {items && <StatisticTable items={items} location={location} />}
      <StatPageNav />
    </div>
  );
}

export default Stats;
