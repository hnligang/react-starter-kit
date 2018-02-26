 /*
  create by ligang on 2018-02-24 15:49:40
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router'

class LoginRedirectContainer extends Component {

  componentDidUpdate (prevProps) {
    // loggingIn or oggingOut routing processing
    const isLoggingOut = prevProps.isLoggedIn && !this.props.isLoggedIn
    const isLoggingIn = !prevProps.isLoggedIn && this.props.isLoggedIn
    if (isLoggingIn) {
      // login redirect
      browserHistory.replace({
        pathname: this.props.redirectUrl,
        state: this.props.redirectState,
        query: this.props.redirectQuery
      })
    } else if (isLoggingOut) {

    }
  }

  render () {
    console.log('LoginRedirectContainer', this.props)
    return this.props.children
  }
}

LoginRedirectContainer.propTypes = {
  redirectUrl: React.PropTypes.string,
  redirectState: React.PropTypes.object,
  redirectQuery: React.PropTypes.object,
  children: React.PropTypes.any,
  location: React.PropTypes.any,
}

const mapStateToProps = (state) => ({
  redirectUrl: state.REDIRECT ? state.REDIRECT.url : '/',
  redirectState: state.REDIRECT ? state.REDIRECT.state : undefined,
  redirectQuery: state.REDIRECT ? state.REDIRECT.query : undefined,
  location: state.location
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginRedirectContainer)
