const {fetchURL} = require('./helper/utils')
const {toUSDTBalances} = require('./helper/balances')

async function tvl(){
    const data = await fetchURL("https://app.algodex.com/algodex-backend/tvl.php/")
    return toUSDTBalances(data.data.total_liquidity_in_usd)
}
//    (asaAmount * tinyMan)
//    +
// Sum(algoAmount * tinyMan_USD_ALGO_Price)

// i need tinyman prices 
// https://mainnet.analytics.tinyman.org/api/v1/current-asset-prices/
// algoexplorer prices 
// https://price.algoexplorerapi.io/price/algo-usd

// for all assets whose usd prices are not available in tinyman , find prices from this api endpoint 
//  and multiply with price of asset 0 in tinyman api
// https://app.algodex.com/algodex-backend/assets.php
module.exports={
    misrepresentedTokens:true,
    algodex:{
        tvl
    }
}