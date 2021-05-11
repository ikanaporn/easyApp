import React,{ Component } from 'react';
import { StyleSheet, 
    Text, 
    View, 
    TouchableOpacity,
} 
from 'react-native';
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
                 <Text>HomePage</Text>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate(NavigationName.RegisterPage, {});
                    }}
                >
                    <Text style={styles.signInText}>SIGN UP</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate(NavigationName.LoginPage, {});
                    }}
                >
                    <Text style={styles.signInText}>LOGIN</Text>
                </TouchableOpacity>
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