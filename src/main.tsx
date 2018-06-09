import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { App } from "./app";
import reducers from "./reducers";

const enhancer = devToolsEnhancer({});
const store = createStore(reducers, enhancer);

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

render(<Root />, document.getElementById("root"));
