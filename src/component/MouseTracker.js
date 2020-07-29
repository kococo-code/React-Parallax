import React ,{useState, useEffect,useRef} from 'react';
import getAbsoluteHeight from './util/getAbsoluteHeight';
export default function BallTrack(){
    
    const [mousePos,setMousePos] = useState({x:null,y:null});
    const [target , setTarget] = useState(null);
    const [height,setHeight]= useState(0);
    const [scrollOffset,setScrollOffset] = useState(0)
    const [heighttmp,setHeighttmp]= useState(0);
    function handleheight(){
        let element = document.getElementById('BallTracker');
        
        setHeight(element.getBoundingClientRect().y);
    }
    useEffect(()=>{
        const handleMousePosition = ev =>{
            setMousePos({x:ev.clientX,y:ev.clientY});
        }
        function handleScroll(){
            setScrollOffset(window.pageYOffset);
        }
        handleheight();
        window.addEventListener("scroll",handleScroll);
        window.addEventListener("mousemove",handleMousePosition);
        return ()=> {
            window.removeEventListener("mousemove",handleMousePosition);
            window.removeEventListener("scroll",handleScroll);
        }
    },[])
    return(
        <section id="BallTracker" ref={setTarget}>
            {mousePos.x} , {mousePos.y}
            <div className="Ball" style={{transform : `translateX(0) translateY(${scrollOffset-height}px) rotate(${mousePos.y%360}deg)`}}>Work</div>
            <div className="Ball" style={{transform : `translateX(100px) rotate(${mousePos.y+200%360}deg`}}>Work</div>
            <div className="Ball" style={{transform : `translateX(200px) translateY(${scrollOffset-height}px) rotate(${mousePos.y+3%360}deg`}}>Work</div>
            <div className="Ball" style={{transform : `translateX(300px) rotate(${mousePos.y%360}deg`}}>Work</div>
            <div className="Ball" style={{transform : `translateX(400px) translateY(${scrollOffset-height}px) rotate(${mousePos.y%360}deg`}}>Work</div>
            <div className="Ball" style={{transform : `translateX(500px) translateY(${scrollOffset-height}px) rotate(${mousePos.y%360}deg`}}>Work</div>
            <div className="Ball" style={{transform : `translateX(600px) translateY(${scrollOffset-height}px) rotate(${mousePos.y%360}deg`}}>Work</div>
            <div className="Ball" style={{transform : `translateX(700px) translateY(${scrollOffset-height}px) rotate(${mousePos.y%360}deg`}}>Work</div>
            <div className="Ball" style={{transform : `translateX(800px) translateY(${scrollOffset-height}px) rotate(${mousePos.y%360}deg`}}>Work</div>


        <svg>
            <filter id="gooey" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="gooey" />        
            <feBlend in="SourceGraphic" in2="gooey" />
        </svg>
        </section>

    )
}