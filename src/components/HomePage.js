import React,{ Component } from 'react';
import { StyleSheet, 
    Text, 
    View, 
    TouchableOpacity,
    ImageBackground,
} 
from 'react-native';
import {NavigationName} from '../constants';


class HomePage extends Component {
    state = {
        title: "title",
        completed: "YES",
        createdAt: "TODAY",
        addingTodo: false,
    }
    constructor(props) {
        super(props);
        
    }
    
    onSubmit = () => {
        if (this.state.title.length > 0) this.props.onAdd(this.state);
        return null;
      };
    setStateUtil = (property, value = undefined) => {
        this.setState({
          [property]: value,
        });
      };
    
    render() {
       
        return (
           
            <View style={styles.container}>
                <ImageBackground style= { styles.backgroundImage } source={require("../../assets/img/B.jpg")} >
                    <TouchableOpacity style={styles.signupBtn}
                        onPress={() => {
                            this.props.navigation.navigate(NavigationName.RegisterPage, {});
                        }}
                    >
                        <Text style={styles.signupText}>SIGN UP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.loginBtn}
                        onPress={() => {
                            this.props.navigation.navigate(NavigationName.LoginPage, {});
                        }}
                    >
                        <Text style={styles.loginText}>LOGIN</Text>
                    </TouchableOpacity>
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
    
    signupText: {
        fontSize: 15,
        color: '#fa8072',
        marginTop: 15,
    },
    loginText: {
        fontSize: 15,
        color: '#ffffff',
        marginTop: 15,
    },
    forgot:{
        color:"#456268",
        fontSize:14
    },
    backgroundImage:{
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
    },
    signupBtn:{
        width:"50%",
        backgroundColor:"#f4f4f4",
        borderColor: "#fa8072",
        borderWidth: 1,
        borderRadius:25,
        height:50,
        alignItems:"center",
        marginTop:400,
    },
    loginBtn:{
        width:"50%",
        backgroundColor:"#fa8072",
        borderRadius:25,
        height:50,
        alignItems:"center",
        marginTop:20,
    },
    
})

export default HomePage