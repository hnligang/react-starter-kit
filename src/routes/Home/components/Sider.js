import React from 'react'
import PropTypes from 'prop-types'
import { IndexLink, Link, browserHistory } from 'react-router'
import { Menu } from 'antd'

const { SubMenu } = Menu

export default class LeftSider extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedKeys: ['assistant'],
      openKeys: []
    }
  }

  componentWillReceiveProps (nextProps) {
    // let { selectedKeys, openKeys } = this.state
    // if (nextProps.pathname) {
    //   let pathname = nextProps.pathname.split('/')[1]
    //   let lastKey = selectedKeys[selectedKeys.lenght - 1]
    //   if (pathname !== lastKey) {
    //     let newKeys = []
    //     let newOpenKeys = []
    //     if (pathname === 'banner' || pathname === 'tags' || pathname === 'recommendColumn' ||
    //          pathname === 'recommendPlate') {
    //       newKeys.push('recMange')
    //       newKeys.push(pathname)
    //       newOpenKeys.push('recMange')
    //       newOpenKeys.push(pathname)
    //     } else {
    //       newKeys.push(pathname)
    //     }
    //     this.setState({
    //       selectedKeys:newKeys,
    //       openKeys:newOpenKeys.length === 0 ? openKeys : newOpenKeys
    //     })
    //   }
    // }
  }

  // onOpenChange = (openKeys) => {
  //   if (openKeys[0] === 'recMange') openKeys.push('banner')
  //   this.setState({ openKeys })
  // }

  // onDailyClick = () => {
  //   browserHistory.push({
  //     pathname: '/daily',
  //     query: {
  //       key: '1'
  //     }
  //   })
  // }

  // onItemClick = ({ key, keyPath }) => {
  //   var x = document.body.scrollTop || document.documentElement.scrollTop
  //   if (x > 10) {
  //     window.scrollTo(0, 0)
  //   }
  //   this.setState({ selectedKeys: keyPath, openKeys: keyPath })
  // }

  render () {
    return (
      <Menu
        mode='inline'
        selectedKeys={this.state.selectedKeys}
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        onClick={this.onItemClick}
        style={{ height: 1000 }}
      >
        <Menu.Item key='assistant' style={styles.itemStyle}>
          <Link to='/assistant'>项目管理</Link>
        </Menu.Item>
        {/* <Menu.Item key='plate' style={styles.itemStyle}>
          <Link to='/plate'>版块管理</Link>
        </Menu.Item>
        <Menu.Item key='hotspot' style={styles.itemStyle}>
          <Link to='/hotspot'>活动管理</Link>
        </Menu.Item>
        <Menu.Item key='column' style={styles.itemStyle}>
          <Link to='/column'>专栏管理</Link>
        </Menu.Item>
        <SubMenu key='recMange' title={<spanb style={{ fontSize: 14 }}>推荐管理</spanb>}>
          <Menu.Item key='banner' style={styles.itemStyle}>
            <IndexLink to='/banner'>banner管理</IndexLink>
          </Menu.Item>
          <Menu.Item key='tags' style={styles.itemStyle}>
            <IndexLink to='/tags'>标签配置</IndexLink>
          </Menu.Item>
          <Menu.Item key='recommendColumn' style={styles.itemStyle}>
            <Link to='/recommendColumn'>推荐专栏管理</Link>
          </Menu.Item>
          <Menu.Item key='recommendPlate' style={styles.itemStyle}>
            <Link to='/recommendPlate'>推荐版块管理</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key='classSchool' style={styles.itemStyle}>
          <Link to='/classSchool'>校园班级</Link>
        </Menu.Item>
        <Menu.Item key='messageManage' style={styles.itemStyle}>
          <Link to='/messageManage'>消息管理</Link>
        </Menu.Item>
        <Menu.Item key='userManage' style={styles.itemStyle}>
          <Link to='/userManage'>冻结管理</Link>
        </Menu.Item> */}
      </Menu>
    )
  }
}

LeftSider.propTypes = {
  pathname: PropTypes.string
}
const styles = {
  itemStyle: {
    height: 60,
    display: 'flex',
    alignItems: 'center',
    fontSize: 14
  }
}
