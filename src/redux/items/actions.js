const actions = {
  SUBMIT: "SUBMIT",

  SHOW_ITEMS: "SHOW_ITEMS",
  SHOW_ITEMS_SUCCESS: "SHOW_ITEMS_SUCCESS",
  SHOW_ITEMS_FAIL: "SHOW_ITEMS_FAIL",

  submit: (values) => ({
    type: actions.SUBMIT,
    values,
  }),
  showItems: () => ({
    type: actions.SHOW_ITEMS,
  }),
};

export default actions;
