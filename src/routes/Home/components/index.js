import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router'
import { Layout, Avatar, Button, Dropdown, Menu, message } from 'antd'
import LeftSider from './sider'
import PropTypes from 'prop-types'

const { Header, Sider, Content } = Layout
class Home extends React.Component {
  render () {
    console.log('home', this.props)
    return (
      <div>
        <Layout>
          <Header style={{ backgroundColor: 'rgb(39, 179, 223)', padding: '0 20px' }}>
            <div style={{ display:'flex',
              flexDirection:'row',
              alignItems:'center',
              float:'left',
              color: 'white',
              fontSize: 24,
              fontWeight: 400
            }}>
              李岗的博客
              </div>
            <div style={{
              display:'flex',
              flexDirection:'row',
              float:'right',
              alignContent:'center',
              alignItems:'center'
            }}>
              {/* <Avatar size='large' icon='user' src={userInfo.avatar} />
              <div style={{ marginLeft: 10, color: 'white' }}>{userInfo.nickname || userInfo.username}</div>
              <Dropdown
                overlay={
                  <Menu onClick={this.handleLoginOutClick}>
                    <Menu.Item key='1'>退出登录</Menu.Item>
                  </Menu>} placement='bottomRight'>
                <Button
                  type={'primary'}
                  style={{ marginLeft:20 }} >设置</Button>
              </Dropdown> */}
            </div>
          </Header>
          <Layout >
            <Sider style={{ backgroundColor: 'white' }} width={300}>
              {<LeftSider pathname={this.props.location.pathname} />}
            </Sider>
            <Content style={{ backgroundColor: 'white', minHeight: 800, padding: '40px 30px'}}>
              {this.props.children || this.props.default}
            </Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}
Home.propTypes = {
  children: PropTypes.any,
  default: PropTypes.any,
  location: PropTypes.object,
}

const mapDispatchToProps = (dispatch) => {
  console.log(1111111111)

  return {
    a: 1
  }
  // return bindActionCreators({ loginOut }, dispatch)
}

const mapStateToProps = (state) => ({
  // userInfo : getUserInfo(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
