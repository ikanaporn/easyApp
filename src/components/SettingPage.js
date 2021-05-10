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
import {Fab, Icon} from 'native-base';
import axios from 'axios';
//import { Actions } from 'react-native-mobx/index';
import {NavigationName} from '../constants';


class SettingPage extends Component {

    constructor(props) {
        super(props);
    
        this.state  = {
            username : '',
            email : '',
            set : false,
        }
    }
    get_user = () => {
        const url= 'http://d0fd5b5e7caf.ngrok.io/profile/' 
        axios.get(`${url}`, {}).then(res => {
            console.log(res.data['user'])
            if (res.data['status']) {
                this.setState({
                    username : res.data['user'],
                    email : res.data['email'],
                    set : true,
                });
            }
            console.log(this.state)
        })
    }

    user(){
        this.get_user()
    }

    set_user = () => {
        const url= 'http://d0fd5b5e7caf.ngrok.io/profile/' 
        console.log(this.state)
        let details = {
            'username' : this.state.username,
            'email' : this.state.email,
        };
        let formBody = [];
        for (let property in details) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        axios.post(`${url}`, formBody ,{
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset-UTF-8'
            }
        }).then(res => {
            if (res.data['status']) {
                Alert.alert("Edit Profile Success");
            }
            else {
                Alert.alert("Edit Profile Fail");
            }
        })
    }
    render() {
        if (!this.state.set)  {
            this.user()
        }
        return (
             <View style={styles.container}>
                <Text>SettingPage</Text>
                
                <TouchableOpacity style={styles.loginBtn}
                    onPress={() => {
                        this.props.navigation.navigate(NavigationName.FirstPage, {});
                    }}
                >
                    <Text style={styles.signInText}>BACK</Text>
                </TouchableOpacity>
                <View style={styles.inputView} >
                    <TextInput  
                        style={styles.inputText}
                        value={this.state.username}
                        placeholderTextColor="#000000"
                        onChangeText={text => this.setState({username:text})}
                    />
                </View>
                <View style={styles.inputView} >
                    <TextInput  
                        style={styles.inputText}
                        value={this.state.email}
                        placeholderTextColor="#000000"
                        onChangeText={text => this.setState({email:text})}
                    />
                </View>
                <TouchableOpacity style={styles.loginBtn}
                    onPress={() => {
                        this.set_user()
                    }}
                >
                    <Text style={styles.loginText}>SUBMIT</Text>
                    
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
        color: '#ffffff',
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

export default SettingPage