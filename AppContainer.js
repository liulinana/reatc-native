import React from "react";
import {Platform, StyleSheet, Text, View, Image, TextInput, Button, Alert,TouchableOpacity, ImageBackground,Animated} from 'react-native';
import Greeting from './src/pages/Greeting';
import FadeInView from './src/pages/Animated';
import TitleImage from "./src/pages/TitleImage";


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});
const MOCKED_MOVIES_DATA = [
    {
        title: "标题",
        year: "2015",
        posters: { thumbnail: "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" }
    }
];
type Props = {};

export default class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }
    static navigationOptions =  ({ navigation }) => {
    return {
        title: 'Home',
        // headerTitle: <TitleImage />,
        headerBackTitle: "A",//自定义返回按钮
        headerRight: (
            <Button
                onPress={navigation.getParam('increaseCount')}
                title="+1"
                color="#fff"
            />
        ),
    }
    };

    componentDidMount() {
        this.props.navigation.setParams({ increaseCount: this._increaseCount });
    }

    state = {
        count: 0,
    };

    _increaseCount = () => {
        this.setState({ count: this.state.count + 1 });
    };

    handelChangeText = (text) => {
        this.setState({text})
    };
    handelOnPress = () => {
        // fetch('https://mywebsite.com/mydata.json');
        Alert.alert("你点击了按钮");
    };
    _onPressButton = () => {
        Alert.alert('You tapped the button!')
    };

    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        let movie = MOCKED_MOVIES_DATA[0];
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    accessible={true}
                    accessibilityLabel="返回"
                    accessibilityHint="返回到上一个页面"
                    onPress={this._onPress}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Back</Text>
                    </View>
                </TouchableOpacity>
                <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
                    <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
                </FadeInView>
                {/*<ImageBackground source={pic} style={{width: '100%', height: '100%'}}>*/}
                    {/*<Text style={{color: "black"}}>Inside</Text>*/}
                {/*</ImageBackground>*/}
                <Text>{this.state.count}</Text>
                <Button
                    title="Go to Details"
                    onPress={
                        () => this.props.navigation.navigate('Details',{
                        itemId: 86,
                        otherParam: 'anything you want here'
                    })
                    }
                />
                <Button
                    title="Go to ss"
                    onPress={
                        () => this.props.navigation.navigate('ss',{
                            itemId: 86,
                            otherParam: 'anything you want here'
                        })
                    }
                />
                <Text style={styles.welcome}>刘丽娜React Native!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text style={styles.instructions}>{instructions}</Text>
                <Image source={pic} style={{width: 193, height: 110}} />
                <Greeting name='Jaina' />
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={this.handelChangeText}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
                <Button
                    onPress={this.handelOnPress}
                    title="点我！"
                />
                <View style={styles.alternativeLayoutButtonContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title="This looks great!"
                    />
                    <Button
                        onPress={this._onPressButton}
                        title="OK!"
                        color="#841584"
                    />
                </View>
                <View style={styles.containerMove}>
                    <Image source={{uri: movie.posters.thumbnail}} style={styles.thumbnail} />
                    <View style={{flex: 1, justifyContent: "center"}}>
                        <Text style={styles.title}>{movie.title}</Text>
                        <Text style={styles.year}>{movie.year}</Text>
                    </View>
                </View>
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
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    buttonContainer: {
        margin: 20,
        flex: 1
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    thumbnail: {
        width: 53,
        height: 81
    },
    containerMove: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },
    year: {
        textAlign: 'center',
    },
});
