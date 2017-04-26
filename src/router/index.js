import App from '../App'
const home = r => require.ensure([], () => r(require('../pages/home')), 'home')

const player = r => require.ensure([], () => r(require('../pages/player')), 'player')
const rank = r => require.ensure([], () => r(require('../pages/rank')), 'rank')
const championdetail = r => require.ensure([], () => r(require('../pages/championdetail')), 'championdetail')
const detailplayer = r => require.ensure([], () => r(require('../pages/detailplayer')), 'detailplayer')
export default [{
	path: '/',
	component: App,
	children:[
	{
		path: '',
		redirect: '/home'
	},
	{
		path:'/home',
		component: home,
		
	},
	
	{
		path: '/player',
		component: player,
		children:[
			
		]
	},
	{
		path: '/rank',
		component: rank
	},
	{
		path: '/id/:id',
		name: 'id',
		component: championdetail
	},
	{   		
		
		path: 'detailplayer/:qquin/:vaid',
		name:'userid',
		component: detailplayer
			
	}	
	]
}]


