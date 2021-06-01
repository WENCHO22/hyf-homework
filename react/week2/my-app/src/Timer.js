import React, { useEffect, useState } from 'react';


export default function Timer(){
    const [timer, setTimer] = useState(0)
    useEffect(()=>{
       setTimeout(()=> setTimer(timer + 1), 1000)     
    })    
    return(
        <p>You have used {timer} seconds on this website</p>
    )
}