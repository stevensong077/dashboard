const actions = {
  GET_ITEMS: "GET_ITEMS",
  GET_ITEMS_SUCCESS: "GET_ITEMS_SUCCESS",
  GET_ITEMS_FAIL: "GET_ITEMS_FAIL",
  SUBMIT: "SUBMIT",

  SHOW_ITEMS: "SHOW_ITEMS",
  SHOW_ITEMS_SUCCESS: "SHOW_ITEMS_SUCCESS",
  SHOW_ITEMS_FAIL: "SHOW_ITEMS_FAIL",

  getItem: () => ({
    type: actions.GET_ITEMS,
  }),

  submit: (values) => ({
    type: actions.SUBMIT,
    values,
  }),
  showItems: () => ({
    type: actions.SHOW_ITEMS,
  }),
};

export default actions;
