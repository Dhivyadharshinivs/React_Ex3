import React, {useEffect, useState} from 'react';
import './Home.css';

function Expo(){
    const d=new Date();
    const weekDay=['Sun','Tue','Wed','Thurs','Fri','Sat'];
    const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
    const [clockState,setClockState]=useState();

    useEffect(() => {
        setInterval(() => {
            const dt=new Date();
            setClockState(dt.toLocaleTimeString());
        },1000);
    },[]);

    const day=weekDay[d.getDay()]
    const month=months[d.getMonth()]
    const date=d.getDate()
    const year=d.getFullYear()

    return(
        <>
        <div className='main'>
            <div className='date'>
                <h1>{day}</h1>
                <h2>{date}</h2>
                <h2>{month}</h2>
                <h2>{year}</h2>
            </div>
            <div className='clock'>
                {clockState}
            </div>
        </div>
        </>

    );

}
export default Expo;