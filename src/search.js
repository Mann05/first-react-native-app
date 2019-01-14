//create stuff
import React from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';

import PokeLoader from './PokeLoader';
import SearchBody from './searchBody';
import axios from 'axios';
import { Header, Button, Item, Icon, Input } from 'native-base'
//create stuff
class Search extends React.Component {
    state = {
        pokeSearch: "",
        onCall: true,
        data: {}
    }
    searchPoke = () => {
        this.setState({ onCall: true });
        var self = this;
        axios.get("http://pokeapi.co/api/v2/pokemon/" + this.state.pokeSearch.toLowerCase())
            .then(function (response) {
                self.setState({ data: response.data });
                self.setState({ onCall: false });
            })
            .catch(function (err) {
                console.log(err);
            });
    }
    renderBody = () => {
        if (this.state.onCall) {
            return (
                <PokeLoader />
            )
        }
        else {
            return (
                <SearchBody data={this.state.data} />
            )
        }
    }
    render() {
        return (
            <View>
                <Header searchBar rounded>
                    <Item left>
                        <Icon name="arrow-back" onPress={() => { this.props.switchScreen("landing") }} ></Icon>
                        <Icon name="search" onPress={() => { this.searchPoke() }}></Icon>
                        <Input
                            value={this.state.pokeSearch}
                            placeholder="Search Pokemon"
                            onChangeText={(pokeSearch) => { this.setState({ pokeSearch }) }}
                        />
                    </Item>
                    {/* <Item>
                    <Text>This is Heading</Text>
                </Item> */}

                    {/* <Button rounded info style={styles.buttonStyle} onPress={() => { this.props.switchScreen("landing") }}>
                        <Text>Back</Text>
                    </Button>
                    <Text>{this.props.heading}</Text> */}
                </Header>
                {this.renderBody()}
            </View>
        )
    }
}
const styles = {
    Container: {
        flex: 1,
        flexDirection: 'row'
    },
    buttonStyle: {
        alignItems: 'center'
    }
}

//export stuff
export default Search;