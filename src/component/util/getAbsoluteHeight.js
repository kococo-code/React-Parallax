import React , {useRef,useEffect} from 'react';


const getAbsoluteHeight = (setHeight) => {
    const dom = useRef();
    function callback(){
        console.log(work);
    }
    useEffect(()=>{
        const {current} = dom;
        let element = 0;
        if(current){
            element = dom.getBoundingClientRect()
            callback();
        }
    },[dom])
}

export default getAbsoluteHeight;