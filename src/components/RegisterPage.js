import React,{ Component } from 'react';
import { StyleSheet, 
    Text, 
    View, 
    TextInput,
    TouchableOpacity,
    Image, 
    Alert
} 
from 'react-native';
import axios from 'axios';
import {NavigationName} from '../constants';

class RegisterPage extends Component {
    state = {
        email: "",
        username: "",
        password: "",
        con_password: "",
    }

    user_register = () => {
        console.log(this.state)
        let details = {
            'email' : this.state.email,
            'username' : this.state.username,
            'password' : this.state.password,
            'con_password' : this.state.con_password,
        };
        let formBody = [];
        for (let property in details) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        const url='http://3685db6d73f3.ngrok.io/register/' 
        axios.post(`${url}`, formBody, {
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset-UTF-8'
            }
        }).then(res => {
            if (res.data['register']) {
                Alert.alert(res.data['description']);
                this.props.navigation.navigate(NavigationName.LoginPage);
            }
            else {
                Alert.alert(res.data['description']);
            }
        })
        
    }

    render() {
        
        return (
             <View style={styles.container}>
                <View style={styles.inputView} >
                    <TextInput  
                        
                        style={styles.inputText}
                        placeholder="email" 
                        placeholderTextColor="#D5D8DC"
                        onChangeText={text => this.setState({email:text})}
                    />
                </View>
                <View style={styles.inputView} >
                    <TextInput  
                        style={styles.inputText}
                        placeholder="username" 
                        placeholderTextColor="#D5D8DC"
                        onChangeText={text => this.setState({username:text})}
                    />
                </View>
                <View style={styles.inputView} >
                    <TextInput  
                        style={styles.inputText}
                        placeholder="password" 
                        placeholderTextColor="#D5D8DC"
                        secureTextEntry={true}
                        onChangeText={text => this.setState({password:text})}
                    />
                </View>
                <View style={styles.inputView} >
                    <TextInput  
                        style={styles.inputText}
                        placeholder="confirm password" 
                        placeholderTextColor="#D5D8DC"
                        secureTextEntry={true}
                        onChangeText={text => this.setState({con_password:text})}
                    />
                </View>
            
                <TouchableOpacity style={styles.loginBtn}
                    onPress={() => {
                        this.user_register()
                    }}
                >
                    <Text style={styles.loginText}>SIGN UP</Text>
                    
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

export default RegisterPage