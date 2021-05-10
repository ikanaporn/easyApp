import React,{ Component } from 'react';
import { StyleSheet, 
    Text, 
    View, 
    TextInput,
    TouchableOpacity,
        Alert
} 
from 'react-native';
import {Fab, Icon} from 'native-base';
import axios from 'axios';
//import { Actions } from 'react-native-mobx/index';
import {NavigationName} from '../constants';


class DetailPage extends Component {
    constructor(props) {
        super(props);
        this.state  = {
            status : "",
            type : ""
        }
    }

    check = (item) => {
        if (item[0].status) {
            this.state.status = "Private"
        }
        else {
            this.state.status = "Public"
        }
        if (item[0].type) {
            this.state.type = "Happy"
        }
        else {
            this.state.type = "Sad"
        }
    }
    
    delete_story = (id) => {
        let details = {
            'id' : id,
        };
        let formBody = [];
        for (let property in details) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        const url='http://d0fd5b5e7caf.ngrok.io/mystory/?' + formBody
        console.log(url)
        console.log(formBody)
        axios.delete(`${url}`, {
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset-UTF-8'
            }
        }).then(res => {
            if (res.data['status']) {
                Alert.alert(res.data['description']);
                this.props.navigation.navigate(NavigationName.HappyDiaryPage,{refresh:'False'});
            }
            else {
                Alert.alert(res.data['description']);
            }
        })
    }
    check_own = (item,own) => {
        if (own=='true') {
            return (
            <TouchableOpacity style={styles.loginBtn}
                onPress={() => {
                    this.delete_story(item[0].id)
                }}
            >
                <Text style={styles.loginText}>DELETE</Text>
            </TouchableOpacity>
            );
        }
    }
    re_page = (page) => {
        if (page=='HappyPage'){
            return (
                <TouchableOpacity style={styles.loginBtn}
                    onPress={() => {
                        this.props.navigation.navigate(NavigationName.HappyPage, {});
                    }}
                >
                    <Text style={styles.loginText}>BACK</Text>
                </TouchableOpacity>
            );
        }
        if (page=='HappyDiaryPage'){
            return (
                <TouchableOpacity style={styles.loginBtn}
                    onPress={() => {
                        this.props.navigation.navigate(NavigationName.HappyDiaryPage, {});
                    }}
                >
                    <Text style={styles.loginText}>BACK</Text>
                </TouchableOpacity>
            );
        }
        if (page=='SadPage'){
            return (
                <TouchableOpacity style={styles.loginBtn}
                    onPress={() => {
                        this.props.navigation.navigate(NavigationName.SadPage, {});
                    }}
                >
                    <Text style={styles.loginText}>BACK</Text>
                </TouchableOpacity>
            );
        }
        if (page=='SadDiaryPage'){
            return (
                <TouchableOpacity style={styles.loginBtn}
                    onPress={() => {
                        this.props.navigation.navigate(NavigationName.SadDiaryPage, {});
                    }}
                >
                    <Text style={styles.loginText}>BACK</Text>
                </TouchableOpacity>
            );
        }
    }
    render() {
        const {item,own,page} = this.props.route.params;
        this.check(item);
        console.log(page)
        return (
             <View style={styles.container}>
                <Text>DetailPage</Text>
                {this.re_page(page)}
                <Text>Title : {item[0].title}</Text>
                <Text>Detail : {item[0].detail}</Text>
                <Text>Status : {this.state.status}</Text>
                <Text>Type : {this.state.type}</Text>
                {this.check_own(item,own)}
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

export default DetailPage