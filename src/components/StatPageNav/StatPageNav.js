import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from 'react-js-pagination';
import statisticOperations from '../../redux/statistic/statisticOperations';
import staticSelectors from '../../redux/statistic/statisticSelectors';
import { ReactComponent as Arrow } from '../../img/arrow.svg';

function StatPageNav() {
  const dispatch = useDispatch();
  const [activePage, setPage] = useState(1);
  const totalPages = useSelector(staticSelectors.getStatistic).totalPages;

  const handleChange = pageNumber => {
    if (pageNumber === activePage) {
      return;
    }
    dispatch(statisticOperations.fetchStatistic(pageNumber));
    setPage(pageNumber);
  };

  return (
    <div className="statPageNav">
      <Pagination
        hideFirstLastPages
        activePage={activePage}
        itemsCountPerPage={1}
        totalItemsCount={totalPages + 1}
        pageRangeDisplayed={5}
        onChange={handleChange}
        itemClass="pagination-items"
        prevPageText={
          <div className="prevPage">
            <Arrow className="arrow" />
          </div>
        }
        nextPageText={
          <div className="nextPage">
            <Arrow className="arrow" />
          </div>
        }
      />{' '}
    </div>
  );
}

export default StatPageNav;
