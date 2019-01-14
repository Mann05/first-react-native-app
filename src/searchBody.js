import React from 'react';
import { ScrollView, Text, Image, View, ImageBackground, Dimensions } from 'react-native';
import { ListItem, List } from 'native-base';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

class SearchBody extends React.Component {
    render() {
        var pokemon = this.props.data;
        console.log('pokemon', pokemon);
        if (!pokemon) {
            return (
                <View />
            )
        }
        return (
            <ImageBackground
                style={styles.backgroundImage}
                source={{ uri: 'http://pokemongolive.com/img/posts/raids_loading.png' }}>
                <ScrollView style={{ flex: 1 }}>
                    <Text style={styles.header}>#{pokemon.id}- {pokemon.name.toUpperCase()}</Text>
                    <View style={styles.viewStyle}>
                        <Image
                            source={{ uri: pokemon.sprites.front_default }}
                            style={styles.img}></Image>
                    </View>
                    <View style={styles.info}>
                        <ListItem itemDivider>
                            <Text style={{ fontWeight: 'bold' }}>Size</Text>
                        </ListItem>
                        <ListItem >
                            <Text>Weight - {pokemon.weight}kg</Text>
                        </ListItem>
                        <ListItem >
                            <Text>Height - {pokemon.height / 10}m</Text>
                        </ListItem>


                        <ListItem itemDivider>
                            <Text style={{ fontWeight: 'bold' }}>Abilities</Text>
                        </ListItem>
                        <List
                            dataArray={pokemon.abilities}
                            renderRow={(item) =>
                                <ListItem>
                                    <Text>{item.ability.name}</Text>
                                </ListItem>
                            }>

                        </List>
                    </View>
                </ScrollView>
            </ImageBackground>
        )
    }
}
const styles = {
    backgroundImage: {

        height: height,
        width: width
    },
    header: {
        textAlign: 'center',
        color: 'crimson',
        fontSize: 30
    },
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    img: {
        height: 200, width: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    info: {
        flex: 1,
        backgroundColor: 'white',
        opacity: 0.8
    }
}
export default SearchBody;