import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/main';
import { Provider } from 'react-redux';
import configureStore from './src/configureStore';

const store = configureStore();
const EasyApp =()=>(
    <Provider store={store}>
        <App/>
    </Provider>
)

AppRegistry.registerComponent('easyApp', () => EasyApp);
