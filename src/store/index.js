import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import axios from 'axios'
Vue.prototype.$ajax = axios
Vue.use(Vuex)

const state = {
	title: '英雄联盟助手',
    championList: [],
    championFree: [],
    championFreeid: [],
    champion: null,
    championDetail: [],
    championDetailBg: '',
    playerSearch: '',
    playerDetail: '',
    tierQueue: '',
    tripleKills: 0,
    quadraKills: 0,
    pentaKills: 0,
    godlikeNum: 0,
    killsTotal: 0,
    totalMvps: 0,
    combatList: [],
    combatDetail: null,
    speakersList: [],
    getNewstVideos: [],
    Area:[],
    rank: '',
    rankgrade:[]

}
export default new Vuex.Store({
	state,
	mutations,
	actions,
    getters
})