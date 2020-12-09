/* eslint-disable import/no-anonymous-default-export */
import actions from "./actions";
import { deepCopy } from "../../utils/utils";

const defaultState = {
  items: { records: [] },
  isFetchingItems: false,
};

export default (state = defaultState, { type, ...action }) => {
  switch (type) {
    case actions.GET_ITEMS: {
      return { ...state, isFetchingItems: true };
    }
    case actions.GET_ITEMS_SUCCESS: {
      return { ...state, items: action.records, isFetchingItems: false };
    }
    case actions.GET_ITEMS_FAIL: {
      return { ...state, isFetchingItems: false };
    }
    case actions.SUBMIT: {
      const newState = deepCopy(state);
      newState.data.push(action.values);
      return newState;
    }
    case actions.SHOW_ITEMS: {
      return { ...state, isFetchingItems: true };
    }
    case actions.SHOW_ITEMS_SUCCESS: {
      return { ...state, isFetchingItems: false, items: actions.items };
    }
    case actions.SHOW_ITEMS_FAIL: {
      return { ...state, isFetchingItems: false };
    }

    default:
      return state;
  }
};
