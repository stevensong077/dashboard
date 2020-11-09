const actions = {
  REMOVE_CUMSTOMER: "REMOVE_CUSTOMER",

  removeCustomer: index => ({
    type: actions.REMOVE_CUMSTOMER,
    index
  }),
};

export default actions