import React,{ Component } from 'react';
import { StyleSheet, 
    Text, 
    View, 
    TextInput,
    TouchableOpacity,
    Image 
} 
from 'react-native';

import {NavigationName} from '../constants';


class LoginPage extends Component {
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

               
                <View style={styles.inputView} >
                    <TextInput  
                        
                        style={styles.inputText}
                        placeholder="Email..." 
                        placeholderTextColor="#D5D8DC "
                        onChangeText={text => this.setState({email:text})}
                    />
                </View>
                <View style={styles.inputView} >
                    <TextInput  
                        style={styles.inputText}
                        placeholder="Password..." 
                        placeholderTextColor="#D5D8DC "
                        secureTextEntry={true}
                        onChangeText={text => this.setState({password:text})}
                    />
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgot}>Forgot Password ?</Text>
                </TouchableOpacity>
            
                <TouchableOpacity style={styles.loginBtn}
                onPress={() => {
                    this.props.navigation.navigate(NavigationName.HomePage, {
                    });
                }}
                >
                    <Text style={styles.loginText}>LOGIN</Text>
                    
                </TouchableOpacity>

                <TouchableOpacity
                    // onPress={() => {
                    //     this.props.navigation.navigate(NavigationName.HomePage, {
                    //     });
                    // }}
                >
                    <Text style={styles.signInText}>Signup</Text>
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
    logo:{
        fontWeight:"bold",
        fontSize:50,
        color:"#79a3b1",
        marginBottom:40,
        justifyContent: 'center'

    },
    inputView:{
        width:"80%",
        backgroundColor:"#fff",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20,
    
        
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
        color: '#fa8072',
    },
    forgot:{
        color:"#fa8072",
        fontSize:14
    },
    loginBtn:{
        width:"80%",
        backgroundColor:"#fa8072",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
    },
})

export default LoginPage