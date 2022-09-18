import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  View,
  Text,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {Chip, Card} from '../../components';
import {
  getPlaylists,
  getPracticeQuizzesList,
  getVideosList,
} from '../../redux/actions/listAction';
import styles from './styles';

const DashBoard = () => {
  const dispatch = useDispatch();
  const [playlistsBadge, setPlaylistsBadge] = useState(0);
  const [practiceQuizzesBadge, setPracticeQuizzesBadge] = useState(0);
  const [videosBadge, setVideosBadge] = useState(0);
  const [list, setList] = useState([]);
  const [currentTab, setCurrentTab] = useState(0);
  const {playlistsList, practiceQuizzesList, videosList, isSuccess} =
    useSelector(state => state.listReducer);

  useEffect(() => {
    dispatch(getPlaylists());
    dispatch(getPracticeQuizzesList());
    dispatch(getVideosList());
  }, []);

  console.log('vidios list : ', videosList, practiceQuizzesList, playlistsList);

  useEffect(() => {
    setPlaylistsBadge(playlistsList.count);
    setPracticeQuizzesBadge(practiceQuizzesList.count);
    setVideosBadge(videosList?.count);
    setList(playlistsList.results);
  }, [playlistsList, practiceQuizzesList, videosList]);

  const onChipPress = tab => {
    setCurrentTab(tab);
    if (tab === 0) {
      setList(playlistsList.results);
    } else if (tab === 1) {
      setList(practiceQuizzesList.results);
    } else if (tab === 2) {
      setList(videosList.results);
    }
  };

  return isSuccess ? (
    <View style={styles.loaderStyle}>
      <ActivityIndicator size="large" />
    </View>
  ) : (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView horizontal style={styles.tabsContainer}>
        <Chip
          title="Playlists"
          onPress={() => onChipPress(0)}
          badgeValue={playlistsBadge}
          isSelected={currentTab === 0}
          customMainContainerStyle={{marginRight: 10}}
        />
        <Chip
          title="Practice Quizzes"
          onPress={() => onChipPress(1)}
          isSelected={currentTab === 1}
          badgeValue={practiceQuizzesBadge}
          customMainContainerStyle={{marginRight: 10}}
        />
        <Chip
          onPress={() => onChipPress(2)}
          isSelected={currentTab === 2}
          title="Videos"
          badgeValue={videosBadge}
        />
      </ScrollView>
      {list.length > 0 ? (
        <FlatList
          data={list}
          showsVerticalScrollIndicator={false}
          style={styles.cardsContainerStyle}
          renderItem={({item, index}) => (
            <Card
              title={item.video_topic_name}
              description={item.chapter_name_original}
            />
          )}
        />
      ) : (
        <View style={styles.noDataContainer}>
          <Text>No Data Available</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default DashBoard;
