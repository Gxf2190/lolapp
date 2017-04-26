import {
	GET_CHAMPION_LIST, 
	GET_CHAMPION_FREE, 
	GET_CHAMPION_DETAIL,
	GET_PALYER_SEARCH,
	GET_PLAYER_FIGHT_DEATIL,
	GET_PLAYER_BASE_DETAIL,
	GET_FIGHT_LIST,  
	GET_FIGHT_DETAIL,  
	GET_NEWS_VIDEO, 
	GET_SPEAKER_LIST,
	GET_CHAMPION_ICON,
	GET_NEWST_VIDEOS,
	GET_AREA,
	GET_RANK,
	GET_RANK_GRADE
} from './mutations-types'

export default {
	[GET_CHAMPION_LIST](state, data){
		state.championList = data 
		state.title = '全部英雄'
	},
	[GET_CHAMPION_FREE](state, data)
	{
		state.championFree = data
		state.title = '免费英雄'
	},
	[GET_CHAMPION_DETAIL](state, data){
		state.championDetail = data;
	},
	[GET_NEWST_VIDEOS](state, data){
		state.getNewstVideos = data
	},
	[GET_PALYER_SEARCH](state, data){
		state.playerSearch = data
	},
	[GET_AREA](state, data){
		state.Area = data
	},
	[GET_PLAYER_FIGHT_DEATIL](state, data){
		state.playerDetail = data[0].batt_sum_info
	},
	[GET_RANK](state, data)
	{
		state.rank = data
	},
	[GET_RANK_GRADE](state, data)
	{
		state.rankgrade = data
	}
	
}