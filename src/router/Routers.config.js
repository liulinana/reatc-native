import {
    createStackNavigator,
    createBottomTabNavigator,
    createDrawerNavigator,
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation';
import router from './Routers';
import ModalScreen from '../pages/ModalScreen';
import Touchables from '../pages/Touchables';
import AuthLoadingScreen from '../pages/Authentication/AuthLoadingScreen';
import AuthStackScreen from '../pages/Authentication/AuthStackScreen';

const AppNavigator = createStackNavigator(
    {
        ...router
    },
    {
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
    }
);

/**
 * 打开全屏模式
 */
const RootStack = createStackNavigator(
    {
        Main: {
            screen: AppNavigator,
        },
        MyModal: {
            screen: ModalScreen,
        },
    },
    {
        mode: 'modal',
        headerMode: 'none',
    }
);

/**
 * 基于Tab的导航,是页面底部或标题下方顶部的标签
 */
const TabNavigator = createBottomTabNavigator(
    {
        Home: RootStack,
        Settings: Touchables,
        MySelf: Touchables,
        Information: RootStack
    },
    {
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);

/**
 * 抽屉
 */
const MyDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: TabNavigator,
    },
    Notifications: {
        screen: Touchables,
    },
});

/**
 * createSwitchNavigator的用途是一次只显示一个页面。
 * 默认情况下，它不处理返回操作，并在你切换时将路由重置为默认状态
 */
const SwitchNavigator = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: MyDrawerNavigator,
        Auth: AuthStackScreen,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);

export const AppRouter = createAppContainer(SwitchNavigator);
