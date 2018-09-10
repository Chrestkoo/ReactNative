import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
const playIcon = require('./images/play.png');
const volumeIcon = require('./images/sound.png');
const hdIcon = require('./images/hd-sign.png');
const fullScreenIcon = require('./images/full-screen.png');
const remoteImage = { uri: 'https://s3.amazonaws.com/crysfel/public/book/new-york.jpg' };

const name = "Testing on React-Navigation";
const MainApp = () => {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer} />
        <Text style={styles.title}>
          <Text style={styles.subtitle}>Playing:</Text> {name}
        </Text>
</View> );
};


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: '#202020',
        borderRadius: 5,
        flexDirection: 'row',
        height: 50,
        padding: 5,
        paddingTop: 16,
        bottom: 30,
        right: 10,
        left: 10,
        borderWidth: 1,
        borderColor: '#303030',
    },
    innerContainer: {
        backgroundColor: '#d35400',
        height: 50,
        width: 150,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    }, 
    title: {
        fontSize: 18,
        fontWeight: '200',
        color: '#fff',
        position: 'absolute',
        backgroundColor: 'transparent',
        top: 12,
        left: 10, 
    },
    subtitle: {
        fontWeight: 'bold',
    }, 
    fullscreen: {
      flex: 1, 
    },
    icon: {
        tintColor: '#fff',
        height: 16,
        width: 16,
        marginLeft: 5,
        marginRight: 5,
    },
    progress: {
        backgroundColor: '#000',
        borderRadius: 7,
        flex: 1,
        height: 14,
        margin: 10,
        marginTop: 2,
    },
    progressBar: {
        backgroundColor: '#bf161c',
        borderRadius: 5,
        height: 10,
        margin: 2,
        width: 80,
    },
});

export default MainApp;