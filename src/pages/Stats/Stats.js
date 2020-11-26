import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Navigation from '../../components/Navigation';
import StatisticTable from '../../components/StatisticTable';

import statisticOperations from '../../redux/statistic/statisticOperations';
import staticSelectors from '../../redux/statistic/statisticSelectors';

function Stats() {
  const dispatch = useDispatch();
  // const [page, setPage] = useState(0);
  const items = useSelector(staticSelectors.getStatistic).usersStatisticList;
  // const isLoaded = useSelector(staticSelectors.getLoading);
  // const error = useSelector(staticSelectors.getError);

  useEffect(() => {
    dispatch(statisticOperations.fetchStatistic());
  }, [dispatch]);

  return (
    <div className="statspage">
      <Navigation />
      <StatisticTable items={items} />
    </div>
  );
}

export default Stats;
