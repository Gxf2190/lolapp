import axios from 'axios'
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
	GET_SPEAKER_LIST  ,
	GET_CHAMPION_ICON,
	GET_NEWST_VIDEOS,
	GET_AREA,
	GET_RANK,
	GET_RANK_GRADE
} from './mutations-types'

const TOKEN = {
	 "DAIWAN-API-TOKEN": 'C8888-9DDDC-E4079-DEE9D'
}
const VIDEOTOKEN = {
	"DAIWAN-API-TOKEN": '565EE-ED575-31165-975EC'
}
const API = {
	championList: '/api/champion',
	championFree: '/api/Free',
	GetChampionIcon:  '/api/GetChampionIcon?id=',
	championDetail: '/api/GetChampionDetail?champion_id=',
	playerSearch: '/api/UserArea?keyword=',
	playerDetail: '/api/BattleSummaryInfo?qquin=',
	getTierQueue: '/api/GetTierQueue?tier=',
	playExtInfo: '/api/UserExtInfo?qquin=',
	combatList: '/api/CombatList?qquin=',
	combatDetail: '/api/GameDetail?qquin=',
	newstVideos: '/api/GetNewstVideos?p=1',
	commenterList: '/api/GetAuthors',
	newstVideos: 'http://infoapi.games-cube.com/GetNewstVideos?p=',
	speakersList: 'http://infoapi.games-cube.com/GetAuthors',
	Area: '/api/Area',
	Rank: '/api/ChampionRank?championid='
}
export default {	
	[GET_CHAMPION_LIST](context){
		axios.get(API.championList, {
			headers: TOKEN
		}).then( (res) => {
			console.log(res);
			if(res.data.code == 0)
			{	
				
				 context.commit(GET_CHAMPION_LIST, res.data.data)
			}
		}).catch(function(err ){
			console.log(err);
		
		})
	},
	[GET_CHAMPION_FREE](context){
		axios.get(API.championFree, {
			headers: TOKEN
		}).then( (res) => {
			
				
				 context.commit(GET_CHAMPION_FREE, res.data.data)
			
		})
	},
	[GET_CHAMPION_DETAIL](context, id){
		
		console.log(API.championDetail+id.id);
		axios.get(API.championDetail+id.id, {
			headers: TOKEN
		}).then( (res) => {

			context.commit(GET_CHAMPION_DETAIL, res.data.data[0])
		})
	},
	[GET_NEWST_VIDEOS](context){
		axios.get(API.newstVideos, {
			headers: VIDEOTOKEN
		}).then( (res) => {

			context.commit(GET_NEWST_VIDEOS, res.data.data)
		})
	},
	[GET_PALYER_SEARCH](context, id){
		axios.get(API.playerSearch + id.id, {
			headers: TOKEN
		}).then( (res) => {


			if(res.status === 200 )
			{
				context.commit(GET_PALYER_SEARCH, res.data.data)
			}
		})
	},
	[GET_AREA](context)
	{
		axios.get(API.Area, {
			headers: TOKEN
		}).then( (res) => {

			
			if(res.status === 200 )
			{

				context.commit(GET_AREA, res.data.data)
			}
		})
	},
	[GET_PLAYER_FIGHT_DEATIL](context, object)
	{
		axios.get(API.playerDetail+object.qquin+'&vaid='+object.vaid, {
			headers: TOKEN
		}).then( (res) => {

			
			if(res.status === 200 )
			{

				context.commit(GET_PLAYER_FIGHT_DEATIL, res.data.data)
			}
		})
	},
	[GET_RANK](context, id)
	{
		context.commit(GET_RANK, id)
	},
	[GET_RANK_GRADE](context, object)
	{
		axios.get(API.Rank+object.champion+'&p='+object.id, {
			headers: TOKEN
		}).then(res => {
			console.log(res);
			if(res.status === 200 )
			{
				
				
				context.commit(GET_RANK_GRADE, res.data.data[0].skillRank)
			}
		})
	}
	
}