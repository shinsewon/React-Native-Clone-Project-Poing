import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text, List, ListItem, Left, Body, Right, Thumbnail } from 'native-base';
import _ from 'lodash';

export default function SearchTest() {
  const [data, setData] = useState([]);
  const [fullData, setFullData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetchAPIPhotos();
  }, []);

  const fetchAPIPhotos = _.debounce(() => {
    setLoading(true);
    fetch('http://jsonplaceholder.typicode.com/photos?_limit=30')
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setData(res);
        setFullData(res);
      })
      .catch((error) => {
        setError(error), setLoading(false);
      });
  }, 250);

  const _renderItem = ({ item, index }) => {
    return (
      <ListItem avatar>
        <Left>
          <Thumbnail source={{ uri: item.thumbnailUrl }} />
        </Left>
        <Body>
          <Text>{item.title}</Text>
        </Body>
      </ListItem>
    );
  };

  const _renderFooter = () => {
    if (!loading) return null;
    return (
      <View>
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  const handelSearch = (text) => {
    const formattedQuery = text.toLowerCase();
    const filterData = _.filter(fullData, (photo) => {
      console.log('photo>>', photo);
      if (photo.title.includes(formattedQuery)) {
        return true;
      }
      return false;
    });
    setData(filterData), setQuery(text);
  };

  return (
    <Container>
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" onChangeText={handelSearch} />
        </Item>
      </Header>
      <List>
        <FlatList data={data} renderItem={_renderItem} keyExtractor={(item, index) => index.toString()} ListFooterComponent={_renderFooter} />
      </List>
    </Container>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
