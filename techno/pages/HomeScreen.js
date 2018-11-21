import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Catalog from '../pages/Catalog';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LogoTitle from '../App';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Catalog"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Catalog', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})