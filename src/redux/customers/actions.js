const actions = {
  REMOVE_CUMSTOMER: "REMOVE_CUSTOMER",
  SAVE_CHANGES:"SAVE_CHANGES",

  removeCustomer: key => ({
    type: actions.REMOVE_CUMSTOMER,
    key
  }),

  saveChanges: (key,row) =>({
    type :actions.SAVE_CHANGES,
    key,
    row
  })
};

export default actions