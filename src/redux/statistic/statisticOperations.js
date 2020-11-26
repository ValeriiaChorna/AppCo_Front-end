import statisticActions from './statisticActions';
import { getAllStatistic, getStatisticById } from '../../utils/services/api';

const fetchStatistic = (page, limit) => dispatch => {
  dispatch(statisticActions.statisticRequest());

  getAllStatistic(page, limit)
    .then(({ data }) => dispatch(statisticActions.statisticSuccess(data)))
    .catch(error => dispatch(statisticActions.statisticError(error)));
};

const fetchStatisticById = id => dispatch => {
  dispatch(statisticActions.statisticByIdRequest());

  getStatisticById(id)
    .then(({ data }) => dispatch(statisticActions.statisticByIdSuccess(data)))
    .catch(error => dispatch(statisticActions.statisticByIdError(error)));
};

export default {
  fetchStatistic,
  fetchStatisticById,
};
