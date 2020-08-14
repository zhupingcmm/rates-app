import React from "react";
import {Menu,Dropdown} from "antd";
import {UserOutlined} from '@ant-design/icons';

function handleMenuClick (){

}

const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        1st menu item
      </Menu.Item>
    </Menu>
  );

function GbdDrapDown(props){

    return (
        <Dropdown.Button overlay={menu}  disabled={true}>
            GBD
        </Dropdown.Button>
    )

}

export default GbdDrapDown;