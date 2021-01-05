import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { StyleSheet, View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text, List, ListItem, Left, Body, Right, Thumbnail } from 'native-base';
import _ from 'lodash';
import { colors } from '../styles/color/Color';
import { SEARCH_DATA, POPULAR_SEARCHES } from '../data/data';
import { AntDesign } from 'react-native-vector-icons';
import { color } from 'react-native-reanimated';

export default function Search() {
  const [data, setData] = useState([]);
  const [fullData, setFullData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const [click, setClick] = useState(false);
  const [typing, setTyping] = useState(false);
  const [recentSearch, setRecentSearch] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');
  const [Id, setId] = useState(0);

  useEffect(() => {
    fetchAPIPhotos();
  }, []);

  useEffect(() => {
    if (searchTitle.trim() === '') {
      setTyping(false);
    }
  }, [searchTitle]);

  const handleTyping = () => {
    if (searchTitle.trim() === '') {
      return null;
    } else {
      setId((Id) => Id + 1);
      const searchTitleId = Id;
      const addSearchTitle = recentSearch.concat({ id: searchTitleId, title: searchTitle });
      setRecentSearch(addSearchTitle);
      setSearchTitle('');
    }
  };

  const fetchAPIPhotos = _.debounce(() => {
    setLoading(true);
    // fetch('http://jsonplaceholder.typicode.com/photos?_limit=30')
    //   .then((res) => res.json())
    //   .then((res) => {
    //     setLoading(false);
    //     setData(res);
    //     setFullData(res);
    //   })
    //   .catch((error) => {
    //     setError(error), setLoading(false);
    //   });
    setLoading(false);
    setData(SEARCH_DATA);
    setFullData(SEARCH_DATA);
  }, 250);

  const goToDetail = () => {
    console.log('되나');
  };

  const _renderItem = ({ item, index }) => {
    return (
      <ListItem avatar onPress={goToDetail}>
        <Left>
          <Thumbnail source={{ uri: item.img }} />
        </Left>
        <Body>
          <Text>{item.name}</Text>
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

  const handleSearch = (text) => {
    setSearchTitle(text);
    setTyping(true);
    const formattedQuery = text.toLowerCase();
    const filterData = _.filter(fullData, (photo) => {
      if (photo.name.includes(formattedQuery)) {
        return true;
      }
      return false;
    });
    setData(filterData), setQuery(text);
  };

  const handleOnCancel = () => {
    if (searchTitle.trim() !== '') {
      setSearchTitle('');
      setTyping(true);
    }
    null;
  };

  const GoToModal = () => {
    return (
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          <Text style={{ color: colors.red }}>2명 / 1월 04일(월)</Text>
        </View>
      </View>
    );
  };

  const RecentSearches = ({ recentSearch, setRecentSearch }) => {
    const updateList = (data) => {
      const lists = recentSearch.map((item) => {
        return item.id === data.id ? data : item;
      });
      setRecentSearch(lists);
    };

    const handleOnDelete = (e, index) => {
      const deleteList = recentSearch.splice(index, 1);
      updateList(deleteList);
    };

    const _renderRecentSearches = (item, index) => {
      return (
        <View style={styles.searchBox}>
          <View style={styles.searchComment}>
            <Text style={{ fontSize: 13, fontWeight: '300' }}>{item.title}</Text>
          </View>
          <TouchableOpacity style={styles.close} onPress={(_, e) => handleOnDelete(e, index)}>
            <AntDesign name="close" id={item.id} size={12} style={styles.closeBtn} />
          </TouchableOpacity>
        </View>
      );
    };

    return (
      <View>
        <View>
          <Text style={{ color: colors.defaultgray, fontSize: 12 }}>최근 검색어</Text>
        </View>
        <FlatList data={recentSearch} renderItem={({ item, index }) => _renderRecentSearches(item, index)} keyExtractor={(item) => item.id} />
      </View>
    );
  };

  const PopularSearches = () => {
    return (
      <View style={styles.searchContainer}>
        <View>
          <Text style={{ color: colors.defaultgray, fontSize: 12 }}>인기 검색어</Text>
        </View>
        {[...POPULAR_SEARCHES].map((item) => {
          return (
            <View style={styles.searchBox} key={item.id}>
              <View style={styles.searchComment}>
                <Text style={{ fontSize: 13, fontWeight: '300' }}>{item.title}</Text>
              </View>
            </View>
          );
        })}
      </View>
    );
  };

  const handleOnFocus = () => {
    setTyping(false);
  };

  return (
    <Container style={{ backgroundColor: '#fff', width: '100%' }}>
      <Header searchBar style={{ backgroundColor: '#fff', width: '100%' }}>
        <Item style={styles.textInputContainer}>
          {click ? <AntDesign name="left" size={25} style={styles.left} /> : null}
          <Input
            placeholder="매장,음식,지역을 검색해보세요."
            placeholderTextColor={colors.defaultgray}
            onChangeText={handleSearch}
            onTouchStart={() => setClick(true)}
            onSubmitEditing={handleTyping}
            autoCompleteType="off"
            style={styles.input}
            value={searchTitle}
            clearTextOnFocus="true"
            onFocus={handleOnFocus}
          />
          {click ? (
            <View style={styles.right}>
              <Text onPress={() => handleOnCancel()}>취소</Text>
            </View>
          ) : null}
        </Item>
      </Header>
      {typing ? (
        <List>
          <FlatList data={data} renderItem={_renderItem} keyExtractor={(item, index) => index.toString()} ListFooterComponent={_renderFooter} />
        </List>
      ) : null}

      {typing ? null : (
        <View style={styles.container}>
          <GoToModal />
          <RecentSearches recentSearch={recentSearch} setRecentSearch={setRecentSearch} />
          <PopularSearches />
        </View>
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    marginHorizontal: 30,
  },
  textInputContainer: {
    position: 'relative',
    flexDirection: 'row',
    paddingLeft: 15,
    marginLeft: -10,
    marginRight: -10,
    height: '100%',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: colors.red,
    backgroundColor: '#fff',
  },
  input: {
    height: '100%',
    fontSize: 19,
  },
  left: {
    color: colors.red,
  },
  right: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    height: '100%',
  },
  modalContainer: {
    justifyContent: 'center',
    height: 50,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 130,
    borderWidth: 1,
    borderColor: colors.red,
    borderRadius: 15,
  },

  searchContainer: {
    marginTop: 20,
  },
  searchBox: {
    flexDirection: 'row',
    marginTop: 10,
  },
  searchComment: {
    justifyContent: 'center',
    width: '95%',
  },
  close: {
    width: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeBtn: {
    color: colors.defaultgray,
  },
});
