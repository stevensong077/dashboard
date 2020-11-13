const actions = {
  REMOVE_CUSTOMER: "REMOVE_CUSTOMER",
  SAVE_CHANGES: "SAVE_CHANGES",
  FILTER_CUSTOMERS: "FILTER_CUSTOMERS",
  SEARCH_CUSTOMER: "SEARCH_CUSTOMER",

  removeCustomer: key => ({
    type: actions.REMOVE_CUSTOMER,
    key
  }),

  saveChanges: (key, row) => ({
    type: actions.SAVE_CHANGES,
    key,
    row
  }),

  filterCustomers: value => ({
    type: actions.FILTER_CUSTOMERS,
    value
  }),

  searchCustomer: value => ({
    type: actions.SEARCH_CUSTOMER,
    value
  })
};

export default actions;
