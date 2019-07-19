import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';

export default class AuthStackScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    欢迎来到刘丽娜的APP,您没有权限，请先进行注册授权
                </Text>
                <Button
                    onPress={ () => this.props.navigation.navigate('AuthLoading',{
                        itemId: 86,
                    })}
                    title="注册"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});