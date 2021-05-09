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
import {Card} from 'react-native-paper';


class HappyDiaryPage extends Component {
    constructor(props) {
        super(props);
    
        this.state  = {
          loading: false,
          data: [],
          error: null,
          refreshing: false,
        }
      }
    
    componentDidMount() {
    this.fetchDataFromApi();

    }

    fetchDataFromApi = ()  => {
        const url = "http://3685db6d73f3.ngrok.io/mystory/";

        this.setState({ loading: true });
        let data = {
            'type_h' : 'True',
        };
        let formBody = [];
        for (let property in data) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(data[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        axios.get(`${url}`, formBody , {
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset-UTF-8'
            }
        })
        .then(res => res.json())
        .then(res => {
            this.setState({
                data: res,
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
    renderData = (item) => {
        return(
            <Card>
                <Text>{item.title}</Text>
                <Text>{item.detail}</Text>
            </Card>
        )
    }
    render() {
        // const mydata = this.loaddata();
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
                        this.props.navigation.navigate(NavigationName.AddDiaryPage, {tpdiary:'True'});
                        
                    }}
                >
                    <Text style={styles.signInText}>ADD HAPPY STORY</Text>
                </TouchableOpacity>
                <FlatList
                    data={this.state.data}
                    // renderItem={({ item }) => {
                    //     // <ListItem
                    //     // // onPress={() => this.props.navigation.navigate('Detail',
                    //     // // {name: `${item.name}`, menu: `${item.menu}`,
                    //     // // img: `${this.state.base_url}${item.photo}`,
                    //     // // address: `${item.address}`})}
                    //     // title={`${item.title}`}
                    //     // titleStyle={{ fontSize: 16}}
                    //     // titleContainerStyle = {{ marginLeft: 120 }}
                    //     // subtitle={<View style={styles.subtitleView}>
                    //     // <Text style={styles.menuText}>{item.detail}</Text>
                    //     // </View>}
                    //     // containerStyle={{ borderBottomWidth: 0, marginBottom: 20 }}
                    //     // />
                    //     // return renderData(item)
                    // }}
                    renderItem={({ item }) => (
                        <ListItem
                        //   onPress={() => this.props.navigation.navigate('Detail',
                        //   {name: `${item.name}`, menu: `${item.menu}`,
                        //   img: `${this.state.base_url}${item.photo}`,
                        //   address: `${item.address}`})}
                          title={`${item.title}`}
                          titleStyle={{ fontSize: 16}}
                          titleContainerStyle = {{ marginLeft: 120 }}
                          subtitle={<View style={styles.subtitleView}>
                            <Text style={styles.menuText}>{item.detail}</Text>
                            </View>}
                          containerStyle={{ borderBottomWidth: 0, marginBottom: 20 }}
                        />
                    )}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={this.renderSeparator}
                    ListHeaderComponent={this.renderHeader}
                    onRefresh={this.handleRefresh}
                    refreshing={this.state.refreshing}
                    />
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
})

export default HappyDiaryPage