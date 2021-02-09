// import { registerRootComponent } from 'expo';

// import App from './App';

// // registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// // It also ensures that whether you load the app in the Expo client or in a native build,
// // the environment is set up appropriately
// registerRootComponent(App);
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/main';
import { Provider } from 'react-redux';
import configureStore from './src/configureStore'

const store = configureStore();
const EasyApp =()=>(
    <Provider store={store}>
        <App/>
    </Provider>
)

AppRegistry.registerComponent('easyApp', () => EasyApp);
