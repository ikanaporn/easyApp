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

//import { Actions } from 'react-native-mobx/index';
import {NavigationName} from '../constants';


class SocialPage extends Component {
   
    render() {
        
        return (
             <View style={styles.container}>
                <Text>SocialPage</Text>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate(NavigationName.FirstPage, {});
                    }}
                >
                    <Text style={styles.signInText}>BACK</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate(NavigationName.HappyPage, {});
                    }}
                >
                    <Text style={styles.signInText}>HAPPY</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate(NavigationName.SadPage, {});
                    }}
                >
                    <Text style={styles.signInText}>SAD</Text>
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
    
})

export default SocialPage