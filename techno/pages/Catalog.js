import React, { Component } from "react";
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button
} from "react-native";

class Catalog extends Component {
    static navigationOption ={
        header:null,
    }
    render(){
        return(
        <View style={styles.container}>
        <Button title="Go To Home Screen"
            onPress={()=> this.props.navigation.navigate('Home')}/>
        </View>
        );
    }
}

export default Catalog;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    navBar: {
        marginTop: 25,
        height: 55,
        backgroundColor: 'white',
        elevation: 3,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      rightNav: {
        flexDirection: 'row'
      },
      navItem: {
        marginLeft: 25
      },
})