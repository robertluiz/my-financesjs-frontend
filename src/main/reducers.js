import { combineReducers } from 'redux';

const rootRecuder = combineReducers({
  dashboard: () => ({
    summary: {
      credit: 100,
      debt: 50,
    },
  }),
});

export default rootRecuder;
