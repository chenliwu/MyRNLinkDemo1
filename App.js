/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Linking
} from 'react-native';


type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            url: '',
            msg: ''
        }
    }

    componentDidMount() {

        //如果应用是被一个链接调起的，则会返回相应的链接地址。否则它会返回null。
        var url = Linking.getInitialURL().then((url) => {
            if (url) {
                console.log('捕捉的URL地址为: ' + url);
                this.setState({
                    url: '捕捉的URL地址为: ' + url
                });
            } else {
                console.log('url为空');
                this.setState({
                    url: 'url为空'
                });
            }
        }).catch(err => {
            console.error('错误信息为:', err);
            this.setState({
                url: 'url为空',
                msg: '错误信息为:', err,
            });
        });

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    MyRNLinkDemo 1
                </Text>
                <Text>
                    url:{this.state.url}
                </Text>
                <Text>
                    msg:{this.state.msg}
                </Text>

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
});
