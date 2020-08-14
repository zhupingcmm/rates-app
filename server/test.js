
const fs = require("fs");
const path = require("path");
const { match } = require("assert");

function getnerate(){
    // console.log("random 10::::", (Math.random(1)*100).toFixed(2))
    let randomPrice = parseInt((Math.random(-1)*10).toFixed(0));
    console.log("randomPrice",randomPrice);
    const map = {};
    let data = [];
    for(let i = 1; i<= 30 ; i++){
        for(let j = 0; j<24; j++){
            // let usdDayMap = {};
            // usdDayMap["currencyName"] = "USD"
            // usdDayMap["buyingRate"] = 692.99 +  parseInt((Math.random(-1)*10).toFixed(0));
            // usdDayMap["cashBuyingRate"] = 687.36 +  parseInt((Math.random(-1)*10).toFixed(0));
            // usdDayMap["sellingRate"] = 695.93 +  parseInt((Math.random(-1)*10).toFixed(0));
            // usdDayMap["cashSellingRate"] = 695.93 +  parseInt((Math.random(-1)*10).toFixed(0));
            // usdDayMap["middleRate"] = 694.29 +  parseInt((Math.random(-1)*10).toFixed(0));
            // usdDayMap["pubTime"] = `2020.07.${i} ${j}:0:0 `;

            let gbdDayMap = {};
            gbdDayMap["currencyName"] = "GBD"
            gbdDayMap["buyingRate"] = 903.42 +  parseInt((Math.random(-1)*10).toFixed(0));
            gbdDayMap["cashBuyingRate"] = 875.35 +  parseInt((Math.random(-1)*10).toFixed(0));
            gbdDayMap["sellingRate"] = 910.07 +  parseInt((Math.random(-1)*10).toFixed(0));
            gbdDayMap["cashSellingRate"] = 914.09 +  parseInt((Math.random(-1)*10).toFixed(0));
            gbdDayMap["middleRate"] = 907 +  parseInt((Math.random(-1)*10).toFixed(0));
            gbdDayMap["pubTime"] = `2020.07.${i} ${j}:0:0 `;

            // data.push(usdDayMap);
            data.push(gbdDayMap);
        }
    }


    map["data"] = data;

    return map;

}

function test(){
    let data  = getnerate();
    // console.log(data)
    fs.writeFile(path.join(__dirname, "../mock/gbd-rates.json"), JSON.stringify(data),(err)=>{
        if (err) throw err;
        console.log("done")
    })
}

test();