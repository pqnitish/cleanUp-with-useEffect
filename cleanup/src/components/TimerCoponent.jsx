 import { useEffect,useState } from "react"
 export default function TimerCoponent(){
    const [seconds, setSeconds] = useState(0);
    useEffect(()=>{
        let timer = setInterval(()=>{
            setSeconds(prevSeconds=>prevSeconds +1);

        },1000);
        return function cleanUp(){
            clearInterval(timer);
        }

    },[]);
    return(
        <>
        <h1>Timer: {seconds} seconds</h1>
        </>
    )
}