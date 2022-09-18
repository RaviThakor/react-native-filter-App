import {
  PLAYLISTS_LIST,
  PRACTICE_QUIZZES_LIST,
  VIDEOS_LIST,
  IS_SUCCESS,
} from '../types/listType';

const initialState = {
  playlistsList: [],
  practiceQuizzesList: [],
  videosList: [],
  isSuccess: false,
};

const listReducer = (tictacList = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case PLAYLISTS_LIST:
      return {...tictacList, playlistsList: payload};

    case PRACTICE_QUIZZES_LIST:
      return {...tictacList, practiceQuizzesList: payload};

    case VIDEOS_LIST:
      return {...tictacList, videosList: payload};

    case IS_SUCCESS:
      return {...tictacList, isSuccess: payload};

    default:
      return {...tictacList};
  }
};

export default listReducer;
