import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Catalog from '../pages/Catalog';
import { createStackNavigator, createAppContainer } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
        <AppContainer />,
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Catalog"
          onPress={() => this.props.navigation.navigate('Catalog')}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
    {
      Home: HomeScreen,
      Catalog: Catalog,
    },
    {
      initialRouteName: 'Home',
    }
  );
  
  const AppContainer = createAppContainer(RootStack);

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})