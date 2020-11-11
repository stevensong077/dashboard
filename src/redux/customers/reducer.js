import actions from "./actions";
import {deepCopy,find} from "../../utils/utils";
import getCustomers from "../../apis/customers";
const defaultState = {
  data: [
    {
      key: 1,
      name: "Edward King",
      email: "y1ch0esaw3k@gmail.com",
      phone: "0447750140",
      address: "London, Park Lane no.1",
      signup: "17/06/2019",
      status: "active",
    },
    {
      key: 2,
      name: "Joy Steve",
      email: "6hy85jdpa7u@gmail.com",
      phone: "0491092826",
      address: "London, Park Lane no.1",
      signup: "17/06/2019",
      status: "archived",
    },
    {
      key: 3,
      name: "Fill Yun",
      email: "kk7o1uizqlm@gmail.com",
      phone: "0421781332",
      address: "London, Park Lane no.1",
      signup: "17/06/2019",
      status: "active",
    },
    {
      key: 4,
      name: "Smith Holy",
      email: "417tldi4ezp@gmail.com",
      phone: "0441094612",
      address: "London, Park Lane no.1",
      signup: "17/06/2019",
      status: "active",
    },
    {
      key: 5,
      name: "Qiyana Wang",
      email: "ff34wewewfezp@gmail.com",
      phone: "0441873434",
      address: "London, Park Lane no.1",
      signup: "17/06/2019",
      status: "active",
    },
    {
      key: 6,
      name: "Lee Sin",
      email: "23dwewfezp@gmail.com",
      phone: "0441873434",
      address: "London, Park Lane no.1",
      signup: "23/06/2017",
      status: "archived",
    },
  ],
  inputValue:""
};

function getNewData(prevDataArr, key, row) {
  // const newState = deepCopy(prevDataArr); // JSON.parse(JSON.stringify(state))
  const newArr = prevDataArr.forEach((item) => {
    if (item.key === key) {
      return { ...item, ...row };
    }
  });
  return newArr;
}

export default (state = defaultState, action) => {
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
        find(item.name,action.value)||find(item.email,action.value)||find(item.phone,action.value)
          // item.name.toLowerCase().indexOf(action.value.toLowerCase()) > -1 ||
          // item.email.toLowerCase().indexOf(action.value.toLowerCase()) > -1 ||
          // item.phone.toLowerCase().indexOf(action.value.toLowerCase()) > -1
      );
      newState.data = newData;
      return newState;

    }
    default:
      return state;
  }
};
