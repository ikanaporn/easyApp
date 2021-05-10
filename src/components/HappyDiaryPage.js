import React,{ Component, useState,useEffect } from 'react';
import { StyleSheet, 
    Text, 
    View, 
    TextInput,
    TouchableOpacity,
    FlatList,
} 
from 'react-native';
import {Fab, Icon} from 'native-base';
import axios from 'axios';
//import { Actions } from 'react-native-mobx/index';
import {NavigationName} from '../constants';
// import {Card} from 'react-native-paper';
// import {best_url} from './database/path_url';

class HappyDiaryPage extends Component {
    constructor(props) {
        super(props);
    
        this.state  = {
            data: [],
            loading: false,
            error: null,
            refreshing: false,
        }
    }
    
    componentDidMount() {
        this.fetchDataFromApi();
    }

    fetchDataFromApi = ()  => {
        console.log("i'm in fetch")
        const url='http://d0fd5b5e7caf.ngrok.io/mystory/?type_h=True' 
        axios.get(`${url}`, {})
        .then(res => {
            console.log("in res")
            console.log(res.data['status']);
            this.setState({
                data: res.data['data'],
                error: null,
                loading: false,
                refreshing: false
            });
        }) 
        .catch(error => {
        this.setState({ error, loading : false });
        })
    };

    handleRefresh = () => {
        this.setState(
          {
            refreshing: true
          },
          () => {
            this.fetchDataFromApi();
          }
        );
    };

    // renderData = (item) => {
    //     return(
    //         <Card>
    //             <Text>{item.title}</Text>
    //             <Text>{item.detail}</Text>
    //         </Card>
    //     )
    // };

    get_onestory = (id) => {
        const url='http://d0fd5b5e7caf.ngrok.io/onestory/?id=' + id 
        console.log(url)
        axios.get(`${url}`, {})
        .then(res => {
            this.props.navigation.navigate(NavigationName.DetailPage, {item:res.data['data'],own:'true',page:'HappyDiaryPage'});
        }) 
        .catch(error => {
        this.setState({ error, loading : false });
        })    
    };

    render() {
        // const {refresh} = this.props.route.params;
        return (
            <View style={styles.container}>
                <Text>HappyDiaryPage</Text>
                <TouchableOpacity style={styles.loginBtn}
                    onPress={() => {
                        this.props.navigation.navigate(NavigationName.FirstPage, {
                        });
                    }}
                >
                    <Text style={styles.loginText}>BACK</Text>
                    
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate(NavigationName.AddDiaryPage, {tpdiary:'True',page:'HappyDiaryPage'});
                        
                    }}
                >
                    <Text style={styles.signInText}>ADD HAPPY STORY</Text>
                </TouchableOpacity>
                {this.state.data.map((item) => {
                    return (
                        <View>
                            <TouchableOpacity
                                onPress={() => {
                                    this.get_onestory(item.id)
                                }}
                            >
                                <Text style={styles.signInText}>{item.title}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                })}
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
    subtitleView: {
        flexDirection: 'column',
        paddingLeft: 10,
        paddingTop: 5,
        marginLeft: 110
    },
    menuText: {
        paddingLeft: 10,
        color: 'grey'
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

export default HappyDiaryPage