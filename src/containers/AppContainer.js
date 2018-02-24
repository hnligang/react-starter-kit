 /*
  create by ligang on 2018-02-24 15:36:04
 */
import React, { Component, PropTypes } from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import LoginRedirectContainer from './LoginRedirectContainer'

class AppContainer extends Component {
  static propTypes = {
    routes : PropTypes.object.isRequired,
    store  : PropTypes.object.isRequired
  }

  shouldComponentUpdate () {
    return false
  }

  handleRouterUpdate = (store) => {
    if (this.pathname !== window.location.pathname) {
      window.scrollTo(0, 0)
    }
    this.pathname = window.location.pathname
  }

  render () {
    const { routes, store } = this.props
    return (
      <Provider store={store}>
        <LoginRedirectContainer>
          <Router
            onUpdate={this.handleRouterUpdate(store)}
            history={browserHistory}
            children={routes}
          />
        </LoginRedirectContainer>
      </Provider>
    )
  }
}


export default AppContainer

