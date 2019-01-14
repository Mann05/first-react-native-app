//import stuff
import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Button } from 'native-base';
var myBackground = require('../assets/landing.jpg');
// create stuff
class Landing extends React.Component {
    render() {
        return (
            <ImageBackground source={myBackground} style={{ width: '100%', height: '100%' }} >
                <View style={styles.message}>
                    <Text style={styles.titleStyle} >Welcome to My Frist App.</Text>
                    <Button block={true} info style={styles.buttonStyle}
                        onPress={() => this.props.switchScreen("search")} >
                        <Text style={{ color: 'white' }}>Start Searching</Text>
                    </Button>
                </View>
            </ImageBackground>
        )
    }
}

const styles = {
    message: {
        flex: 1,
        felxDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleStyle: {
        fontSize: 30,
        color: 'crimson',
        alignItems: 'center'
    },
    buttonStyle: {
        backgroundColor: 'red',
        margin: 10,
        padding: 20
    }
}
//export stuff
export default Landing;