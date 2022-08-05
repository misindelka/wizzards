
// internal imports 
import { Home } from '../pages/Home'
import { WizzardList } from '../pages/WizzardList'

export const routes = [
    {
		path: '/',
		component: Home,
		routeName: 'Home',
	},
	{
		path: '/wizzards',
		component: WizzardList,
		routeName: 'WizzardList',
	},
]