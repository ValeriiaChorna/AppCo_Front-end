import { createAction } from '@reduxjs/toolkit';

const statisticRequest = createAction('statistic/fetchStatisticRequest');
const statisticSuccess = createAction('statistic/fetchStatisticSuccess');
const statisticError = createAction('statistic/fetchStatisticError');

const statisticByIdRequest = createAction(
  'statistic/fetchStatisticByIdRequest',
);
const statisticByIdSuccess = createAction(
  'statistic/fetchStatisticByIdSuccess',
);
const statisticByIdError = createAction('statistic/fetchStatisticByIdError');

export default {
  statisticRequest,
  statisticSuccess,
  statisticError,
  statisticByIdRequest,
  statisticByIdSuccess,
  statisticByIdError,
};
