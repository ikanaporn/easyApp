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
                  <TextInput
                    style={{ width: '90%' }}
                    placeholder="What needs to be done?"
                    autoFocus
                    underLineColorAndroid="transparent"
                    underlineColor="transparent"
                    blurOnSubmit
                    onSubmitEditing={this.onSubmit}
                    onChangeText={changedTitle => this.setStateUtil('title', changedTitle)}
                    //value={title}
                    //autoCorrect={false}
                    autoCapitalize="none"
                    //onBlur={onBlur}
                    />
                 <Text>Login success!</Text>
                    <Fab
                        direction="up"
                        containerStyle={{}}
                        style={{ backgroundColor: '#fa8072' }}
                        position="bottomRight"
                        //onPress={onPress}
                    >
                        <Icon name="add" />
                    </Fab>
              
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

export default HomePage