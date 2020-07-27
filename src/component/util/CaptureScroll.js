import React ,{useRef,useEffect,useCallback} from 'react';

const ObserveDom = (threshold=0.1,setOnBoard) =>{
    const dom = useRef();
    const callback = (entries , observer)=>{
        entries.forEach((entry)=>{
            if (entry.isIntersecting){
                setOnBoard(1);
                console.log('Word')
            }
            else{
                setOnBoard(0);
                console.log('None');    
            }
        })
    }

    useEffect(() => {
        let observer;
        const { current } = dom;

        if (current) {
        observer = new IntersectionObserver(callback, { threshold: threshold});
        observer.observe(current);
        }

        return () => observer && observer.disconnect();
    }, [dom]);

    return {
        ref: dom,
    };   
}

export default ObserveDom;