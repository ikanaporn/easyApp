import React,{ Component } from 'react';
import { StyleSheet, 
    Text, 
    View, 
    TextInput,
    TouchableOpacity,
    Alert,
    ImageBackground
} 
from 'react-native';
import axios from 'axios';
import {NavigationName} from '../constants';
import { Container } from 'native-base';
class RegisterPage extends Component {
    state = {
        email: "",
        username: "",
        password: "",
        con_password: "",
    }

    user_register = () => {
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
        const url='http://3afb1367df48.ngrok.io/register/' 
        axios.post(`${url}`, formBody, {
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset-UTF-8'
            }
        }).then(res => {
            if (res.data['register']) {
                Alert.alert(res.data['description'])
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
                <ImageBackground style= { styles.backgroundImage } source={require("../../assets/img/signup.png")} >
                    <Container style={styles.signupField} >
                        <View style={styles.inputView} >
                            <TextInput  
                                style={styles.inputText}
                                placeholder="email" 
                                placeholderTextColor="#d5d8dc"
                                onChangeText={text => this.setState({email:text})}
                            />
                        </View>
                        <View style={styles.inputView} >
                            <TextInput  
                                style={styles.inputText}
                                placeholder="username" 
                                placeholderTextColor="#d5d8dc"
                                onChangeText={text => this.setState({username:text})}
                            />
                        </View>
                        <View style={styles.inputView} >
                            <TextInput  
                                style={styles.inputText}
                                placeholder="password" 
                                placeholderTextColor="#d5d8dc"
                                secureTextEntry={true}
                                onChangeText={text => this.setState({password:text})}
                            />
                        </View>
                        <View style={styles.inputView} >
                            <TextInput  
                                style={styles.inputText}
                                placeholder="confirm password" 
                                placeholderTextColor="#d5d8dc"
                                secureTextEntry={true}
                                onChangeText={text => this.setState({con_password:text})}
                            />
                        </View>

                        <TouchableOpacity style={styles.loginBtn}
                            onPress={() => {
                                this.user_register()
                            }}
                        >
                            <Text style={styles.signupText}>SIGN UP</Text>
                            
                        </TouchableOpacity>
                    </Container>
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
    
    inputView:{
        width:"70%",
        backgroundColor:"#fff",
        borderRadius:25,
        height:50,
        marginBottom:10,
        justifyContent:"center",
        marginTop: 5,
        padding:20,
    
        
    },
    inputText:{
        height:50,
        color:"#456268",
        
    },
    signupText: {
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
        marginBottom:10
    },
    backgroundImage:{
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    signupField:{
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'transparent',
        marginBottom: 60
    }
})

export default RegisterPage