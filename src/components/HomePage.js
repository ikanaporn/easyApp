import React,{ Component } from 'react';
import { StyleSheet, 
    Text, 
    View, 
    TextInput,
    TouchableOpacity,
    Image 
} 
from 'react-native';
import {Fab, Icon} from 'native-base';

//import { Actions } from 'react-native-mobx/index';
import {NavigationName} from '../constants';


class HomePage extends Component {
    state = {
        email:"",
        password:""
    }
    constructor(props) {
        super(props);
       
    }
   
    render() {
        
        return (
             <View style={styles.container}>
                 <Text>Login success!</Text>
                    <Fab
                        direction="up"
                        containerStyle={{}}
                        style={{ backgroundColor: '#fa8072' }}
                        position="bottomRight"
                        //onPress={onPress}
                    >
                        <Icon name="add" />
                    </Fab>
              
             </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f4f4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    inputText:{
        height:50,
        color:"#456268"
    },
    loginText: {
        fontWeight:"bold",
        fontSize: 15,
        color: '#ffff',
    },
    signInText: {
        fontWeight:"bold",
        fontSize: 15,
        color: '#79a3b1',
    },
    forgot:{
        color:"#456268",
        fontSize:14
    },
    
})

export default HomePage