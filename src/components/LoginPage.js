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

class LoginPage extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        username:"",
        password:""
    }
    user_login = () => {
        let details = {
            'username' : this.state.username,
            'password' : this.state.password,
        };
        let formBody = [];
        for (let property in details) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        const url= 'http://3afb1367df48.ngrok.io/login/' 
        axios.post(`${url}`, formBody, {
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset-UTF-8'
            }
        }).then(res => {
            if (res.data['status']) {
                this.props.navigation.navigate(NavigationName.FirstPage,{});
            }
            else {
                Alert.alert("Username or Password fail");
            }
        })
    }

    render() {
        
        return (
             <View style={styles.container}>
                <View style={{justifyContent: 'center',alignItems: 'center', marginBottom : 50 }}>
                    <Image
                        source={require("../../assets/img/logo.jpg")}
                        resizeMode="contain"
                        style={{ 
                            width: 100,
                            height: 100, 
                            borderRadius: 90,
                        }}
                    />
                </View>
                <View style={styles.inputView} >
                    <TextInput  
                        
                        style={styles.inputText}
                        placeholder="Username" 
                        placeholderTextColor="#D5D8DC "
                        onChangeText={text => this.setState({username:text})}
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
            
                <TouchableOpacity style={styles.loginBtn}
                    onPress={() => {
                        this.user_login()
                    }}
                >
                    <Text style={styles.loginText}>LOGIN</Text>
                    
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