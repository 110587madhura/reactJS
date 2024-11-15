import React, {useId} from 'react'

function InputBox({    // defining all the possible "props"
    label,  // state variable
    amount,  // state variable
    onAmountChange,  // method
    onCurrencyChange,  // method
    currencyOptions = [],
    selectedCurrency = "usd",   // default 
    amountDisabled = false,
    currrencyDisabled = false,
    className = "",
}) {

    const id = useId()    // useId() hook provide unique id
  return (
    // input field :
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className='w-1-2'>
            <label htmlFor={id}  className='text-black/40 mb-2 inline-block'>{label}</label>
 {/* define a input field */}
            <input  
            id={id}  // id = "currency"  and htmlFor = "currency"
            type="number"
            className='outline-none w-full bg-transparent py-1.5'
            placeholder='Amount'
            disabled={amountDisabled}
            value={amount}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
             />
             {/* currency option fields : */}
        </div>
        <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
 {/* define a select option field :  */}
        <select 
        className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
        value={selectedCurrency}
        onChange={(e) => { onCurrencyChange && onCurrencyChange(e.target.value)}}
        disabled={currrencyDisabled}
        >
            {currencyOptions.map((currency) => (
                <option key={currency} value={currency}>{currency}</option>
            ))}
        </select>
        </div>
    </div>
  )
}

export default InputBox