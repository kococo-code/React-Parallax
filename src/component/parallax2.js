import React ,{useState,useEffect} from 'react';
export default function Parallax(){
    
    const [offset,setOffset] = useState(0)
    const [onBoard, setOnBoard] = useState(0);
    const height = 1000
    
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
        <section id="Parallax2">
            {offset}
            <li className="keywords" style={{transform : `translate3D(${-height+offset}px,0,50px)`}}>JinTaekLim</li>
            <li className="keywords" style={{transform : `translate3D(0,${height-offset}px,30px)`}}>Kococo</li>
            <li className="keywords" style={{transform : `translate3D(${-height+offset}px,${height-offset}px,0)`}}>SoftWare Engineer</li>
            <li className="keywords" style={{transform : `translate3D(${height-offset}px,0,0)`}}>Real</li>
            <li className="keywords" style={{transform : `translate3D(${-height+offset}px,0,0)`}}>JinTaekLim</li>
        </section>
    )
}