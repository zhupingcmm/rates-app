import React from "react";
import { Menu } from 'antd';

function SiderBar (props){
    function handleClick(){
        console.log("SiderBar::",props);
        props.history.push("/setting")

    }

    return (
        <Menu
        onClick={handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        >
             <Menu.Item key="5">go to setting page</Menu.Item>
        </Menu>
    )


}

export default SiderBar;