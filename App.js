// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>O7777777777pkkk;en up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import React from 'react';
import { Provider } from "react-redux";

import Main from './src/main';
import store from './src/configureStore'

export default class App extends React.Component {
    _activate = () => {
        activateKeepAwake();
    };
    render() {
        console.disableYellowBox = true;
        console.ignoredYellowBox = true;
        //console.log(store.getState());
        return (
            <Provider store={store}>
                <Main />
            </Provider>
        );
    }
}
