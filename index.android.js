/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {TabNavigator} from "react-navigation";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import {StackNavigator} from 'react-navigation';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: ({state}) => {
            return `Chat with`;
        },
        header: (navigation, header) => ({
            ...header,
            right: (
                <Button
                    title={`Go chat`}
                    onPress={() => navigation.navigate('Chat')}
                />
            )
        })
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>Hello, Chat App!</Text>
                <Button
                    onPress={() => navigate('MainScreenNavigator')}
                    title="Chat with Lucy"
                />
            </View>
        );
    }
}

class RecentChatsScreen extends React.Component {
    render() {
        return <Text>List of recent chats</Text>
    }
}

class AllContactsScreen extends React.Component {
    render() {
        return <Text>List of all contacts</Text>
    }
}

const MainScreenNavigator = TabNavigator({
    Recent: {screen: RecentChatsScreen},
    All: {screen: AllContactsScreen},
});

class ChatScreen extends React.Component {
    static navigationOptions = {
        title: 'Chat with Lucy',
    };

    render() {
        return (
            <View>
                <Text>Chat with Lucy</Text>
            </View>
        );
    }
}

const SimpleApp = StackNavigator({
    Home: {screen: HomeScreen},
    Chat: {screen: ChatScreen},
    MainScreenNavigator: {
        screen: MainScreenNavigator,
        navigationOptions: {
            header: {
                visible: false
            }
        },
    }
});

AppRegistry.registerComponent('navigatorStudy', () => SimpleApp);
