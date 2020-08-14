import React,{useState,useEffect} from "react";
import { Bar } from 'ant-design-pro/lib/Charts';
import {connect} from "react-redux";
import {getRatesList,generateChartData} from "../utils"
import {Dropdown, Menu} from "antd";
import CurrencyMode from "./currency-mode";



function DailyAverageChart(props){
 
    const {udsRates, gbdRates, currencyMode} = props;

    const [udsChartData, setUdsChartData] = useState([]);
    const [gbdChartData, setGbdChartData] = useState([]);

    useEffect(()=>{
        getRatesList("usdrates")
        .then(({data})=>{
            props.updateRates({
                type:"UPDATE_USD_REATES",
                data:data
            })
        });

        getRatesList("gbdrates")
        .then(({data})=>{
            console.log("gbdrates !!!!", data)
            props.updateRates({
                type:"UPDATE_GBD_REATES",
                data:data
            })
        });

    },[])

    useEffect(()=>{
        setUdsChartData(generateChartData(udsRates));
        setGbdChartData(generateChartData(gbdRates));
    },[udsRates,gbdRates]);


    return(
        <div>
            <CurrencyMode/>
            <Bar title="Daily Average Chart" data={currencyMode === "USD" ? udsChartData : gbdChartData} height={300}/>
        </div>
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
        updateRates: task=>{
            dispacth(task)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DailyAverageChart);