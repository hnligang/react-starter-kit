 /*
  create by ligang on 2018-02-26 11:33:41
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Home extends Component {

  static contextTypes = {
    confirmFn: PropTypes.func
  }

  componentWillMount () {
    this.context.confirmFn()
  }

  render () {
    return (
      <div>
        hello world!
      </div>
    )
  }
}

export default Home