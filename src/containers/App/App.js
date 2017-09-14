import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
import Profile from '../Profile/Profile'
import Summary from '../Summary/Summary'
import './App.css'

const { Header, Content, Footer } = Layout
console.log(window.screen.availHeight)

class App extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header style={{ position: 'fixed', width: '100%' }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">Profile</Menu.Item>
            <Menu.Item key="2">Skill</Menu.Item>
            <Menu.Item key="3">Project</Menu.Item>
            <Menu.Item key="4">Experience</Menu.Item>
            <Menu.Item key="5">Gallery</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ marginTop: '100px', padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24, borderRadius: '6px' }}>
            <Profile />
            <Summary />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Aod Studio @ 2017 | By Suvichan Prasongphonchai | suvichan.pc@gmail.com
        </Footer>
      </Layout>
    );
  }
}

export default App;
