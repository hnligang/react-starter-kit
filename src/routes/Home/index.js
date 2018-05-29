 /*
  create by ligang on 2018-03-30 12:10:50
 */
import Home from './components'
export default (store, childRoutes) => ({
  path: '/',
  childRoutes: childRoutes,
  component: Home
})
