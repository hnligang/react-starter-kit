 /*
  create by ligang on 2018-02-24 17:56:23
 */

 /*
  How To Use Context

  class OneComponent extends React.Component {
    static contextTypes = {
      props: value
    }
  }

  OneComponent.contextTypes = {
    color: PropTypes.string
  }
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ConfirmDialog extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      open: false
    }
  }

  static propTypes = {
    children: PropTypes.any
  }

  static childContextTypes = {
    color: PropTypes.string
  }
  
  getChildContext() {
    return {
      confirmFn: () => {
        this.setState({
          open: true
        })
      }
    }
  }

  render() {
    let content  
    if(this.state.open) {
      content = (<div>11111</div>)
    }
    return (<div>
      {content}
      {this.props.children}
    </div>)
  }
}

export {
  ConfirmDialog
}