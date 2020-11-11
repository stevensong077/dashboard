import actions from "./actions";
import deepCopy from "../../utils/deepCopy";
import getCustomers from "../../apis/customers";

function getNewData(prevDataArr, key, row) {
  // const newState = deepCopy(prevDataArr); // JSON.parse(JSON.stringify(state))
  const newArr = prevDataArr.forEach((item) => {
    if (item.key === key) {
      return { ...item, ...row };
    }
  });
  return newArr;
}

export default (state = getCustomers(), action) => {
  switch (action.type) {
    case actions.REMOVE_CUSTOMER: {
      const newState = { ...state };
      const newData = newState.data.filter((item) => item.key !== action.key);
      newState.data = newData;
      return newState;
    }
    case actions.SAVE_CHANGES: {
      const newState = deepCopy(state); // JSON.parse(JSON.stringify(state))
      const index = newState.data.findIndex((item) => action.key === item.key);
      const arr = [...newState.data];
      if (index > -1) {
        const item = arr[index];
        arr.splice(index, 1, { ...item, ...action.row });
        newState.data = [...arr];
      } else {
        newState.data = [...arr, action.row];
      }
      return newState;
      // return {
      //   ...state,
      //   data: getNewData(state.data, action.key, action.row)
      // }
    }
    case actions.FILTER_CUSTOMERS: {
      const newState = deepCopy(state);
      const originData = getCustomers().data;
      if (action.value === "active") {
        const newData = originData.filter((item) => item.status === "active");
        newState.data = newData;
        return newState;
      } else if (action.value === "archived") {
        const newData = originData.filter((item) => item.status === "archived");
        newState.data = newData;
        return newState;
      } else {
        newState.data = originData;
        return newState;
      }
    }
    case actions.SEARCH_CUSTOMER: {
      const newState = deepCopy(state);
      const originData = getCustomers().data;
      const newData = originData.filter(
        (item) =>
          item.name.toLowerCase().indexOf(action.value.toLowerCase()) > -1 ||
          item.email.toLowerCase().indexOf(action.value.toLowerCase()) > -1 ||
          item.phone.toLowerCase().indexOf(action.value.toLowerCase()) > -1
      );
      newState.data = newData;
      return newState;

    }
    default:
      return state;
  }
};
