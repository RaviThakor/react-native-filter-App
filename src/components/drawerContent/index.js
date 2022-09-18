import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {DrawerActions} from '@react-navigation/native';

import Dropdown from '../dropdown';
import {
  getPlaylists,
  getPracticeQuizzesList,
  getVideosList,
} from '../../redux/actions/listAction';
import Button from '../button';
import {languages, Subjects, grades, chapters, topics} from './data';
import styles from './styles';

const DrawerContent = ({navigation}) => {
  const dispatch = useDispatch();
  const [language, setLanguage] = useState('');
  const [subject, setSubject] = useState('');
  const [grade, setGrade] = useState('');
  const [chapter, setChapter] = useState('');
  const [topic, setTopic] = useState('');
  const languageDropdownRef = React.createRef();
  const subjetDropdownRef = React.createRef();
  const gradeDropdownRef = React.createRef();
  const chapterDropdownRef = React.createRef();
  const topicDropdownRef = React.createRef();

  const isSearchDisable = () => {
    return (
      Boolean(language) ||
      Boolean(subject) ||
      Boolean(grade) ||
      Boolean(chapter) ||
      Boolean(topic)
    );
  };

  const onSearch = () => {
    dispatch(getPlaylists(language, subject, grade, chapter, topic));
    dispatch(getPracticeQuizzesList(language, subject, grade, chapter, topic));
    dispatch(getVideosList(language, subject, grade, chapter, topic));
    navigation.dispatch(DrawerActions.closeDrawer());
  };

  const onReset = () => {
    setLanguage('');
    setSubject('');
    setGrade('');
    setChapter('');
    setTopic('');
    languageDropdownRef.current.reset();
    subjetDropdownRef.current.reset();
    gradeDropdownRef.current.reset();
    chapterDropdownRef.current.reset();
    topicDropdownRef.current.reset();
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Select Content</Text>
      <Dropdown
        customStyle={styles.marginTop10}
        title="Language"
        onSelect={(selectedItem, index) => {
          setLanguage(selectedItem);
        }}
        data={languages}
        ref={languageDropdownRef}
        placeholder="Select Language"
      />
      {/* <Dropdown
        customStyle={styles.marginTop10}
        title="Boards"
        data={[]}
        placeholder="Select Boards"
      /> */}
      <Dropdown
        onSelect={(selectedItem, index) => {
          setSubject(selectedItem);
        }}
        customStyle={styles.marginTop10}
        title="Subject"
        data={Subjects}
        ref={subjetDropdownRef}
        placeholder="Select Subject"
      />
      <Dropdown
        onSelect={(selectedItem, index) => {
          setGrade(selectedItem);
        }}
        ref={gradeDropdownRef}
        customStyle={styles.marginTop10}
        title="Class"
        data={grades}
        placeholder="Select Class"
      />
      <Dropdown
        onSelect={(selectedItem, index) => {
          setChapter(selectedItem);
        }}
        ref={chapterDropdownRef}
        customStyle={styles.marginTop10}
        title="Chapter"
        data={chapters}
        placeholder="Select Chapter"
      />
      <Dropdown
        onSelect={(selectedItem, index) => {
          setTopic(selectedItem);
        }}
        ref={topicDropdownRef}
        customStyle={styles.marginTop10}
        title="Topic"
        data={topics}
        placeholder="Select Topic"
      />
      <View style={styles.buttonsContainer}>
        <Button
          onPress={onReset}
          customStyle={{marginRight: 5}}
          title="Reset"
        />
        <Button
          onPress={onSearch}
          customStyle={{marginLeft: 5}}
          disabled={!isSearchDisable()}
          title="Search"
        />
      </View>
    </View>
  );
};

export default DrawerContent;
