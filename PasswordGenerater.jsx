import {useState} from 'react'
export const PasswordGenerater = () => {
    const [length,setlength]=useState(8)
    const [includeUpperCase,setincludeUpperCase]=useState(true)
    const [includeLowerCase,setincludeLowerCase]=useState(true)
    const [includeSymbol,setincludeSymbol]=useState(true)
    const [includeNumber,setincludeNumber]=useState(true)
    const [password,setPassword]=useState("")
    const GeneratePassword =()=>
        {
           let charset=" ";
           if(includeUpperCase) charset +="ABCDEFGHIJKLMNOPQRSTUVWSYZ"
           if(includeLowerCase) charset +="abcdefghijklmnopqrstuvwxyz"
           if(includeNumber) charset +="0123456789"
           if(includeSymbol) charset +="!@#$%^&*()_-+="
           let generatedPAssword =""
           for(let i=0 ; i<length; i++)
           {
            const randomIndex = Math.floor(Math.random() * charset.length)
            generatedPAssword +=charset[randomIndex]
            console.log(generatedPAssword)
            setPassword(generatedPAssword)
           }
        }
   const copyToClipboard =()=>{
    navigator.clipboard.writeText(password)
    alert("Password Copied")
   }
  return (
    <>
    <div className="password-generater">
        <h2>Strong Password Generater</h2>
        <div className="input-groups">
            <label htmlFor="num">Password Length:</label>
            <input type="number" id="num" value={length} onChange={(e)=>setlength(parseInt(e.target.value))}/>
        </div>
        <div className="checkbox-groups">
            <input type="checkbox" name="" id="upper" checked={includeUpperCase} onChange={(e)=>setincludeUpperCase(e.target.checked)}/>
            <label htmlFor="upper">Iclude Uppercase</label>
        </div>
        <div className="checkbox-groups">
            <input type="checkbox" name="" id="lower" checked={includeLowerCase} onChange={(e)=>setincludeLowerCase(e.target.checked)}/>
            <label htmlFor="lower">Iclude lowercase</label>
        </div>
        <div className="checkbox-groups">
        <input type="checkbox" name="" id="numbers" checked={includeNumber} onChange={(e)=>setincludeNumber(e.target.checked)}/>
        <label htmlFor="numbers">Iclude Numbers</label>
        </div>
        <div className="checkbox-groups">
        <input type="checkbox" name="" id="symbol" checked={includeSymbol} onChange={(e)=>setincludeSymbol(e.target.checked)} />
        <label htmlFor="numbers">Iclude Symbol</label>
        </div>
        <button className="generate-btn" onClick={GeneratePassword}>Generate Password</button>
        <div className="generated-password">
            <input type="text" readOnly value={password}/>
            <button className="copy-btn" onClick={copyToClipboard}>Copy</button>
        </div>
    </div>
    </>
  )
}
