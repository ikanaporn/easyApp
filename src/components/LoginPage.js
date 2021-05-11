import React,{ Component } from 'react';
import { StyleSheet, 
    Text, 
    View, 
    TextInput,
    TouchableOpacity,
    ImageBackground, 
    Alert,
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
                <ImageBackground style= { styles.backgroundImage } source={require("../../assets/img/login.png")} >
                    <View style={styles.inputView} >
                        <TextInput  
                            
                            style={styles.inputText}
                            placeholder="Username" 
                            placeholderTextColor="#d5d8dc"
                            onChangeText={text => this.setState({username:text})}
                        />
                    </View>
                    <View style={styles.inputView} >
                        <TextInput  
                            style={styles.inputText}
                            placeholder="Password..." 
                            placeholderTextColor="#d5d8dc"
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
                </ImageBackground>
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
    backgroundImage:{
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    inputView:{
        width:"70%",
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
        fontSize: 18,
        color: '#797575',
    },
    forgot:{
        color:"#fa8072",
        fontSize:14
    },
    loginBtn:{
        width:"70%",
        backgroundColor:"#F8CC5C",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        marginBottom:60
    },
})

export default LoginPage