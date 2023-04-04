import React, { useState } from 'react'
import './App.css';

function App() {
  const [data,setData]=useState(new Array(4).fill(""))
    const handleFunction=(ele,index)=>{
        setData([...data.map((data1,index1)=>(index1===index)? ele.value: data1)])
        //autofocus for next box
        if(ele.nextBox){
            ele.nextBox.focus()
        }
    }
  return (
    <>
 <div className='first-container '>
    <h1 className=' h1-data'>LOGO</h1>
    <h3 className='h3-data'>OTP Verification</h3>
     <div className='inside-div'>
       <p>Enter OTP</p>
       <p className='para-2'>{data.join("")}</p>
      </div>
     <div className='input-div'>
        {
        data.map((otp,index)=>{
            return (
                <input type='text' name='otp' 
                key={index}
                value={otp}
                onChange={e=>handleFunction(e.target,index)}
                onFocus={e=>e.target.select()}
                />
            )
          })
        }
     </div>
     <p className='wrong-details'>Enter Wrong Details? <span className='text-danger' onClick={(e)=>setData([...data.map(clear=>"")])}>Re-enter</span></p>
     <button onClick={(e)=>console.log("Your OTP is: ",data.join(""))} >Verify</button>
     <p className='back'>Go Back To Home</p>
    </div>

    </>
  );
}

export default App;