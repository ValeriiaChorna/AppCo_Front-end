const getLoading = state => state.statistic.loading;

const getError = state => state.statistic.error;

const getStatistic = state => state.statistic.items;

export default {
  getLoading,
  getError,
  getStatistic,
};
