import React,{useState,useEffect} from "react";
import {Modal, InputNumber , Menu, Dropdown, Button,Space } from "antd";
import { ColumnWidthOutlined, UserOutlined, StrikethroughOutlined} from '@ant-design/icons';
import CnyDrapDown from "./cny-drap-down";
import UsdDrapDown from "./usd-drap-down";
import GbdDrapDown from "./gbd-drap-down";
import {connect} from "react-redux";

function handleMenuClick (){

}

const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        1st menu item
      </Menu.Item>
    </Menu>
  );

function PopModal(props){
    const [amount, setAmount] = useState(1);
    const [exchange, setExchange] = useState(false);
    const [localCurrency, setLocalCurrency] = useState(0);
    const [foreignCurrency, setForeignCurrency] = useState(0);

    const {handleOk, handleCancel, visible, middleRate, curentCurrency} = props;

    useEffect(()=>{
        const local = amount * (middleRate / 100);
        const foreign = amount / ( middleRate / 100);

        setLocalCurrency(local.toFixed(2));
        setForeignCurrency(foreign.toFixed(2))

    },[middleRate, amount]);

    function handleInputChange (value){
        setAmount(value);
    }

    function handleExchange(){
        console.log("exchange!!!", !exchange)
        setExchange(!exchange);
    }

    console.log("curentCurrency !!!!!!!", curentCurrency);


    return(
        <Modal
        title="Currency Exchange"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        >
            <div>
                <Space>
                    <StrikethroughOutlined />
                    <span>
                        {amount} {!exchange ? curentCurrency : 'CNY'} = {!exchange ? localCurrency : foreignCurrency} {exchange ? curentCurrency : 'CNY'}
                    </span>
                    <span>
                        {amount} {!exchange ? 'CNY' : curentCurrency } = {exchange ? localCurrency : foreignCurrency} {exchange ? 'CNY' : curentCurrency}
                    </span>
                </Space>
                <Space>
                    <InputNumber value={amount} onChange={handleInputChange} />
                    {
                        !exchange ? (curentCurrency === "USD" ? <UsdDrapDown/> : <GbdDrapDown/>) : <CnyDrapDown/>
                    }
                    <ColumnWidthOutlined onClick={handleExchange}/>
                    {
                        exchange ? (curentCurrency === "USD" ? <UsdDrapDown/> : <GbdDrapDown/>) : <CnyDrapDown/>
                    }
                </Space>
            </div>


        </Modal>
    )
}

function mapStateToProps(state){
    return{
        curentCurrency: state.curentCurrency
    }

}

function mapDispatchToProps(dispacth){
    return {
       
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PopModal);