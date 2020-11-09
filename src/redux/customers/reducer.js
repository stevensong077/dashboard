const defaultState = {
  data: [
    {
      key: 1,
      name: "Edward King",
      email: Math.random().toString(36).substr(2) + "@gmail.com",
      phone: "04" + Math.floor(10000000 + Math.random() * 90000000),
      address: "London, Park Lane no.1",
      signup: "17/06/2019",
      status: "active",
    },
    {
      key: 2,
      name: "Joy Steve",
      email: Math.random().toString(36).substr(2) + "@gmail.com",
      phone: "04" + Math.floor(10000000 + Math.random() * 90000000),
      address: "London, Park Lane no.1",
      signup: "17/06/2019",
      status: "achived",
    },
    {
      key: 3,
      name: "Edward King",
      email: Math.random().toString(36).substr(2) + "@gmail.com",
      phone: "04" + Math.floor(10000000 + Math.random() * 90000000),
      address: "London, Park Lane no.1",
      signup: "17/06/2019",
      status: "active",
    },
    {
      key: 4,
      name: "Edward King",
      email: Math.random().toString(36).substr(2) + "@gmail.com",
      phone: "04" + Math.floor(10000000 + Math.random() * 90000000),
      address: "London, Park Lane no.1",
      signup: "17/06/2019",
      status: "active",
    },
  ],
};

// export default (state = defaultState, type, ...action) => {
//     switch(type){
//         case actions.REMOVE_CUMSTOMER:
//         return{
//             ...state,
//         }
//     }
// };

export default (state = defaultState, action) => {
  if ((action.type = "REMOVE_CUSTOMER")) {
    const newState = JSON.parse(JSON.stringify(state));
    const newData = newState.data.filter((item) => item.phone !== action.index);
    newState.data = newData;
    return newState;
  }
  return state;
};
