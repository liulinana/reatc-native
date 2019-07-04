import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = { isShowingText: true };

        // 每1000毫秒对showText状态做一次取反操作
        setInterval(() => {
            this.setState(previousState => {
                return { isShowingText: !previousState.isShowingText };
            });
        }, 1000);
    }
    static navigationOptions = ({ navigation,navigationOptions}) => {
        const { params } = navigation.state;
        return {
            title: params ? params.otherParam : 'A Nested Details Screen',
            /* These values are used instead of the shared configuration! */
            headerStyle: {
                backgroundColor: navigationOptions.headerTintColor,
            },
            headerTintColor: navigationOptions.headerStyle.backgroundColor,
            // title: navigation.getParam('otherParam'),
            // headerStyle: {
            //     backgroundColor: '#f4511e',
            // },
            // headerTintColor: '#fff',
            // headerTitleStyle: {
            //     fontWeight: 'bold',
            // },
        };
    };

    render() {
        const { navigation } = this.props;
        // const itemId = navigation.getParam('itemId');
        const otherParam = navigation.getParam('otherParam');
        const {itemId} = this.props.navigation.state.params;
        // if (!this.state.isShowingText) {
        //     return null;
        // }
        return(
            <View>
                <Button
                    title="Update the title"
                    onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
                />
                <Text>{this.props.text}</Text>
                <Text>Details Screen</Text>
                <Text>itemId: {itemId}</Text>
                <Text>{this.props.navigation.state.params.itemId}</Text>
                <Text>otherParam: {otherParam}</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() =>
                        this.props.navigation.push('Details', {
                            itemId: Math.floor(Math.random() * 100),
                        })}
                />
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        )
    }
}