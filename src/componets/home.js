import React,{useState, useEffect} from "react";
import {Table, Space, Tag,Popover,Button} from "antd";
import PopModal from "./pop-modal";
import {connect} from "react-redux";
import DailyAverageChart from "./daily-average-chart";
import {getRatesList,generateTableColumns,generateTableData} from "../utils";

  
function Home(props){

    const [visible, setVisible] = useState(false);
    const [data, setData] = useState([]);
    const [middleRate, setMiddleRate] = useState(0);
    const [columns, setColumns] = useState(generateTableColumns());
    // const [curentCurrency, setCurrentCurrency] = useState("USD")

    const {rates} = props;
 
    useEffect(()=>{
        getRatesList("rates")
            .then(({data})=>{
                props.updateRates({
                    type:"UPDATE_REATES",
                    data:data
                })
            })
    },[]);

    useEffect(()=>{
        setData(generateTableData(rates));
    },[rates])

    function handleClickRow(event,record,rowIndex){
        const {middleRate,currencyName} = record;
        console.log("currencyName：：",currencyName);
        setVisible(true);
        setMiddleRate(middleRate);
        props.updateCurrentCurrency({
            type: "UPDATE_CURRENT_CURRENCY",
            data: currencyName
        })
        // setCurrentCurrency(currencyName);
    }

    function handleOk (){
        setVisible(false);
    }

    function handleCancel(){
        setVisible(false);
    }

    function handleClickNavigate(){
        props.history.push("/setting")
    }

    console.log("prosps ===",props)

    return (
        <div>
            <div>
                <Button type="link" onClick={handleClickNavigate}>Go To Setting Page</Button>
            </div>
            
            <Space>
                <PopModal
                    handleOk={handleOk}
                    handleCancel={handleCancel}
                    visible={visible}
                    middleRate={middleRate}
                />
                <Table
                    columns={columns}
                    dataSource={data}

                    onRow={(record, rowIndex) => {
                        return {
                        onClick: (event) => {handleClickRow(event,record,rowIndex)}, // click row
                        };
                    }}
                />
                <DailyAverageChart/>
            </Space>
        </div>
   
    )
}

function mapStateToProps(state){
    return{
        rates: state.rates
    }

}

function mapDispatchToProps(dispacth){
    return {
        updateRates: task=>{
            dispacth(task)
        },
        updateCurrentCurrency: task=>{
            dispacth(task);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);