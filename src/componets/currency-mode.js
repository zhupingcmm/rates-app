import React from "react";
import {connect} from "react-redux";
import {Dropdown, Menu} from "antd";

function CurrencyMode(props){
    const {currencyMode} = props;
    function handleMenuClick({key}){
        props.updateDailyAverageMode(
            {
                type: "UPDATE_DAILY_AVERAGE_MODE",
                data: key
            }
        );

    }

    const menu =(
        <Menu  onClick={handleMenuClick}>
            <Menu.Item key="GBD">
                GBD
            </Menu.Item>
            <Menu.Item key="USD">
                USD
            </Menu.Item>
        </Menu>
    )

    return(
        <div>
            <Dropdown.Button overlay={menu} className="currency-mode">
                {currencyMode}
            </Dropdown.Button>
            <span className="currency"> SELECT CURRENCY YOU WANT TO SHOW</span>
        </div>

    )

}


function mapStateToProps(state){
    return{
        currencyMode: state.currencyMode
    }

}

function mapDispatchToProps(dispacth){
    return {
        updateDailyAverageMode: task=>{
            dispacth(task)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CurrencyMode);

