/* eslint-disable import/no-anonymous-default-export */
import actions from "./actions";
import { deepCopy } from "../../utils/utils";

const defaultState = {
  data: [
    {
      key: 1,
      sku: 1582757386508,
      name: "Termter Ginger Tea 15P 225G",
      price: 8.99,
      discount: "No Discount",
      stock: 124,
      categories: "Ginger",
      status: "active",
      comment: "",
    },
    {
      key: 2,
      sku: 3728752334557,
      name: "Ourhome Firm Tofu340g",
      price: "Under Discount",
      discount: 1.79,
      stock: 43,
      categories: "Chinese-Tofu",
      status: "archived",
      comment: "in large demand",
    },
    {
      key: 3,
      sku: 8972312344551,
      name: "Ourhome Soft Tofu Tube 340g",
      price: "Under Discount",
      discount: 1.74,
      stock: 19,
      categories: "kroean-Tofu",
      status: "active",
      comment: "",
    },
    {
      key: 4,
      sku: 1982367243512,
      name: "MANGO 1EA",
      price: 2.99,
      discount: "No Discount",
      stock: 0,
      categories: "Mango Tea",
      status: "active",
      comment: "",
    },
    {
      key: 5,
      sku: 8809213699122,
      name: "Termter Ginger Tea 15P 225G",
      price: 2.5,
      discount: "No Discount",
      stock: 89,
      categories: "Ginger",
      status: "archived",
      comment: "",
    },
    {
      key: 6,
      sku: 9817423436556,
      name: "Hanaro Round Multi Roaster 32CM",
      price: 28,
      discount: "No Discount",
      stock: 789,
      categories: "Roaster",
      status: "active",
      comment: null,
    },
  ],
  items: {},
  isFetchingItems: false,
};

export default (state = defaultState, { type, ...action }) => {
  switch (type) {
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
