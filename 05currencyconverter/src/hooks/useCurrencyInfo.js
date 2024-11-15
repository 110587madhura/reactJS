import { useEffect, useState } from "react";

//  this customized hook fetch data 
function useCurrencyInfo(currency){
    const [data, setData] = useState({});  // to store data coming from api 
    useEffect(() => {
      fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
    }, [currency])

    console.log(data);
    return data
    
}


export default useCurrencyInfo;