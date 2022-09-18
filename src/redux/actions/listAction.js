import {
  PLAYLISTS_LIST,
  PRACTICE_QUIZZES_LIST,
  VIDEOS_LIST,
  IS_SUCCESS,
} from '../types/listType';
import axios from '../../axios';

export const getPlaylists =
  (
    language = '',
    subject = '',
    grade = '',
    chapterNo = '',
    videoTopicNo = '',
  ) =>
  async dispatch => {
    dispatch({
      type: IS_SUCCESS,
      payload: true,
    });
    const response = await axios.get(
      `/playlist/?language=${language}&subject=${subject}&grade=${grade}&chapter_no=${chapterNo}&video_topic_no=${videoTopicNo}`,
    );
    if (response.status === 200) {
      dispatch({
        type: PLAYLISTS_LIST,
        payload: response.data && response.data,
      });
      dispatch({
        type: IS_SUCCESS,
        payload: false,
      });
    } else {
      dispatch({
        type: IS_SUCCESS,
        payload: false,
      });
    }
  };

export const getPracticeQuizzesList =
  (
    language = '',
    subject = '',
    grade = '',
    chapterNo = '',
    videoTopicNo = '',
  ) =>
  async dispatch => {
    const response = await axios.get(
      `/practice/?language=${language}&subject=${subject}&grade=${grade}&chapter_no=${chapterNo}&video_topic_no=${videoTopicNo}`,
    );
    if (response.status === 200) {
      dispatch({
        type: PRACTICE_QUIZZES_LIST,
        payload: response.data && response.data,
      });
    }
  };

export const getVideosList =
  (
    language = '',
    subject = '',
    grade = '',
    chapterNo = '',
    videoTopicNo = '',
  ) =>
  async dispatch => {
    const response = await axios.get(
      `/video/?language=${language}&subject=${subject}&grade=${grade}&chapter_no=${chapterNo}&video_topic_no=${videoTopicNo}`,
    );
    if (response.status === 200) {
      dispatch({
        type: VIDEOS_LIST,
        payload: response.data && response.data,
      });
    }
  };
