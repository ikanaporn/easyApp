import React,{ Component } from 'react';
import { StyleSheet, 
    Text, 
    View, 
    TouchableOpacity,
    ImageBackground,
} 
from 'react-native';
import axios from 'axios';
import {NavigationName} from '../constants';


class FirstPage extends Component {
    
    state = {
        token: "",
    }

    constructor(props) {
        super(props);
    }

    user_logout = () => {
        const url='http://3afb1367df48.ngrok.io/logout/' 
        axios.post(`${url}`,{
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset-UTF-8',
            }
        }).then(res => {
            if (res.data['status']) {
                this.props.navigation.navigate(NavigationName.HomePage);
            }
            else {
                Alert.alert(res.data['description']);
            }
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style= { styles.backgroundImage } source={require("../../assets/img/bg.jpg")} >
                    <Text style={styles.textHeader} >BOTAN</Text>
                    <View style={styles.menuContainer}>
                        <TouchableOpacity style={styles.menuBtn}
                            onPress={() => {
                                this.props.navigation.navigate(NavigationName.HappyDiaryPage, {refresh:'False'});
                            }}
                        >
                            <Text style={styles.happyText}>HAPPY DIARY</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuBtn}
                            onPress={() => {
                                this.props.navigation.navigate(NavigationName.SadDiaryPage, {refresh:'False'});
                            }}
                        >
                            <Text style={styles.sadText}>SAD DIARY</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuBtn}
                            onPress={() => {
                                this.props.navigation.navigate(NavigationName.SocialPage, {});
                            }}
                        >
                            <Text style={styles.ssText}>SOCIAL SHARING</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuBtn}
                            onPress={() => {
                                this.props.navigation.navigate(NavigationName.SettingPage, {});
                            }}
                        >
                            <Text style={styles.settingText}>SETTING</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuBtn}
                            onPress={() => {
                                this.user_logout()
                            }}
                        >
                            <Text style={styles.logoutText}>LOGOUT</Text>
                        </TouchableOpacity>     
                    </View>    
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
    textHeader:{
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        textAlign: 'center',
        fontSize: 24,
        paddingTop: 30,
        backgroundColor: "#fa8072",
        color:"#ffffff"
    },
    
    happyText: {
        fontSize: 18,
        color: '#FFB603',
    },
    sadText: {
        fontSize: 18,
        color: '#0063AA',
    },
    ssText: {
        fontSize: 18,
        color: '#2FA16B',
    },
    settingText: {
        fontSize: 18,
        color: '#0063AA',
    },
    logoutText: {
        fontSize: 18,
        color: '#F9404B',
    },
    menuContainer:{
        width:"70%",
        borderRadius:25,
        justifyContent:"center",
        alignItems:"center",
        marginTop:40,
        marginBottom:30
    },
    menuBtn:{
        width:"70%",
        backgroundColor:"#f4f4f4",
        borderColor: "#fa8072",
        borderWidth: 1,
        borderRadius:20,
        height:50,
        justifyContent:"center",
        alignItems:"center",
        marginTop:10,
        marginBottom:40
    },
})

export default FirstPage