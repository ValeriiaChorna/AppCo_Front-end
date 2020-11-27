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
      />
    </div>
  );
}

export default StatPageNav;

// const StatPageNav = () => {
//     const firstPage = 1;
//     const numberOfvisiblePages = 5;
//     const pageArray = Array.apply(null, Array(numberOfvisiblePages));

//     const handleChange = () => {};
//     return (
//       <div className="statPageNav">
//         <button type="button" className="button goBack">
//           <Arrow />
//         </button>
//         <form>
//           {pageArray.map((el, i) => {
//             return (
//               <label className="answerItem" key={i}>
//                 <input
//                   type="radio"
//                   value={firstPage + i}
//                   //   checked={i === selectedAnswInd}
//                   onChange={handleChange}
//                   className="toPageButton"
//                   key={i}
//                 />
//                 {firstPage + i}
//               </label>
//             );
//           })}
//         </form>
//         <button type="button" className="button goForth">
//           <Arrow />
//         </button>
//       </div>
//     );
//   };
