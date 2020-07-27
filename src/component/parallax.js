import React ,{useState,useEffect} from 'react';
import ObserverDom from './util/CaptureScroll';
export default function Parallax(){
    
    const [offset,setOffset] = useState(0)
    const [onBoard, setOnBoard] = useState(0);
    
    
    useEffect(()=>{
        if(onBoard===1){
            console.log()
        }
        function handleScroll(){
            setOffset(window.pageYOffset);
        }
        window.addEventListener("scroll",handleScroll);
        return ()=>{
            window.removeEventListener("scroll",handleScroll);
        } 
        
                   
    },[]);
    return(
        <section id="Parallax" {...ObserverDom(0.1,setOnBoard)}>
            {offset}
            <li className="keywords" style={{transform : `translate3D(${offset*0.1}px,0,0)`}}>JinTaekLim</li>
            <li className="keywords" style={{transform : `translate3D(${offset*-0.1}px,0,0)`}}>Kococo</li>
            <li className="keywords" style={{transform : `translate3D(${offset*0.1}px,0,0)`}}>SoftWare Engineer</li>
            <li className="keywords" style={{transform : `translate3D(${offset*-0.1}px,0,0)`}}>Real</li>
            <li className="keywords" style={{transform : `translate3D(${offset*0.1}px,0,0)`}}>JinTaekLim</li>
        </section>
    )
}