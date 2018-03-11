const INITIAL_STATE = { summary: { credit: 0, debt: 0 } };

/**
* @param {Object} state - Default application state
* @param {Object} action - Action from action creator
* @returns {Object} New state
*/

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'BILLING_SUMMARY_FETCHED':
      return { ...state, summary: action.payload.data };
    default:
      return state;
  }
}
