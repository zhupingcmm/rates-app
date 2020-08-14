import React,{useEffect,useState} from "react";
import {connect} from "react-redux";
import CurrencyMode from "./currency-mode";
import {getRatesList,generateTableColumns,generateTableData} from "../utils";
import {Table, Space, Tag,Popover,Button} from "antd";
import { PageHeader } from 'antd';

function Setting(props){
    const {currencyMode, udsRates, gbdRates} = props;
    const [columns, setColumns] = useState(generateTableColumns());
    const [data, setData] = useState([]);

    useEffect(()=>{
        switch(currencyMode){
            case "UDS":
                setData(generateTableData(udsRates));
                break;
            case "GBD":
                setData(generateTableData(gbdRates));
                break;
            default:
                setData(generateTableData(udsRates));
        }

    },[currencyMode]);

    function handleOnBack (){
        console.log("goBack::",props.history)
        props.history.goBack();
    }

    console.log("props::::Setting",props)

    return(
        <>
            <PageHeader
                className="site-page-header"
                onBack={() => {handleOnBack()}}
                title="Go Back"
                subTitle="This is setting page"
            />
            <CurrencyMode/>
            <Table
                columns={columns}
                dataSource={data}
            />
        </>
    )
}

function mapStateToProps(state){
    return{
        udsRates: state.usdRates,
        gbdRates: state.gbdRates,
        currencyMode: state.currencyMode
    }

}

function mapDispatchToProps(dispacth){
    return {
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Setting);