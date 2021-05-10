import React,{ Component } from 'react';
import { StyleSheet, 
    Text, 
    View, 
    TextInput,
    TouchableOpacity,
    Image 
} 
from 'react-native';
import axios from 'axios';
//import { Actions } from 'react-native-mobx/index';
import {NavigationName} from '../constants';


class HappyPage extends Component {

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
        this.handleRefresh();
    }

    fetchDataFromApi = ()  => {
        console.log("i'm in fetch")
        const url='http://d0fd5b5e7caf.ngrok.io/getallstory/?type_h=True&status_p=False' 
        axios.get(`${url}`, {})
        .then(res => {
            console.log("in res")
            console.log(res.data['data'])
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

    get_onestory = (id) => {
        const url='http://d0fd5b5e7caf.ngrok.io/onestory/?id=' + id 
        console.log(url)
        axios.get(`${url}`, {})
        .then(res => {
            console.log(res.data['data'])
            this.props.navigation.navigate(NavigationName.DetailPage, {item:res.data['data'],own:'false',page:'HappyPage'});
        }) 
        .catch(error => {
        this.setState({ error, loading : false });
        })    
    };

    render() {
        
        return (
             <View style={styles.container}>
                <Text>HappyPage</Text>
                <TouchableOpacity style={styles.loginBtn}
                    onPress={() => {
                        this.props.navigation.navigate(NavigationName.SocialPage, {});
                    }}
                >
                    <Text style={styles.loginText}>BACK</Text>
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

    render() {
        
        return (
             <View style={styles.container}>
                <Text>HappyPage</Text>
                <TouchableOpacity style={styles.loginBtn}
                    onPress={() => {
                        this.props.navigation.navigate(NavigationName.SocialPage, {});
                    }}
                >
                    <Text style={styles.loginText}>BACK</Text>
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

export default HappyPage