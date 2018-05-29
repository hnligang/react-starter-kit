 /*
  create by ligang on 2018-02-24 16:15:25
 */

import React from 'react'
import PropTypes from 'prop-types'
import { ConfirmDialog } from './GlobalComponent'

export default class PageLayout extends React.Component {

  /*
    This component is used to do the following thing
    1、defining the UI framework theme. For example, material-ui
    2、defining global commponets or setting context
  */
  render () {
    console.log(33333, this.props)
    return (
      <ConfirmDialog >
        {this.props.children}
      </ConfirmDialog>
    )
  }
}
PageLayout.propTypes = {
  children: PropTypes.element
}
