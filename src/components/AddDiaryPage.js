import React,{ Component } from 'react';
import { StyleSheet, 
    Text, 
    View, 
    TextInput,
    TouchableOpacity,
    // Picker,
} 
from 'react-native';
import axios from 'axios';
import {NavigationName} from '../constants';

class AddDiaryPage extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            title : "",
            details : "",
            status_p : 'True',
        }
    }

    add_story = (tp,page) => {
        let data = {
            'title' : this.state.title,
            'type_h' : tp,
            'detail' : this.state.details,
            'status_p' : this.state.status_p,
        };
        let formBody = [];
        for (let property in data) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(data[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        const url='http://3afb1367df48.ngrok.io/addstory/' 
        axios.post(`${url}`, formBody, {
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset-UTF-8'
            }
        }).then(res => {
            if (res.data['status']){
                this.get_onestory(res.data['data'][0].id,page)
            }
            else {
                Alert.alert(res.data['description']);
            }
        })
    }

    get_onestory = (id,page) => {
        const url='http://3afb1367df48.ngrok.io/onestory/?id=' + id 
        axios.get(`${url}`, {})
        .then(res => {
            this.props.navigation.navigate(NavigationName.DetailPage, {item:res.data['data'],own:'false',page:page});
        }) 
        .catch(error => {
        this.setState({ error, loading : false });
        })    
    };

    render() {
        const {tpdiary,page} = this.props.route.params;
        return (
             <View style={styles.container}>

                <Text>AddDiaryPage</Text>
                <Text>{tpdiary}</Text>
                <TouchableOpacity style={styles.loginBtn}
                    onPress={() => {
                        this.props.navigation.navigate(NavigationName.FirstPage, {
                        });
                    }}
                >
                    <Text style={styles.loginText}>BACK</Text>

                {/* <Picker
                    style={{width:'100%'}}
                    selectedValue={this.state.status_p}
                    onValueChange={(itemValue,itemIndex) => this.setState({status_p:itemValue})}
                >
                    <Picker.Item label="Private" value="True"/>
                    <Picker.Item label="Public" value="False"/>
                </Picker> */}

                </TouchableOpacity>
                <View style={styles.inputView} >
                    <TextInput  
                        style={styles.inputText}
                        placeholder="Title" 
                        placeholderTextColor="#D5D8DC "
                        onChangeText={text => this.setState({title:text})}
                    />
                </View>
                <View style={styles.inputView} >
                    <TextInput  
                        style={styles.inputText}
                        placeholder="Detail" 
                        placeholderTextColor="#D5D8DC "
                        onChangeText={text => this.setState({details:text})}
                    />
                </View>
                <TouchableOpacity style={styles.loginBtn}
                    onPress={() => {
                        this.add_story(tpdiary,page)
                    }}
                >
                    <Text style={styles.loginText}>Submit</Text>
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
        justifyContent: 'center',
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
        color:"#456268",
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
        fontSize:14,
    },
    loginBtn:{
        width:"80%",
        backgroundColor:"#fa8072",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10,
    },
})

export default AddDiaryPage