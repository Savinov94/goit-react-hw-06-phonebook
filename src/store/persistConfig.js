import storage from 'redux-persist/lib/storage';
import { createTransform } from 'redux-persist';
import { Map } from 'immutable';

const immutableTransform = createTransform(
  (inboundState, key) => Map(inboundState),
  (outboundState, key) => outboundState.toJS()
);

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
  transforms: [immutableTransform],
};

export default persistConfig;
