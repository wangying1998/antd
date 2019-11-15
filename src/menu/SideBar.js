import React, { Component } from 'react';
import { Layout, Menu, Icon,Button } from 'antd';
import '../static/css/menu/SideBar.css';
import { getUser } from '../apis/api';

const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;


class SideBar extends Component {
    state = {
        collapsed: false,  // sidebar的折叠显示
        menuList: [
            {
                icon: 'home',
                name: '首页',
                key: 'home'
            },
            {
                icon: '',
                name: '表格管理',
                key: ''
            },
            {
                icon: 'user',
                name: '用户管理',
                key: '',
                children: [
                    {
                        name: ''
                    }
                ]
            },
            {
                icon: '',
                name: '权限管理',
                key: '',
                children: [
                    {
                        name: '角色管理',
                        key: 'roleManage'
                    },
                    {
                        name: '管理员管理',
                        key: 'adminManage'
                    }
                ]
            }
        ]
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    getUser(){
        getUser();
    };

    render() {
        return (
            <Layout className="container">
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['home']}>
                        <Menu.Item key="home">
                            <Icon type="home" />
                            <span className="nav-text">首页</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <span className="nav-text">管理1</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <span className="nav-text">管理2</span>
                        </Menu.Item>
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
                        <div style={{ padding: 24, background: '#fff',height: '100%' }}>
                            <Button>获取数据</Button>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default SideBar;