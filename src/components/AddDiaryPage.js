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
        isPrivate : false,
        isPublic : false,
    }

    changeStatusShared = (choice) => {
        if (choice == 1) {
            this.setState({
                isPrivate: true,
                isPublic: false
            })
        } else if (choice == 2) {
            this.setState({
                isPrivate: false,
                isPublic: true
            })
        }
    }

    // selectedStatus = (choice) => {
    //     this.setState({
    //         isPrivate: true,
    //         isPublic: false
    //     })
    // }
    
    add_story = (tp,page) => {
        console.log(this.state)
        console.log("in tpdiary")
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
        const url='http://d0fd5b5e7caf.ngrok.io/addstory/' 
        axios.post(`${url}`, formBody, {
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset-UTF-8'
            }
        }).then(res => {
            if (res.data['status']){
                console.log(res.data['data'])
                // console.log(res.data[0].id)
                console.log(res.data['data'][0].id)
                this.get_onestory(res.data['data'][0].id,page)
            }
            else {
                Alert.alert(res.data['description']);
            }
        })
    }

    get_onestory = (id,page) => {
        const url='http://d0fd5b5e7caf.ngrok.io/onestory/?id=' + id 
        console.log(url)
        axios.get(`${url}`, {})
        .then(res => {
            console.log(res.data['data'])
            this.props.navigation.navigate(NavigationName.DetailPage, {item:res.data['data'],own:'false',page:page});
        }) 
        .catch(error => {
        this.setState({ error, loading : false });
        })    
    };

    render() {
        const {tpdiary,page} = this.props.route.params;
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
                {/* <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Private" value="False" />
                    <Picker.Item label="Public" value="True" />
                </Picker> */}

                <View
                 style={
                     this.state.isPrivate == true 
                     ? styles.buttonChoiceChosen 
                     : styles.buttonChoiceNoChosen
                 }>
                <TouchableOpacity
                    onPress={() => this.changeStatusShared(1)}
                    underlayColor="#C7C7CC"
                    >
                    <Text>{"   "}Private</Text>
                </TouchableOpacity>
                </View>

                <View
                 style={
                     this.state.isPrivate == false
                     ? styles.buttonChoiceChosen 
                     : styles.buttonChoiceNoChosen
                 }>
                <TouchableOpacity
                    onPress={() => this.changeStatusShared(2)}
                    underlayColor="#C7C7CC"
                    >
                    <Text>{"   "}Public</Text>
                </TouchableOpacity>
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
    buttonChoiceChosen: {
        backgroundColor: "#66918F",
        borderColor: "#66918F",
        borderWidth: 1,
        borderRadius: 1,
        marginBottom: 10,
        width: "100%",
        height: 52,
        justifyContent: "space-around",
      },
      buttonChoiceNoChosen: {
        backgroundColor: "#F0F0F0",
        borderColor: "#F0F0F0",
        borderWidth: 1,
        borderRadius: 1,
        marginBottom: 10,
        width: "100%",
        height: 52,
        justifyContent: "space-around",
      },
})

export default AddDiaryPage