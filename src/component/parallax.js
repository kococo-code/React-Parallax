import React ,{useState,useEffect} from 'react';
import ObserverDom from './util/CaptureScroll';
export default function  (){
    
    const [offset,setOffset] = useState(0)
    const [onBoard, setOnBoard] = useState(0);

    
    useEffect(()=>{

        function handleScroll(){
            setOffset(window.pageYOffset);
        }
        window.addEventListener("scroll",handleScroll);
        return ()=>{
            window.removeEventListener("scroll",handleScroll);
        } 
        
                   
    },[]);
    return(
        <div id="Text_Parallax" {...ObserverDom(0.01,setOnBoard)}>
        
        <section id="Parallax">
            {offset}
            <li className="keywords" style={onBoard ? {transform : `translate3D(${offset*-0.5}px,0,0)`} : {transform : `translate3D(0,0,0)`}}>JinTaekLim</li>
            <li className="keywords" style={onBoard ? {transform : `translate3D(${offset*0.5}px,0,0)`} : {transform : `translate3D(0,0,0)`}}>Kococo</li>
            <li className="keywords" style={onBoard ? {transform : `translate3D(${offset*-0.5}px,0,0)`} : {transform : `translate3D(0,0,0)`}}>Buen dia!</li>
            <li className="keywords" style={onBoard ? {transform : `translate3D(${offset*0.5}px,0,0)`} : {transform : `translate3D(0,0,0)`}}>Real</li>
            <li className="keywords" style={onBoard ? {transform : `translate3D(${offset*-0.5}px,0,0)`} : {transform : `translate3D(0,0,0)`}}>Hello</li>
        </section>
        </div>
    )
}