import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import '../static/css/menu/SideBar.css';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


class SideBar extends Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        return (
            <Layout className="container">
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="user" />
                            <span className="nav-text">图表</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <span className="nav-text">列表</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <span className="nav-text">文本</span>
                        </Menu.Item>
                        <SubMenu
                            key="4"
                            title={
                                <span>
                                <Icon type="user" />
                                <span>权限管理</span>
                                </span>
                            }
                            >
                            <Menu.Item key="4.1">Tom</Menu.Item>
                            <Menu.Item key="4.2">Bill</Menu.Item>
                            <Menu.Item key="4.3">Alex</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', paddingLeft: '20px' }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: 24, background: '#fff' }}>content</div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
            // mountNode,
        );
    }
}

export default SideBar;