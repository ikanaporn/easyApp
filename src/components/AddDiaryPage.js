import React,{ Component, useState } from 'react';
import { StyleSheet, 
    Text, 
    View, 
    TextInput,
    TouchableOpacity,
} 
from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Fab, Icon, Title} from 'native-base';
import axios from 'axios';
//import { Actions } from 'react-native-mobx/index';
import {NavigationName} from '../constants';


class AddDiaryPage extends Component {
   
    state = {
        title : "",
        details : "",
    }
    
    add_story = (tp) => {
        console.log(this.state)
        console.log(tp)
        let data = {
            'title' : this.state.title,
            'type_h' : tp,
            'detail' : this.state.details,
            'status_p' : 'True',
        };
        let formBody = [];
        for (let property in data) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(data[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        const url='http://3685db6d73f3.ngrok.io/addstory/' 
        axios.post(`${url}`, formBody, {
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset-UTF-8'
            }
        }).then(res => {
            if (res.data['stuts']) {
                this.props.navigation.navigate(NavigationName.HappyDiaryPage,{});
            }
            else {
                Alert.alert(res.data['description']);
            }
        })
    }

    render() {
        const {tpdiary} = this.props.route.params;
        // const [selectedValue, setSelectedValue] = useState("False");
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
                    
                </TouchableOpacity>
                <View style={styles.inputView} >
                    <TextInput  
                        style={styles.inputText}
                        placeholder="Title" 
                        placeholderTextColor="#D5D8DC"
                        onChangeText={text => this.setState({title:text})}
                    />
                </View>
                <View style={styles.inputView} >
                    <TextInput  
                        style={styles.inputText}
                        placeholder="Detail" 
                        placeholderTextColor="#D5D8DC"
                        onChangeText={text => this.setState({details:text})}
                    />
                </View>
                {/* <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Private" value="False" />
                    <Picker.Item label="Public" value="True" />
                </Picker> */}

                <TouchableOpacity style={styles.loginBtn}
                    onPress={() => {
                        this.add_story(tpdiary)
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

export default AddDiaryPage