import jsonp from 'common/js/jsonp';
import {
  commonParams
} from './config';
import axios from 'axios';

export function getLyric(mid) {
  const url = '/api/lyric';

  const data = Object.assign({}, commonParams, {
    g_tk: 5381,
    songmid: mid,
    pcachetime: +new Date(),
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    format: 'json'
  })

  return axios.get(url, {
      params: data
  }).then((res) => {
      return Promise.resolve(res.data);
  })
}
