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
import axios from 'axios';
//import { Actions } from 'react-native-mobx/index';
import {NavigationName} from '../constants';


class FirstPage extends Component {
    
    state = {
        token: "",
    }

    constructor(props) {
        super(props);
    }

    user_logout = () => {
        // this.state.token = tk
        // console.log(this.state.token)
        const url='http://d0fd5b5e7caf.ngrok.io/logout/' 
        axios.post(`${url}`,{
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset-UTF-8',
            }
        }).then(res => {
            if (res.data['status']) {
                this.props.navigation.navigate(NavigationName.HomePage);
                // Alert.alert(res.data['description']);
            }
            else {
                Alert.alert(res.data['description']);
            }
        })
    }
    render() {
        return (
             <View style={styles.container}>
                <Text>FirstPage</Text>
                <TouchableOpacity style={styles.loginBtn}
                    onPress={() => {
                        this.props.navigation.navigate(NavigationName.HappyDiaryPage, {refresh:'False'});
                    }}
                >
                    <Text style={styles.loginText}>HAPPY DIARY</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn}
                    onPress={() => {
                        this.props.navigation.navigate(NavigationName.SadDiaryPage, {refresh:'False'});
                    }}
                >
                    <Text style={styles.loginText}>SAD DIARY</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn}
                    onPress={() => {
                        this.props.navigation.navigate(NavigationName.SocialPage, {});
                    }}
                >
                    <Text style={styles.loginText}>SOCIAL SHARING</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn}
                    onPress={() => {
                        this.props.navigation.navigate(NavigationName.SettingPage, {});
                    }}
                >
                    <Text style={styles.loginText}>SETTING</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn}
                    onPress={() => {
                        this.user_logout()
                    }}
                >
                    <Text style={styles.loginText}>LOGOUT</Text>
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

export default FirstPage