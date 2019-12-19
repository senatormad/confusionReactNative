import React, { Component } from 'react';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import ContactUs from './ContactComponent';
import { View, Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';


const HomeNavigator = createStackNavigator({
  Home: { screen: Home }
}, {
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
        backgroundColor: "#512DA8"
    },
    headerTitleStyle: {
        color: "#fff"            
    },
    headerTintColor: "#fff"  
  })
});

const HomeNavigatorContainer = createAppContainer(HomeNavigator);


const MenuNavigator = createStackNavigator({
  Menu: { screen: Menu },
  Dishdetail: { screen: Dishdetail }
},
{
  initialRouteName: 'Menu',
  navigationOptions: {
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
          color: "#fff"            
      }
  }
})

const MenuNavigatorContainer = createAppContainer(MenuNavigator);

const AboutNavigator = createStackNavigator({
  About: { screen: About }
},
{
  initialRouteName: 'About',
  navigationOptions: {
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
          color: "#fff"            
      }
  }
})

const AboutNavigatorContainer = createAppContainer(AboutNavigator);

const ContactUsNavigator = createStackNavigator({
  ContactUs: { screen: ContactUs }
},
{
  initialRouteName: 'ContactUs',
  navigationOptions: {
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
          color: "#fff"            
      }
  }
})

const ContactUsNavigatorContainer = createAppContainer(ContactUsNavigator);

const MainNavigator = createDrawerNavigator({
  Home: 
    { screen: HomeNavigatorContainer,
      navigationOptions: {
        title: 'Home',
        drawerLabel: 'Home'
      }
    },
  Menu: 
    { screen: MenuNavigatorContainer,
      navigationOptions: {
        title: 'Menu',
        drawerLabel: 'Menu'
      }, 
    },
  About: 
    { screen: AboutNavigatorContainer,
      navigationOptions: {
        title: 'About',
        drawerLabel: 'About'
      }, 
    },
  ContactUs: 
    { screen: ContactUsNavigatorContainer,
      navigationOptions: {
        title: 'Contact Us',
        drawerLabel: 'Contact Us'
      }, 
    }
}, {
drawerBackgroundColor: '#D1C4E9'
});

const MainNavigatorContainer = createAppContainer(MainNavigator);


class Main extends Component {

  render() {
 
    return (
      <View style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
        <MainNavigatorContainer />
      </View>    );
  }
}
  
export default Main;