function getRatesList(parameter){
    return fetch(`http://localhost:3001/${parameter}`)
            .then(res=>res.json())
}

function generateChartData(data){
    console.log("data:::",data)
    const salesData =[];

    for(let i =0; i< 30; i++){
        const dayTotalmiddleRate = [];
        let start = i * 23;
        for( let j = start ; j <= start + 23; j++){
            data[j] && dayTotalmiddleRate.push(data[j]['middleRate']); 
        }
        const dailyRate = dayTotalmiddleRate.reduce((pre,cur,index,arr)=>{
            return pre + cur
        },0)
        salesData.push({
            x: `${i + 1 }`,
            y: Math.floor(dailyRate/24)
        })  
    }

    return salesData;

}

function generateTableColumns(){
    return [
        {
          title: 'Currency Name',
          dataIndex: 'currencyName',
          key: 'currencyName',
        },
        {
          title: 'Buying Rate',
          dataIndex: 'buyingRate',
          key: 'buyingRate',
        },
        {
          title: 'Cash Buying Rate',
          dataIndex: 'cashBuyingRate',
          key: 'cashBuyingRate',
        },
        {
          title: 'Selling Rate',
          key: 'sellingRate',
          dataIndex: 'sellingRate',
        },
        {
          title: 'Cash Selling Rate',
          key: 'cashSellingRate',
          dataIndex: 'cashSellingRate'
        },
        {
            title: 'Middle Rate',
            key: 'middleRate',
            dataIndex: 'middleRate',
        },
        {
            title: 'Pub Time',
            key: 'pubTime',
            dataIndex: 'pubTime'
        }
      ];
}

function generateTableData(data){
   return data.map((item,index)=>{
        item.key = index + 1;
        return item;
    });

}

export {
    getRatesList,
    generateChartData,
    generateTableColumns,
    generateTableData
}