import React from "react";
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import AppContainer from './AppContainer';
import router from './src/router/Routers'


class App extends React.Component {
    render() {
        return <AppContainer/>
    }
}

const AppNavigator = createStackNavigator(router[0],{
    initialRouteName: "Home",
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        navigationOptions: {
            tabBarLabel: 'Home!',
        },
    },
});
const ss = createStackNavigator(router[1]);
export default App=createAppContainer(AppNavigator);
