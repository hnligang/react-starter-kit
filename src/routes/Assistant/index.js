 /*
  create by ligang on 2018-03-30 11:23:41
 */
export default (store) => ({
  path: '/assistant',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const GitCommonCommands = require('./components/GitCommonCommands')
      // const reducer = require('./modules/tagReducers').default
      // injectReducer(store, { key: 'tagsReducer', reducer })
      cb(null, GitCommonCommands)

    }, 'GitCommonCommands')
  }
})