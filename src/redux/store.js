import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import statisticReducer from './statistic/statisticReducer';

const StatisticPersistConfig = {
  key: 'statisticList',
  storage,
  whitelist: ['items'],
};

export const store = configureStore({
  reducer: {
    statistic: persistReducer(StatisticPersistConfig, statisticReducer),
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
