
import { Layout, Menu } from 'antd';
import React from 'react';
import logo from'../image/logo.jpg'
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

const { Header } = Layout;
const items1 = ['Home', 'Contact', 'About'].map((key) => ({
    key,
    label: ` ${key}`,

    
  }));


const Headers = () => (
  <Layout>
    <Header className="header">
      <img src={logo}/>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1}  />
      <Avatar size={50} icon={<UserOutlined />} />
      {/* <h2>leomax</h2> */}
    </Header>

  </Layout>
);
export default Headers;