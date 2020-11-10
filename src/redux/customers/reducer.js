const generatePhone = () => {
  return "04" + Math.floor(10000000 + Math.random() * 90000000);
};

const generateEmail = () => {
  return Math.random().toString(36).substr(2) + "@gmail.com";
};
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
      status: "achived",
    },
    {
      key: 3,
      name: "Edward King",
      email: "kk7o1uizqlm@gmail.com",
      phone: "0421781332",
      address: "London, Park Lane no.1",
      signup: "17/06/2019",
      status: "active",
    },
    {
      key: 4,
      name: "Edward King",
      email: "417tldi4ezp@gmail.com",
      phone: "0441094612",
      address: "London, Park Lane no.1",
      signup: "17/06/2019",
      status: "active",
    },
  ],
};

// export default (state = defaultState, {type, ...actions}) => {
//     switch(type){
//         case actions.REMOVE_CUMSTOMER:
//         return{
//             ...state.data.filter((item)=>item.key !== actions.index)
//         }
//         default: return state;
//     }
// };

export default (state = defaultState, action) => {
  switch (action.type) {
    case "REMOVE_CUSTOMER": {
      const newState = JSON.parse(JSON.stringify(state));
      const newData = newState.data.filter((item) => item.key !== action.key);
      newState.data = newData;
      return newState;
    }
    case "SAVE_CHANGES": {
      const newState = JSON.parse(JSON.stringify(state));
      const index = newState.data.findIndex((item) => action.key === item.key);
      if (index > -1) {
        const item = newState.data[index];
        newState.data.splice(index, 1, { ...item, ...action.row });
        return newState;
      } else {
        newState.data.push(action.row);
      }
    }
    default:
      return state;
  }
};
