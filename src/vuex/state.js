import {
  playMode
} from 'common/js/config';
import {
  loadSearch,
  loadPlay,
  loadFavorite
} from 'common/js/cache';

const state = {
  // 歌手
  singer: {},
  // 播放器状态
  // 播放状态
  playing: false,
  // 播放器展开，收起
  fullScreen: false,
  // 播放列表
  playlist: [],
  // 顺序列表
  sequenceList: [],
  // 播放模式
  mode: playMode.sequence,
  // 当前播放的索引
  currentIndex: -1,
  disc: {},
  topList: {},
  searchHistory: loadSearch(),
  playHistory: loadPlay(),
  favoriteList: loadFavorite()
}

export default state
