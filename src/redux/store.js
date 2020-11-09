import { createStore, combineReducers, compose } from "redux";
import rootReducer from "./rootReducer";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        trace: true,
      })
    : compose;

const store = createStore(
  combineReducers({ ...rootReducer }),
  composeEnhancers()
);

export default store;
