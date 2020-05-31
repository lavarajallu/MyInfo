import React, { Component } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import _ from 'lodash'
import { Container, Header, Input, Button, Item, Icon, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, View } from 'native-base';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            fullData: [],
            loading: false,
            error: false,
            query: ""
        }
    }
    
    componentDidMount() {
        this.getPhotosListApi()
    }

    getPhotosListApi = _.debounce(() => {
        this.setState({ loading: true })

        const apiURL = "https://jsonplaceholder.typicode.com/photos?_limit=100"
        fetch(apiURL).then((res) => res.json())
            .then((responseData) => {
                this.setState({
                    loading: false,
                    data: responseData,
                    fullData: responseData
                })
            }).catch(error => {
                this.setState({ error, loading: false })
            })
    }, 250)

    _renderItem = ({ item, index }) => {
        return (
            <ListItem avatar>
                <Left>
                    <Thumbnail source={{ uri: item.thumbnailUrl }} />
                </Left>
                <Body>
                    <Text>{item.title}</Text>
                </Body>
                <Right>
                </Right>
            </ListItem>
        )
    }
    renderFooter = () => {
        if (!this.state.loading) return null
        return (
            <View style={{ paddingVertical: 20, borderTopWidth: 1, borderColor: '#000000' }}>
                <ActivityIndicator size="large" animating />
            </View>
        )
    }

    handleSearch = (text) => {
        const formattedQuery = text.toLowerCase()
        const data = _.filter(this.state.fullData, photo => {
            if (photo.title.includes(formattedQuery)) {
                return true
            }
            return false
        })
        this.setState({ data, query: text })
    }
    render() {
        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" onChangeText={this.handleSearch} />
                    </Item>

                </Header>
                <Content>
                    <List>
                        <FlatList
                            data={this.state.data}
                            renderItem={this._renderItem}
                            keyExtractor={(item, index) => index.toString()}
                            ListFooterComponent={this.renderFooter}
                        />

                    </List>
                </Content>
            </Container>
        );
    }
}