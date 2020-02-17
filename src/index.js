import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {applyMiddleware,createStore} from "redux";
const App=()=>{
return(
    <div>
        <h1>Hello World</h1>
    </div>
)
}
const createStoreWithMiddleware = applyMiddleware()(createStore);
ReactDOM.render(
    <Provider store={createStoreWithMiddleware()}>
        <App/>
    </Provider>, document.getElementById('root'));

