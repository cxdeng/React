import React from "react";
import ReactDOM from 'react-dom'
import App from './App'
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
    // 次数需要用Provider包裹App组件，目的是让App所有后代容器组件都能接收到store
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)