import React from 'react';
import { Provider } from "react-redux";

import Main from './src/main';
import store from './src/configureStore';

export default class App extends React.Component {
    _activate = () => {
        activateKeepAwake();
    };
    render() {
        console.disableYellowBox = true;
        console.ignoredYellowBox = true;
        return (
            <Provider store={store}>
                <Main />
            </Provider>
        );
    }
}
